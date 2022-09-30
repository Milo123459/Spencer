use crate::commands::*;
use crate::database::{
    connection::CONNECTION,
    prisma::reminder::{self as reminder_model, UniqueWhereParam},
};
use prisma_client_rust::chrono::Utc;
use serenity::{
    async_trait,
    model::{
        application::{command::Command, interaction::Interaction},
        gateway::{Activity, Ready},
        id::UserId,
    },
    prelude::*,
};
use tracing::{error, info};

pub struct Handler;

#[async_trait]
impl EventHandler for Handler {
    async fn ready(&self, ctx: Context, ready: Ready) {
        info!(
            "Shard {} is now online, serving {} guilds",
            ctx.shard_id,
            ready.guilds.len()
        );

        // register commands here on start
        reminder::reminder(&ctx.http).await;

        ctx.set_activity(Activity::watching("reminders")).await;

        let interactions = Command::get_global_application_commands(&ctx.http).await;
        info!(
            "Global slash commands: {}",
            interactions
                .unwrap_or_else(|_| Vec::new())
                .iter()
                .map(|command| { command.name.clone() })
                .collect::<Vec<String>>()
                .join(", ")
        );
        tokio::spawn(async move {
            loop {
                let client = CONNECTION.get().unwrap();
                let reminders = client
                    .reminder()
                    .find_many(vec![reminder_model::remind_at::lt(Utc::now().into())])
                    .exec()
                    .await
                    .unwrap();
                for reminder in reminders {
                    if let Ok(user) = UserId(reminder.discord_id.try_into().unwrap())
                        .to_user(&ctx.http)
                        .await
                    {
                        if let Err(_err) = user
                            .direct_message(&ctx.http, |msg| {
                                msg.content(format!("Reminder: {}", reminder.message))
                            })
                            .await
                        {
                            // oh no, they have dms off
                        }
                    } else {
                        // not sure how this can actually fail but yay error handling
                    }
                    client
                        .reminder()
                        .delete(UniqueWhereParam::IdEquals(reminder.id))
                        .exec()
                        .await
                        .unwrap();
                }
                tokio::time::sleep(tokio::time::Duration::new(60, 0)).await;
            }
        });
    }

    async fn interaction_create(&self, ctx: Context, interaction: Interaction) {
        if let Some(interaction) = interaction.clone().application_command() {
            info!(
                "{}#{:0>4} ran command {}",
                interaction.user.name, interaction.user.discriminator, interaction.data.name
            );
            match interaction.data.name.as_str() {
                "reminder" => reminder::reminder_run(ctx.clone(), interaction.clone()).await,
                _ => error!(
                    "Command {} has not been implemented yet",
                    interaction.data.name.as_str()
                ),
            }
        }
    }
}

use ms::*;
use prisma_client_rust::chrono::{Duration, Utc};
use serenity::{
    client::Context,
    http::Http,
    model::application::{
        command::{Command, CommandOptionType},
        interaction::{
            application_command::{ApplicationCommandInteraction, CommandDataOptionValue},
            MessageFlags,
        },
    },
};
use tracing::error;

pub async fn reminder(http: &Http) {
    Command::create_global_application_command(&http, |a| {
        a.name("reminder")
            .description("Create a new reminder")
            .create_option(|o| {
                o.kind(CommandOptionType::String)
                    .name("time")
                    .description("When you want to be reminded, e.g, 5 minutes")
                    .required(true)
            })
            .create_option(|o| {
                o.kind(CommandOptionType::String)
                    .name("message")
                    .description("What you want to be reminded of")
                    .required(true)
            })
    })
    .await
    .unwrap();
}

pub async fn reminder_run(ctx: Context, interaction: ApplicationCommandInteraction) {
    let mut time = String::new();
    let mut message = String::new();
    if let Some(option) = interaction.data.options.get(0) {
        if let Some(CommandDataOptionValue::String(time_opt)) = option.resolved.as_ref() {
            time = time_opt.clone()
        }
    }
    if let Some(option) = interaction.data.options.get(1) {
        if let Some(CommandDataOptionValue::String(message_opt)) = option.resolved.as_ref() {
            message = message_opt.clone()
        }
    }

    let time_convert = ms!(time.as_str());
    if let Some(time) = time_convert {
        let timed = Duration::milliseconds(Utc::now().timestamp_millis())
            + Duration::milliseconds(time as i64);
        crate::database::reminder::create_reminder(interaction.user.id.0 as i64, timed, message)
            .await;
        if let Err(err) = interaction
            .create_interaction_response(&ctx.http, |f| {
                f.interaction_response_data(|y| {
                    y.content("Reminder created").flags(MessageFlags::EPHEMERAL)
                })
            })
            .await
        {
            error!("Cannot respond to slash command: {}", err);
        }
    } else if let Err(err) = interaction
        .create_interaction_response(&ctx.http, |f| {
            f.interaction_response_data(|y| {
                y.content("Invalid time format")
                    .flags(MessageFlags::EPHEMERAL)
            })
        })
        .await
    {
        error!("Cannot respond to slash command: {}", err);
    }
}

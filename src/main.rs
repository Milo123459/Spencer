use crate::event_handler::Handler;
use database::connection::insert_database_connection;
use dotenv::dotenv;
use serenity::{model::gateway::GatewayIntents, Client};
use tracing::error;
use tracing_subscriber::FmtSubscriber;

mod commands;
mod database;
mod event_handler;

#[tokio::main]
async fn main() {
    let subscriber = FmtSubscriber::builder().without_time().finish();
    tracing::subscriber::set_global_default(subscriber).expect("setting default subscriber failed");
    dotenv().ok();
    let token =
        dotenv::var("DISCORD_TOKEN").expect("No DISCORD_TOKEN environment variable was found");

    let application_id: u64 = dotenv::var("APPLICATION_ID")
        .expect("No APPLICATION_ID environment variable was found")
        .parse()
        .expect("APPLICATION_ID couldn't be parsed");

    let mut client = Client::builder(token, GatewayIntents::empty())
        .event_handler(Handler)
        .application_id(application_id)
        .await
        .expect("Error creating client");
    insert_database_connection().await;

    if let Err(err) = client.start_autosharded().await {
        error!("Client error: {:?}", err);
    }
}

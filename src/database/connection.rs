use super::prisma::{new_client, PrismaClient};
use once_cell::sync::OnceCell;

pub static CONNECTION: OnceCell<PrismaClient> = OnceCell::new();

pub async fn insert_database_connection() {
    let client = new_client().await.expect("Failed to create prisma client");
    CONNECTION
        .set(client)
        .expect("Failed to update OnceCell value");
}

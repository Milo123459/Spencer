use super::prisma::reminder::Data;
use crate::database::connection::CONNECTION;
use prisma_client_rust::chrono::{DateTime, Duration, NaiveDateTime, Utc};
use std::convert::From;

#[derive(Clone)]
pub struct Reminder {
    pub remind_at:
        ::prisma_client_rust::chrono::DateTime<::prisma_client_rust::chrono::FixedOffset>,
    pub message: String,
}

impl From<Data> for Reminder {
    fn from(item: Data) -> Self {
        Self {
            remind_at: item.remind_at,
            message: item.message,
        }
    }
}

pub async fn create_reminder(id: i64, time: Duration, message: String) {
    let client = CONNECTION.get().unwrap();
    let time = DateTime::<Utc>::from_utc(NaiveDateTime::from_timestamp(time.num_seconds(), 0), Utc);
    client
        .reminder()
        .create(id, message, time.into(), vec![])
        .exec()
        .await
        .unwrap();
}

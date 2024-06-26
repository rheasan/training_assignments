use std::{thread::sleep, time::Duration};

use dotenv;
fn main() {
    dotenv::dotenv().ok();
    let _guard = sentry::init((
        std::env::var("SENTRY_DSN").unwrap(),
        sentry::ClientOptions {
            release: sentry::release_name!(),
            ..Default::default()
        },
    ));

    // Sentry will capture this
    println!("Panicking in 3sec");
    sleep(Duration::from_secs(3));
    panic!("Everything is on fire!");
}

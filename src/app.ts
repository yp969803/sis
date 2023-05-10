import * as dotenv from 'dotenv';
dotenv.config();

import { App } from '@slack/bolt';
import * as router from './router';

let port = 3000;
if (process.env.PORT !== undefined) {
  port = parseInt(process.env.PORT);
}

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN,
  port: port,
});

app.message('ping', async ({ message, say }) => {
  console.log(message);
  await say('pong');
});

async function init() {
  await app.start();
  console.log("Ready to accept messages");
}

init();

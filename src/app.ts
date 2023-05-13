import * as dotenv from 'dotenv';
dotenv.config();

import {App} from '@slack/bolt';
import {redisInit, setValue,getValue} from './services/redis';
import {router} from './router';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});
app.message('',async({message,say})=>{
    let result:string=await router(message);
    if (result==="_") {
      return;
    }
   say(result);

})

async function init() {
  await app.start(process.env.PORT || 3000);
  console.log('[APP] app is running');
  await redisInit();
}
init();

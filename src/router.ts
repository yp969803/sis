import * as dotenv from 'dotenv';
dotenv.config();
import {App} from '@slack/bolt';
import {redisInit} from './services/redis';
import * as router from './router';


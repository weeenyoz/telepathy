/* eslint-disable @typescript-eslint/camelcase */
import dotenv from 'dotenv';

dotenv.config();

// configs for twitter
export default {
    consumer_key: process.env.CONSUMER_KEY as string,
    consumer_secret: process.env.CONSUMER_SECRET as string,
    access_token: process.env.ACCESS_TOKEN as string,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
};

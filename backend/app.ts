import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import { Strategy } from 'passport-twitter';

dotenv.config();

passport.use(
    new Strategy(
        {
            consumerKey: process.env.CONSUMER_KEY as string,
            consumerSecret: process.env.CONSUMER_SECRET as string,
            callbackURL: 'http://localhost:3000/auth/twitter/return',
        },
        (token: any, tokenSecret: any, profile: any, callback: any) => {
            return callback(null, profile);
        },
    ),
);

passport.serializeUser((user: any, callback: any) => {
    callback(null, user);
});

passport.deserializeUser((obj: any, callback: any) => {
    callback(null, obj);
});

const app = express();

app.use(express.json());
app.use(passport.initialize());

export default app;

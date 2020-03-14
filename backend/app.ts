/* eslint-disable @typescript-eslint/camelcase */
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import passport, { Profile } from 'passport';
import { Strategy } from 'passport-twitter';
import winston from 'winston';
import errorHandler from './middleware/error';
import userRoutes from './routes/User';
import tweetRoutes from './routes/Tweets';

dotenv.config();

export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logfile.log' }),
    ],
});

passport.use(
    new Strategy(
        {
            consumerKey: process.env.CONSUMER_KEY as string,
            consumerSecret: process.env.CONSUMER_SECRET as string,
            callbackURL: 'http://localhost:5000/api/user/auth/twitter/return',
            includeEmail: true,
        },
        (token: any, tokenSecret: any, profile: Profile, callback: any) => {
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

const corsOptions: CorsOptions = {
    credentials: true,
    origin: 'http://localhost:3000/',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(
    session({
        name: process.env.SESS_NAME as string,
        secret: process.env.SESS_SECRET as string,
        resave: false,
        saveUninitialized: false,
    }),
);
app.use(errorHandler);

app.use('/api/user', userRoutes);
app.use('/api/tweeter', tweetRoutes);

export default app;

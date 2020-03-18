/* eslint-disable @typescript-eslint/camelcase */
import Twit from 'twit';
import { RequestHandler } from 'express';
import dotenv from 'dotenv';
import TwitterConfig from '../config';

dotenv.config();

export const getTimeline: RequestHandler = async (req, res, next) => {
    const T = new Twit(TwitterConfig);

    try {
        const result = await T.get('statuses/home_timeline', { count: 5 });

        const timeline = (result.data as []).map((d: any) => {
            const { id, id_str, text, entities, user, retweeted_status } = d;
            const { name, screen_name, description, url, profile_image_url } = user;

            return {
                id,
                idStr: id_str,
                title: text,
                url: entities.urls.length && entities.urls[0].url,
                user: {
                    name,
                    screenName: screen_name,
                    description,
                    url,
                    profileImageUrl: profile_image_url,
                    retweetedStatus: retweeted_status,
                },
            };
        });

        res.status(200).json(timeline);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

export const postTweet: RequestHandler = async (req, res, next) => {
    const T = new Twit(TwitterConfig);

    const tweet = req.body;

    try {
        const result: any = await T.post('statuses/update', tweet);
        result && res.status(204).send();
    } catch (error) {
        console.error(error);
        next(error);
    }
};

export const reTweet: RequestHandler = async (req, res, next) => {
    const T = new Twit(TwitterConfig);

    const reTweetId = req.body;

    try {
        await T.post('statuses/retweet/:id', reTweetId, (err, data, response) => {
            const { id, text, entities, user, retweeted_status } = data as any;

            const { name, screen_name, description, url, profile_image_url } = user;

            const retweet = {
                id,
                title: text,
                url: entities.urls.length && entities.urls[0].url,
                user: {
                    name,
                    screenName: screen_name,
                    description,
                    url,
                    profileImageUrl: profile_image_url,
                    retweetedStatus: retweeted_status,
                },
            };

            res.status(204).send();
        });
    } catch (error) {
        res.send(error);
    }
};

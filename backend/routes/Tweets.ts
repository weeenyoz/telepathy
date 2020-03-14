import Twit from 'twit';
import express from 'express';
import dotenv from 'dotenv';
import TwitterConfig from '../config';

dotenv.config();

const router = express.Router();

router.get('/timeline', async (req, res) => {
    const T = new Twit(TwitterConfig);

    try {
        const result = await T.get('statuses/home_timeline', {
            count: 5,
        });

        const tweet = (result.data as []).map((d: any) => {
            const { id, text, entities, user } = d;

            return {
                id,
                title: text,
                url: entities.urls[0].url,
                user: {
                    name: user.name,
                    screenName: user.screen_name,
                    description: user.description,
                    url: user.url,
                    profileImageUrl: user.profile_image_url,
                },
            };
        });

        res.status(200).json(tweet);
    } catch (error) {
        // next(error);
    }
});

export default router;

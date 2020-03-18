import express from 'express';
import { postTweet, getTimeline, reTweet } from '../controllers/Tweets';
import authoriseUser from '../middleware/authoriseUser';

const router = express.Router();

/**
 * GET /api/tweeter/timeline
 * Get timeline
 */
router.get('/timeline', authoriseUser, getTimeline);

/**
 * POST /api/tweeter
 * Post a tweet
 */
router.post('/', authoriseUser, postTweet);

/**
 * POST /api/tweeter/retweet
 * Retweets a tweet
 */
router.post('/retweet', reTweet);

export default router;

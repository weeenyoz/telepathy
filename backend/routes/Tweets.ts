import express from 'express';
import { postTweet, getTimeline } from '../controllers/Tweets';

const router = express.Router();

/**
 * GET /api/tweeter/timeline
 * Get timeline
 */

router.get('/timeline', getTimeline);

/**
 * POST /api/tweeter
 */

router.post('/', postTweet);

export default router;

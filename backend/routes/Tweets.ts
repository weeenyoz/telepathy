import express from 'express';
import { postTweet, getTimeline } from '../controllers/Tweets';
import authoriseUser from '../middleware/authoriseUser';

const router = express.Router();

/**
 * GET /api/tweeter/timeline
 * Get timeline
 */
router.get('/timeline', authoriseUser, getTimeline);

/**
 * POST /api/tweeter
 */
router.post('/', authoriseUser, postTweet);

export default router;

import express from 'express';
import { loginRedirect, getUser, userLogout } from '../controllers/User';
import authoriseUser from '../middleware/authoriseUser';
import passport from 'passport';

const router = express.Router();

/**
 * GET /api/user/
 * Get user
 */
router.get('/', authoriseUser, getUser);

/**
 * GET /api/user/login
 * Log user in
 */
router.get('/login', passport.authenticate('twitter'));

/**
 * GET /api/user/auth/twitter/return
 * Login callback to redirect
 */
router.get(
    '/auth/twitter/return',
    passport.authenticate('twitter', {
        failureRedirect: 'http://localhost:3000/',
    }),
    loginRedirect,
);

/**
 * GET /api/user/logout
 * Log user out
 */
router.get('/logout', authoriseUser, userLogout);

export default router;

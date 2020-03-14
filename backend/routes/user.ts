import express from 'express';
import { redirectToHome, getUser } from '../controllers/User';
import passport from 'passport';

const router = express.Router();

router.get('/', getUser);

router.get('/login', passport.authenticate('twitter'));

router.get(
    '/auth/twitter/return',
    passport.authenticate('twitter', {
        failureRedirect: 'http://localhost:3000/',
    }),
    redirectToHome,
);

export default router;

import { RequestHandler } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserInterface } from '../models/User';

dotenv.config();

export const getUser: RequestHandler = (req, res, next) => {
    const userId = (req.session as any).passport.user.id;
    const username = (req.session as any).passport.user.username;
    const displayName = (req.session as any).passport.user.displayName;
    const profileImageUrl = (req.session as any).passport.user.photos[0].value;
    const expiresIn = (req.session as any).cookie.originalMaxAge;

    const user: UserInterface = { id: userId, username, displayName, profileImageUrl };

    const token = jwt.sign({ user }, process.env.SECRET_KEY as Secret);

    res.json({ token, user, expiresIn });
};

export const redirectToHome: RequestHandler = (req, res) => {
    (req.session as any).cookie = {
        originalMaxAge: parseInt(process.env.SESS_LIFETIME as string),
        sameSite: true,
        secure: false,
    };

    res.redirect(`http://localhost:3000/home/`);
};

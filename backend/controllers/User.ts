import { RequestHandler } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const getUser: RequestHandler = (req, res, next) => {
    const userId = (req.session as any).passport.user.id;
    const profileImageUrl = (req.session as any).passport.user.photos[0].value;

    const user = { id: userId, profileImageUrl };

    jwt.sign({ user }, process.env.SECRET_KEY as Secret, (err: any, token: any) => {
        res.json({
            token,
            user,
        });
    });
};

export const redirectToHome: RequestHandler = (req, res) => {
    (req.session as any).cookie = {
        originalMaxAge: parseInt(process.env.SESS_LIFETIME as string),
        sameSite: true,
        secure: false,
    };

    res.redirect(`http://localhost:3000/home/`);
};

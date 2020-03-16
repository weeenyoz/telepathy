import { RequestHandler } from 'express';
import dotenv from 'dotenv';
import { UserInterface } from '../models/User';

dotenv.config();

export const getUser: RequestHandler = (req, res, next) => {
    const userId = (req.session as any).passport.user.id;
    const username = (req.session as any).passport.user.username;
    const displayName = (req.session as any).passport.user.displayName;
    const profileImageUrl = (req.session as any).passport.user.photos[0].value;

    const user: UserInterface = { id: userId, username, displayName, profileImageUrl };
    res.json({ user });
};

export const loginRedirect: RequestHandler = (req, res) => {
    (req.session as any).cookie = {
        sameSite: true,
        secure: false,
    };

    res.redirect(`http://localhost:3000/home/`);
};

export const userLogout: RequestHandler = (req, res, next) => {
    if (req.session) {
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
};

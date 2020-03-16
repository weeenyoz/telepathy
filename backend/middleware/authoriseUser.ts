import { RequestHandler } from 'express';

const authoriseUser: RequestHandler = (req, res, next) => {
    if (!req.cookies.sid) {
        res.status(401).send('Access denied. No token provided');
    } else {
        if ((req.session as any).passport.user && req.cookies.sid) {
            next();
        } else {
            res.status(403).send('Forbidden');
        }
    }
};

export default authoriseUser;

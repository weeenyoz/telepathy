import { RequestHandler } from 'express';

const authoriseUser: RequestHandler = (req, res, next) => {
    console.log('req.session in sessionChecker &&: ', req.session);
    console.log('req.session.passport in sessionChecker &&: ', (req.session as any).passport);
    console.log('req.session.user in sessionChecker &&: ', (req.session as any).passport.user);
    console.log('req.cookies in sessionChecker &&: ', req.cookies);

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

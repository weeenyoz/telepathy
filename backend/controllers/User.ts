import { RequestHandler } from 'express';

export const redirectToHome: RequestHandler = (req, res) => {
    const userId = (req.user as any).id;

    res.redirect(`http://localhost:3000/home/${userId}`);
};

import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = function(err, req, res, next) {
    res.status(500).send('Server Error - An error occured in the server');
};

export default errorHandler;

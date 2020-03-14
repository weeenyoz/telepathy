import { ErrorRequestHandler } from 'express';
import { logger } from '../app';

const errorHandler: ErrorRequestHandler = function(err, req, res, next) {
    logger.error(err.message, err);
    res.status(500).send('Server Error - An error occured in the server');
};

export default errorHandler;

import { ErrorRequestHandler } from 'express';
import { logger } from '../app';

const errorHandler: ErrorRequestHandler = function(err, req, res, next) {
    logger.error(err.message, err);
    console.log('error in error middleware: ', err.message);
    res.status(500).send(err.message);
};

export default errorHandler;

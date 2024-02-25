export const errorController = (error, req, res, next) => {
    res.status(error.httpStatus || 500).send({
        status: 'err',
        code: error.code || 'INTERNAL_SERVER_ERROR',
        message: error.message
    });
};
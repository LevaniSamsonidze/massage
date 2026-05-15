class AppError extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;
        this.ok = false;
    }
}

const ErorrHeandler = (err, req, res) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        message: err.message,
        status: err.status
    });
}

module.exports = {
    AppError,
    ErorrHeandler
}
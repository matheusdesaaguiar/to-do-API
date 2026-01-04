class InternalServerError extends Error{
    constructor(message = "Erro interno do servidor", statusCode = 500, name) {
        super(message);
        this.name = name;
        this.statusCode = statusCode
        
    }

    sendResponse(res) {
        res.status(this.statusCode).json({
            name: this.name,
            message: this.message,
            status: this.statusCode,
        })
    }
}

export default InternalServerError;
import InternalServerError from "../errors/InternalServerError.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";

function globalErrorHandler(error, req, res,next) {
    if(error instanceof RequisicaoIncorreta){
        error.sendResponse(res);
    } else {
        new InternalServerError().sendResponse(res);
    }
}

export default globalErrorHandler;
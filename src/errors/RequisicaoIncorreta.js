import InternalServerError from "./InternalServerError.js";

class RequisicaoIncorreta extends InternalServerError { 
    constructor(message = "Um ou mais dados fornecidos estão incorretos!", name = "Requisicao Incorreta") {
        super(message, 400, name);
    }
}

export default RequisicaoIncorreta;
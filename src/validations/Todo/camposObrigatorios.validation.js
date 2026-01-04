import RequisicaoIncorreta from "../../errors/RequisicaoIncorreta.js";

function camposObrigatorios(req, res, next) {
    const {titulo, data, horario } = req.body;

    if(!titulo || !data || !horario) {
        throw new RequisicaoIncorreta();
    }
    
    next();
}

export default camposObrigatorios;
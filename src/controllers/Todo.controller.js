import ToDO from "../model/Todo.model.js";
class TodoController {
    async cadastrarTarefa(req, res, next) {
        const tarefa = req.body;
        const novaTarefa = ToDO.cadastrarTarefa(tarefa.titulo, tarefa.descricao, tarefa.data, tarefa.horario);
        res.status(201).json(novaTarefa);
    }

    async listarTarefas(req,res, next) {
        const tarefas = ToDO.listarTarefas();
        res.status(200).json(tarefas);
    }

    async listarTarefaPorId(req, res, next) {
        const id = req.params.id;
        const tarefa = ToDO.listarTarefaPorId(id-1);
        res.status(200).json(tarefa);
    }
    
    async atualizarTarefa(req, res, next) {
        const id = Number(req.params.id);
        const { titulo, descricao, data, horario } = req.body;

        const tarefaAtualizada = ToDO.atualizarTarefa(id-1, titulo, descricao, data, horario);
        res.status(200).json(tarefaAtualizada);
    }

    async atualizarTarefaParcial(req, res, next) {
        const id = Number(req.params.id);
        const tarefa = req.body;
        console.log(tarefa);

        const tarefaAtualizada = ToDO.atualizarTarefaParcial(id-1, tarefa);

        res.status(200).json(tarefaAtualizada);
    }

    async excluirTarefa(req, res, next) {
        const id = Number(req.params.id);

        ToDO.excluirTarefa(id-1);

        res.status(200).json({message: "Tarefa excluida com sucesso!!!"});
    }
}

export default new TodoController;
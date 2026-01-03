class ToDO {
    constructor(titulo,descricao, data, horario) {
        this.id = ToDO.idValue,
        this.titulo = titulo,
        this.descricao = descricao,
        this.data = data,
        this.horario = horario
    }

    static list = [];
    
    static idValue = 1;

    static incrementaId(){
        ToDO.idValue++
    }

    static cadastrarTarefa(titulo, descricao, data, horario) {
        const tarefa = new ToDO(titulo,descricao,data,horario);
        ToDO.list.push(tarefa);
        this.incrementaId();
        return tarefa;
    }

    static listarTarefas() {
        return ToDO.list;
    }

    static listarTarefaPorId(id) {
        const tarefa = ToDO.list[id];
        return tarefa
    }

    static atualizarTarefa(id, titulo, descricao, data, horario) {
        ToDO.list[id].titulo = titulo;
        ToDO.list[id].descricao = descricao;
        ToDO.list[id].data = data;
        ToDO.list[id].horario = horario;
        
        return ToDO.list[id];
    }

    static atualizarTarefaParcial(id, tarefa) {
        const titulo = tarefa.titulo;
        const descricao = tarefa.descricao;
        const data = tarefa.data;
        const horario = tarefa.horario;

        if(titulo) ToDO.list[id].titulo = titulo;
        if(descricao) ToDO.list[id].descricao = descricao;
        if(data) ToDO.list[id].data = data;
        if(horario) ToDO.list[id].horario = horario;
        
        return ToDO.list[id];
    }

    static excluirTarefa(id) {
        ToDO.list.splice(id, 1);
    }
}

export default ToDO;
import { Router } from "express";
import TodoController from "../controllers/Todo.controller.js";
import camposObrigatorios from "../validations/Todo/camposObrigatorios.validation.js";

const routes = Router();

routes.get("/todo", TodoController.listarTarefas);
routes.get("/todo/:id", TodoController.listarTarefaPorId);
routes.post("/todo", camposObrigatorios, TodoController.cadastrarTarefa);
routes.put("/todo/:id", TodoController.atualizarTarefa);
routes.patch("/todo/:id", TodoController.atualizarTarefaParcial);
routes.delete("/todo/:id", TodoController.excluirTarefa);

export default routes;
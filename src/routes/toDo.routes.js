import { Router } from "express";
import TodoController from "../controllers/Todo.controller.js";

const routes = Router();

routes.get("/todo", TodoController.listarTarefas);
routes.get("/todo/:id", TodoController.listarTarefaPorId);
routes.post("/todo", TodoController.cadastrarTarefa);
routes.put("/todo/:id", TodoController.atualizarTarefa);
routes.patch("/todo/:id", TodoController.atualizarTarefaParcial);
routes.delete("/todo/:id", TodoController.excluirTarefa);

export default routes;
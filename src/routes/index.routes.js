import express from "express";
import ToDo from "./toDo.routes.js";

const routes = (app) => {
    app.route("/").get((req,res)=> res.status(200).json({ message: "DEu tudo certo!"}));
    app.use(
        express.json(),
        ToDo,
    )
}

export default routes;
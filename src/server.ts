import "reflect-metadata";
import express, { response } from "express";
import "./database";
import { router } from "./routes";
import cors from "cors"

const app = express();

app.use(cors())

app.use(express.json());
app.use(router) ;

app.listen(8081, () => console.log("Server is running!"));

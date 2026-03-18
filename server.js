import express from "express";
import cors from "cors";
import { analizarMensaje } from "./motor.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analizar", (req, res) => {
  const { mensaje } = req.body;
  const resultado = analizarMensaje(mensaje);
  res.json(resultado);
});

app.listen(3000, () => {
  console.log("Servidor corriendo");
});

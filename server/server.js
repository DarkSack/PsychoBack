import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { helloWorld } from "./functions.js";

dotenv.config();

const app = express();
app.use(cors());
const port = 3000;

app.get("/", helloWorld);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

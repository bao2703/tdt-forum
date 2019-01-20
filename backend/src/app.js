import express from "express";
import cors from "cors";
import logger from "morgan";
import { join } from "path";
import apollo from "./apollo";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.static(join(__dirname, "public")));

app.get("/", (_, res) => res.redirect("/graphql"));

apollo.applyMiddleware({ app });

export default app;

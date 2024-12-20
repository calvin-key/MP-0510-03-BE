import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./config";
import cors from "cors";
import sampleRouter from "./routes/sample.router";
import eventRouter from "./routes/event.router";

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/samples", sampleRouter);
app.use("/events", eventRouter);

// middleware error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

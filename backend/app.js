import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: "http//localhost:5173",
  Credentials: true,
};
app.use(cors(corsOption));

export default app;

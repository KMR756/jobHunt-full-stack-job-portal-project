import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
const corsOption = {
  origin: [process.env.CLIENT_URL || "http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOption));

// health check route
app.get("/api/health", (req, res) => {
  res
    .status(200)
    .json({ status: "ok", message: "jobHunt server is healthy... 🚀" });
});

export default app;

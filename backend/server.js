import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send(`jobHunt server is cooking...`);
});

// database connection
connectDB();

// server start
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

// server close
process.on("SIGINT", () => {
  console.log(`shutting down server...`);
  process.exit(0);
});

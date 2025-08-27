import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("jobHunt server is cooking.....");
});

// connect db
connectDB();

// server start
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello Generate Image");
});

app.listen(port, () => {
  console.log("Serve running");
});

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./mongoDB/connectDB.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Connecting our Middleware for routes
app.use("/api/v2/post", postRoutes);
app.use("/api/v2/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello Generate Image");
});

const startServer = async () => {
  try {
    connectDB(process.env.DB_URI);
    app.listen(port, () => {
      console.log("Serve running");
    });
  } catch (e) {
    console.lgo(err);
  }
};

startServer();

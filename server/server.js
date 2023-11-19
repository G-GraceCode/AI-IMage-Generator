import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./mongoDB/connectDB.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

const port = process.env.PORT || 5000;
// Middleware

const app = express();
// app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(
  cors({
    origin: ["https://r2f35v-5173.csb.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Connecting our Middleware for routes
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

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

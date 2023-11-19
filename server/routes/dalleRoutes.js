import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { OpenAI } from "openai";

const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.route("/").post(async (req, res) => {
  try {
  } catch (e) {}
});

export default router;

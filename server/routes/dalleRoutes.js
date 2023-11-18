import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { OpenAI } from "openai";

const router = express.Router();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default router;

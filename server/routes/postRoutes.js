import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from "cloudinary";
import Post from "../mongoDB/models/post.js";

const router = express.Router();

export default router;

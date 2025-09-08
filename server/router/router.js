import express from "express";
const router = express.Router();
import { getAllPost } from "../controller/controller.js"

router.get("/post", getAllPost)


export default router
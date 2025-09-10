import express from "express";
const router = express.Router();
import { getAllPost, getPostById, CreatPost, register, login } from "../controller/controller.js"

router.get("/app/post", getAllPost)
router.get("/app/post/:id", getPostById)
router.post("/app/creatpost", CreatPost)

router.post("/register", register);
router.post("/login", login);
export default router





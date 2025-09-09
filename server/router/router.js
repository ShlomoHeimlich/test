import express from "express";
const router = express.Router();
import { getAllPost,getPostById,CreatPost} from "../controller/controller.js"

router.get("/post", getAllPost)
router.get("/post/:id", getPostById)
router.post("/creatpost", CreatPost)
export default router





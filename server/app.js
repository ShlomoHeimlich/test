import express from "express"
import cors from 'cors';
import router from "./router/router.js"
const server = express()
server.use(cors());
server.use(express.json())
server.use(express.static('public'))

server.use("/", router)

server.listen(process.env.Port, () => {
    console.log(`Server listening 4000`);
});

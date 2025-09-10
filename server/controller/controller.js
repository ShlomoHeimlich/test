import { getPostDb, InsertingToDB, getUsersDb, addUser } from '../services/services.js'
export function getAllPost(req, res) {
    const allpost = getPostDb()
    if (allpost.length === 0) {
        res.status(401).send({ "No posts to display": 401 });
    }
    res.send(allpost);
}


export function getPostById(req, res) {
    const allpost = getPostDb();
    const { id } = req.params;
    const post = allpost.find(p => p.id === id);
    if (!post) return res.status(401).send({ error: "Post not found" });
    res.send(post);
}

export function CreatPost(req, res) {
    const newpost = req.body
    const Inserting = InsertingToDB(newpost)
    res.send('success')
}

export function register(req, res) {
    const {name, Password } = req.body;
    console.log(req.body);
    const users = getUsersDb();
    addUser({ name, Password });
    res.status(200).send(req.body)
}

export function login(req, res) {
    const { name, Password } = req.body;
    const users = getUsersDb();
    const user = users.find(user => user.name === name && user.Password === Password);
    if (!user) {
        return res.status(401).send({ error: "Invalid credentials" })
    }
    res.status(200).send(req.body)
}
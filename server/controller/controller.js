import { getPostDb, InsertingToDB } from '../services/services.js'
export function getAllPost(req, res) {
    const allpost = getPostDb()
    if (allpost.length === 0) {
        res.status(201).send({ "No posts to display": 201 });
    }
    res.send(allpost);
}

export function getPostById(req, res) {
    const allpost = getPostDb()
    const { id } = req.params
    const post = allpost[id]
    if (!post) {
        return res.status(404).send({ error: "Post not found" })
    }
    res.send(post)
}

export function CreatPost(req, res) {
    const newpost = req.body
    const Inserting = InsertingToDB(newpost)
    res.send('success')
}
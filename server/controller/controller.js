import { getPostDb } from '../services/services.js'
export function getAllPost(req, res) {
    const allpost = getPostDb()
    if (allpost.length === 0) {
        res.status(201).send({"No posts to display":201});
    }
    res.send(allpost);
}
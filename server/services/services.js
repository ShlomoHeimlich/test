import posts from '../db/dbposts.json' with { type: 'json' };
import users from '../db/dbusers.json' with { type: 'json' };
import fs from 'node:fs';
const dbposts = "./db/dbposts.json"
const dbusers = "./db/dbusers.json"

export function getPostDb() {
    return posts
}

export function InsertingToDB(newpost) {
    posts.push(newpost)
    fs.writeFile(dbposts, JSON.stringify(posts), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File written successfully!');
    });
}

export function getUsersDb() {
    try {
        const data = fs.readFileSync(dbusers, "utf-8");
        return JSON.parse(data);
    } catch {
        return [];
    }
}

export function addUser(user) {
    const users = getUsersDb();
    users.push(user);
    fs.writeFileSync(dbusers, JSON.stringify(users), "utf-8");
    console.log('User added');
}


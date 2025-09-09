import post from '../db/db.json' with { type: 'json' };
import fs from 'node:fs';
const a = "./db/db.json"
export function getPostDb() {
    return post
}

export function InsertingToDB(newpost) {
    post.push(newpost)
    const stringpost = JSON.stringify(post)
    fs.writeFile(a, stringpost, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File written successfully!');
    });
}


import db, { } from "$lib/database";
import bcrypt from "bcrypt";
import { randomBytes } from "crypto";

interface signinBody{
    "username": string,
    "password": string
}

const userQuery = db.prepare('SELECT * FROM users WHERE username = ?')
const tokenQuery = db.prepare(`INSERT INTO tokens (userid,token,expiry)
                                VALUES (@userid, @token, datetime('now','+2 day'))`)

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    let requestBody:signinBody = await request.json();

    const user = await userQuery.get(requestBody.username)

    let result = await bcrypt.compareSync(requestBody.password, user.password)
    if (result == true){

        let token = randomBytes(64).toString('hex');

        tokenQuery.run({
            userid: user.userid,
            token: token,
        })

        return{
            status: 200,
            headers: {
                "Set-Cookie": `token=${token}; Max-Age=172800`
            },
            body: `Authenticated as ${user.username} with token ${token}`
        }
    }
    else{
        return{
            status: 401,
            headers: {},
            body: {}
        }
    }
}


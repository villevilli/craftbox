import db from "$lib/database";
import { hashSaltPassword } from "$lib/hashcurity";

/*
Request Format

{
    "username": username,
    "password": password
}

Hashes and salts users passwords and stroes thoes in the database
*/

//

interface signupBody{
    "username": string,
    "password": string
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    //try{
        let body:signupBody = await request.json();

        const insertUser = db.prepare('INSERT INTO users (username,password) VALUES (?, ?)')
    
        const userInsert = insertUser.run(body.username, hashSaltPassword(body.password))
    
        return {
            status: 201,
            headers: {},
            body: `Succsessfully signed up ${body.username}`
        };
    /*}catch(err){
        return {
            status: 500,
            body:{
                "error":err,
                "request":request.json()
            }
        }
    }*/
    

}


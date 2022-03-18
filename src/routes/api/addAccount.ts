import db from "$lib/database";
import bcrypt from 'bcrypt';

interface signupBody{
    "username": string,
    "password": string
};

const saltRounds = 12;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    //try{
        let body:signupBody = await request.json();

        const insertUser = db.prepare(`
        INSERT INTO users (username,password,requirePwdChange) VALUES (?, ?, ?)
        `)

        db.addUser(body.username, body.password);

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


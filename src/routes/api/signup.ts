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

        const insertUser = db.prepare('INSERT INTO users (username,password) VALUES (?, ?)')

        const hashedPassword = await bcrypt.hash(body.password, saltRounds);

        insertUser.run(body.username, hashedPassword)

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


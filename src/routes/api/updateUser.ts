import db, { tokenQuery } from "$lib/database";
import { parse } from "cookie";

interface updateBody{
    username:string
    newPassword:string
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    let body:updateBody = request.json
    console.log(request)

    try {
        let cookies = parse(request.cookie)

        if (db.checkAuth(cookies.token, 'changePwd')){

            db.updateUser(await tokenQuery.get(cookies.token).username, body.newPassword, 0)

            return{
                status: 200,
                body: "Changed password succsessfully!"
            }
        }

    } catch (err) {
        return{
            status: 401,
            body: "Unauthorized"
        }
    }
        

    return{
        body: "hello world"
    }
}
import db, { tokenQuery, checkAuth, updateUser } from "$lib/database";
import { parse } from "cookie";

interface updateBody{
    username:string
    newPassword:string
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    console.log(`\n\n\n\n UPDATING USERS !!!`)

    let body:updateBody = request.json
    console.log(request)

    try {
        let cookies = parse(request.headers.get('cookie'))

        if (checkAuth(cookies.token, 'changePwd')){

            updateUser(await tokenQuery.get(cookies.token).username, body.newPassword, 0)

            return{
                status: 200,
                body: "Changed password succsessfully!"
            }
        }

    } catch (err) {
        console.error(err);
        return{
            status: 401,
            body: "Unauthorized"
        }
    }
        

    return{
        body: "hello world"
    }
}
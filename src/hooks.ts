import db from "$lib/database";
import { parse } from "cookie";
import { DateTime } from "luxon";

let authenticated = false;

const tokenQuery = db.prepare(`
    SELECT * FROM tokens
    INNER JOIN users 
    ON tokens.userid = users.userid
    WHERE token = ?;
`)

const userQuery = db.prepare(`
    SELECT username FROM users WHERE userid = ?
`)

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ resolve, event}) {

    const now = DateTime.now()
    const url = new URL(event.request.url);
    const rawCookies = event.request.headers.get('cookie')

    //Skips logic to check if token is current if no token cookie exsists
    if (rawCookies == null){
        authenticated = false
    }else{
        const cookies = parse(rawCookies);
        const userdata = tokenQuery.get(cookies.token)

        //makes sure token is valid in the db and not expired, then authenticates user
        if (typeof(userdata) === 'object') {
            event.locals.user = await userQuery.get(userdata.userid)

            let expiryDate = DateTime.fromSQL(userdata.expiry)

            if (expiryDate > now) {
                authenticated = true;
            }
        }
    }

    //redirect users who are authenticated from login to panel
    if (authenticated && url.pathname == '/login') {
        return  Response.redirect(url.origin+'/panel/',302)
    }
    
    //redirects users who are not authenticated from panel to login
    if (url.pathname.startsWith('/panel')){
        if (authenticated == false) {
            return  Response.redirect(url.origin+'/',302)
        }
    }

    
    const response = await resolve(event);
    return response;
}

export async function getSession(event) {
    return event.locals.user
    ? {
        user: {
            'username': event.locals.user.username
        }
      }
    : {}; 
}
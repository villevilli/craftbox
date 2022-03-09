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
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ resolve, event}) {
    const now = DateTime.now()
    const url = new URL(event.request.url);
    const rawCookies = event.request.headers.get('cookie')

    if (rawCookies == null){
        authenticated = false
    }else{
        const cookies = parse(rawCookies);
        const userdata = tokenQuery.get(cookies.token)

        if (typeof(userdata) === 'object') {

            let expiryDate = DateTime.fromSQL(userdata.expiry)

            if (expiryDate > now) {
                authenticated = true;
            }
        }
    }

    if (authenticated && url.pathname == '/') {
        return  Response.redirect(url.origin+'/panel/',302)
    }
    
    if (url.pathname.startsWith('/panel')){
        if (authenticated == false) {
            return  Response.redirect(url.origin+'/',302)
        }
    }

    const response = await resolve(event);
    return response;
}
/*
export async function getSession(event) {
    const cookies = parse(event.request.headers.get('cookie'));
    const userdata = tokenQuery.run(cookies.token)

    return event.locals.user
    ? {
        user: {
            'username': userdata.username
        }
      }
    : {}; 
}
*/
import db, {checkAuth} from "$lib/database";
import { parse } from "cookie";


let authenticated = false;

const tokenQuery = db.prepare(`
    SELECT * FROM tokens
    INNER JOIN users 
    ON tokens.userid = users.userid
    WHERE token = ?;
`)

const userQuery = db.prepare(`
    SELECT username, requirePwdChange as ChangePwd FROM users WHERE userid = ?
`)

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ resolve, event}) {
    const url = new URL(event.request.url);
    const rawCookies = event.request.headers.get('cookie')

    //Skips logic to check if token is current if no token cookie exsists
    if (rawCookies == null){
        authenticated = false
    }else{
        const cookies = parse(rawCookies);
        const userData = tokenQuery.get(cookies.token)

        //makes sure token is valid in the db and not expired, then authenticates user
        if (typeof(userData) === 'object') {
            event.locals.user = await userQuery.get(userData.userid)

            authenticated = checkAuth(userData.token);
            /*
            let expiryDate = DateTime.fromSQL(userdata.expiry)

            if (expiryDate > now) {
                authenticated = true;
            }
            */
        }
    }

    //redirect users who are authenticated from login to panel
    if (authenticated && url.pathname == '/login') {
        return  Response.redirect(url.origin+'/panel/',302)
    }
    
    //redirects users who are not authenticated from panel to login
    if (url.pathname.startsWith('/panel')){
        if (authenticated == false) {
            return  Response.redirect(url.origin+'/login',302)
        }
    }

    
    const response = await resolve(event);
    return response;
}

export async function getSession(event) {
    return event.locals.user
    {}; 
}
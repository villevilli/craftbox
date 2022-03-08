import db from "$lib/database";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    
    let body = await request.json();
    let user = await db.prepare('SELECT * FROM tokens');

    return {
        status: 200,
        headers: {},
        body: {
            "body": body,
            "user": user
        }
    };
}


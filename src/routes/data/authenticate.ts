/** @type {import('@sveltejs/kit').RequestHandler} */

export async function post({ request }) {
    const data = await request.formData();
    
    return {
      headers: {}
    };
  }
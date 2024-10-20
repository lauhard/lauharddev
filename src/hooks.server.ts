import { redirect, type Handle } from "@sveltejs/kit";

// handle runs on every request.
// the event object represents the request.
// the resolve function is a function that resolves the request.
// resolve can manipulate the response headers and body before it is sent to the client.
export const handle: Handle = async ({ event, resolve }) => {

    // locas is an custom that can be used in the server side load functions and actions
    // usefull to store user data, auth, etc...
    // e.g. authenticate the user and pass the user data to the locals
    event.locals = {
        user: {
            name: 'John Doe',
            id: 123,
            role: 'admin'
        }
    }

    // check for protected routes in general
    if (event.url.pathname.startsWith('/dashboard')) {
        if (!event.locals.user) {
            //return response with status 401
            return new Response('Unauthorized', { status: 401 });
        }
        //check for specifi protected routes
        if (event.url.pathname.startsWith('/dashboard/admin')) {
            //check for role
            if (event.locals.user.role !== 'admin') {
                throw redirect(303, '/dashboard');
            }
        }
    }

    //get cookies
    const cookies = event.cookies.get('data-theme') || "";

    const resolveOptions = {
        //transformPageChunk is is an optional function that allows you to manipulate the html document.
        // it is a function inside an optional object that is passed to the resolve function.
        transformPageChunk: ({ html }: { html: string }) => {
            // manipulate the html document
            // change the theme based on the cookie
            // regex replace data-theme="anything" with data-theme from cookies
            return html.replace(/data-theme="[^"]*"/, `data-theme="${cookies}"`);
        }
    }

    const response = await resolve(event, resolveOptions);
    // manipulate the response here
    return response;
}

import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies, url }) => {
    const _theme = cookies.get('data-theme') || "";
    console.log("url", url)
    if (url.pathname == '/') redirect(307, '/blog');
    return {
        theme: _theme,
        url: url.pathname
    }
}
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies, url }) => {
    const _theme = cookies.get('data-theme') || "";
    return {
        theme: _theme,
        url: url.pathname
    }
}
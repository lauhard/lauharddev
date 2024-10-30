import { sql } from '@vercel/postgres';
import { json } from '@sveltejs/kit'

export const POST = async ({ request }) => {
    const { slug } = await request.json();
    console.log("api/views", slug);
    try {

        await sql`
            INSERT INTO post_views (slug, view_count, updated_at)
            VALUES (${slug}, 1, NOW())
            ON CONFLICT (slug)
            DO UPDATE SET view_count = post_views.view_count + 1, updated_at = NOW()
        `;
    } catch (error) {
        const { message } = error as Error;
        throw new Error("Failed to update view count: " + message);
    }
    const views = await sql`SELECT * FROM post_views WHERE slug = ${slug}`;
    console.log("api/views", views);
    return json(views)

}


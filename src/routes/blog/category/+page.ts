import type { PostData } from '$lib/interfaces/postdata';
import type { TagInfo } from '$lib/interfaces/taginfo';
import type { PageLoad } from './$types';

let tags: Array<TagInfo>;

const addTag = (tag: string, count: number) => tags.push({tag: tag, count: count});

const filterTags = (categories: Array<string>) => {
    categories.forEach((cat: string)=>{
        if(tags.length == 0) {
            addTag(cat, 1);
        } else {
            const res: TagInfo | undefined = tags.find((data: TagInfo)=> data.tag === cat);
            if(res !== undefined) res.count = res.count +1;
            else  addTag(cat, 1);
        }     
    });
}

export const load = (async ({ fetch }) => {
    tags = [];
    console.log("tags");
    const response = await fetch('../api/tags');
    const posts = await response.json();
    posts.forEach( (postData: PostData) : void => {
        const { categories } = postData.post;
        if (typeof (categories) !== "undefined"){
            filterTags(categories);
        }
    })
    return {
        tags
    };

}) satisfies PageLoad
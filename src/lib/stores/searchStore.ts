import type { Post } from "$lib/interfaces/post";
import type { PostData } from "$lib/interfaces/postdata";
import { writable} from "svelte/store";

export const createSearchStore = (data:Array<PostData>) => {
    const {subscribe, set, update} = writable({
        data: data,
        filtered: data,
        search: "",
    })

    return {
        subscribe,
        set,
        update,
    }
}

export const searchHandler = (store:any) => {
    const searchTerm: string = store.search.toLowerCase() || "" as string;
    store.filtered = store.data.filter((post:Post)=> {
        return post.searchTerms.toLowerCase().includes(searchTerm);
    })
}
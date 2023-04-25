import type { Post } from "$lib/interfaces/post";
import {writable, type Updater} from "svelte/store";
function createPostStore(){
    const { subscribe, set, update } = writable([]);
    const updatePost = (_post:Post) => update((state):any =>{
				const currentState: Array<Post> = [...state];
				const newState:Array<Post> = currentState.map(post=> post.id === post.id ? _post : post);
				return newState;
		})	
		const addPost = (_post:Post) => update((state):any=>{
            const currentState: Array<Post> = [...state];
            const newState:Array<Post> = [...currentState, _post]
				return newState;
		})
		const removePost = (_post:Post) => update((state):any=>{
            const currentState: Array<Post> = [...state];
				const newState:Array<Post> = currentState.filter(post=> post.id !== _post.id);
				return newState;
		})
    return {subscribe, updatePost, addPost, removePost, set}
}
export const postStore = createPostStore();
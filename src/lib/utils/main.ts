import type { Post } from "$lib/interfaces/post";
import type { PostData } from "$lib/interfaces/postdata";

export const fetchPosts = async () => {
    const mdfiles = import.meta.glob('/src/routes/blog/*.md');
    const mdfilesIterable = Object.entries(mdfiles);
    const posts = await Promise.all(
        mdfilesIterable.map( async ([path, promise_resolve]) => {
            const meta:any= await promise_resolve();
            console.log("meta", meta);
            const postPath = path.slice(11, -3)
            const postData: PostData = {
                path: postPath,
                post: meta.metadata as Post,
            };
            return postData;
        })
    )
    return posts;
}

export const fetchPost = async (post:string) => {
    const mdfile = await import(`../../routes/blog/${post}.md`);
    console.log("[fetch Post: ", mdfile);
    return mdfile;
}

export const findElement = (element:any, name: string):HTMLElement |false => {
    if(element?.nodeName.toLocaleUpperCase() === 'BODY') return false;
    const t: string = name.charAt(0);
    const _name: string = name.substring(1);
    let xtag:any= undefined;
    console.log(element)

    const childNodes = Object.values(element.childNodes);
    console.log(childNodes)
    if(t === ".") xtag = childNodes.find((cn:any)=> (cn?.className?.includes(_name)))
    if(t === '#') xtag = childNodes.find((cn:any)=> (cn?.id?.includes(_name)))
    console.log(xtag)
    
    if(xtag === undefined) {
        const parentElement= element.parentElement;
        return findElement(parentElement, name);
    }
    else {
        return xtag;
    }
}

export const copy2ClipBoard = async (element: Element): Promise<void> => {
    if(element) {
        const content: string= element.textContent ?? "";
        await navigator.clipboard?.writeText(content).then(() => {
            console.info("[clipboard]: data copied", content);
        }, (err) => {
            console.error("[clipboard]: error ", err);
        })
    } else {
        console.info("[clipboard]: tag not found ", "");
    }
};

export const smoothScroll = (event:Event) => {
    const t:any = event.target
    const target = document.querySelector(t.getAttribute('href'));
    if (!target) return;
    target.scrollIntoView({
        behavior: 'smooth'
    });
}

export const readingTime = async (post: string)=> {
    const WORDS_PER_MINUTE = 200;
    const result = {
        wordCount:0,
        readingTime:0
    };
    //Matches words
    //See
    //https://regex101.com/r/q2Kqjg/6
    const regex=/\w+/g;
    result.wordCount = post.match(regex)?.length as number;
    result.readingTime = 
    Math.ceil(
       result.wordCount / 
       WORDS_PER_MINUTE);
    return result;
}

export const getCustomDate = (date: Date)=>{
    let published = new Date(date).toDateString()
    published=published.substring(4,published.length)
    const yy: string =published.substring(published.length-2 ,published.length)
    return published.slice(0 ,published.length-5) + ", " + yy
}


import type { Metadata } from '@playwright/test';
import FlexSearch from 'flexsearch';

let index: FlexSearch.Index;
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
let result: any[] = [];


//create index
export const createIndex = (data: Metadata[]) => {
    index = new FlexSearch.Index({
        tokenize: 'forward',
    });
    data.forEach((item, i) => {
        const hit = `${item.title} ${item.content}`;
        index.add(i, hit);
    });

    result = data;
};

export const searchIndex = (query: string) => {
    //escape special characters
    const match = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const matches = index.search(match);
    const results = matches.map((i) => result[i as number]);
    return results.map(({ slug, title, content, categories }) => { return { slug, title, content, categories }; });
};
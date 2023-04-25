
export interface Post {
    title: string,
    content: string,
    published: Date,
    updated: Date,
    author?: string,
    img?: string,
    excerpt?: string,
    readingTime: number,
    categories?: Array<string>
}
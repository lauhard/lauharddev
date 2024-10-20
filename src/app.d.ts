// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
        interface Error {
            code: string;
            id: string;
        }
        interface User {
            name: string;
            id: number;
            role: string;
        }
        interface Locals {
            user: User;
        }
        interface Route {
            name: string;
            path: string;
            isPublic: boolean;
            target?: string;
        }
        interface Metadata {
            title: string
            slug: string
            excerpt: string
            date: string
            categories: Categories[]
            published: boolean
            image: string
            time?: number
        }
    }
}

export { Error, User, Locals, Route, Metadata };

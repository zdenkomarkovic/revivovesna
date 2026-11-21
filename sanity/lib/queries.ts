import { client } from "./client";

export interface PostListItem {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset?: { _ref: string }; alt?: string };
}

export interface Post extends PostListItem {
  body?: unknown[];
}

const REVALIDATE = { next: { revalidate: 60 } };

export function getPosts(): Promise<PostListItem[]> {
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
      _id, title, "slug": slug.current, publishedAt, excerpt, mainImage
    }`,
    {},
    REVALIDATE,
  );
}

export function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, publishedAt, excerpt, mainImage, body
    }`,
    { slug },
    REVALIDATE,
  );
}

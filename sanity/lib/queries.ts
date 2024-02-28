import { groq } from 'next-sanity';

const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;
const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const PAGE_QUERY = groq`*[_type == "page" && slug == $slug][0]{
    content
  }`;
const PAGES_QUERY = groq`*[_type == "page"] | order(order asc){
    slug,
    title,
    "key": slug
  }`;
export { POSTS_QUERY, POST_QUERY, PAGE_QUERY, PAGES_QUERY };

import { groq } from 'next-sanity';

const POSTS_QUERY = groq`*[_type == "post"]`;
const SHARED_QUERY = groq`*[_type == "shared"][0]`;
const PAGE_QUERY = groq`*[_type == "page" && slug == $slug][0]{
    content
  }`;
const PAGES_QUERY = groq`*[_type == "page"] | order(order asc){
    slug,
    title,
    "key": slug
  }`;
export { POSTS_QUERY, SHARED_QUERY, PAGE_QUERY, PAGES_QUERY };

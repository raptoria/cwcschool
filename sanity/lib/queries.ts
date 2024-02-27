import { groq } from 'next-sanity';

const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;
const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]`;

export { POSTS_QUERY, POST_QUERY, PAGE_QUERY };

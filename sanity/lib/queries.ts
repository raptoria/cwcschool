import { groq } from 'next-sanity';

const POSTS_QUERY = groq`*[_type == "post"]  | order(date desc){
    title,
    date,
    author,
    "imageSrc": image.asset->url,
    "imageAlt": image.alt,
    "imageWidth": image.width,
    "imageHeight": image.height,
    content
}`;
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

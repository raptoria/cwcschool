import { groq } from 'next-sanity';

const POSTS_QUERY = groq`*[_type == "post"]  | order(date desc){
    title,
    date,
    author,
    "imageSrc": image.asset->url,
    "imageAlt": image.alt,
    "width": image.width,
    "height": image.height,
    content
}`;

const SHARED_QUERY = groq`*[_type == "shared"][0]{
  title, 
  address, 
  phone, 
  email, 
  description, 
  content
}`;

const METADATA_QUERY = groq`*[_type == "shared"][0]{
  title, 
  description, 
  keywords
}`;

const PAGE_QUERY = groq`*[_type == "page" && slug == $slug][0]{
    content
  }`;
const PAGES_QUERY = groq`*[_type == "page"] | order(order asc){
    slug,
    title,
    "key": slug
  }`;
export { POSTS_QUERY, SHARED_QUERY, METADATA_QUERY, PAGE_QUERY, PAGES_QUERY };

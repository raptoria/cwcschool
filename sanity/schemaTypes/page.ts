import { defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      type: 'markdown',
      description: 'Enter markdown for the post below!',
      name: 'post',
      title: 'Post content',
    },
  ],
});

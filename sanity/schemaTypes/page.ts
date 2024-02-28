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
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      type: 'markdown',
      description: 'Enter markdown for the page below!',
      name: 'content',
      title: 'Page content',
    },
  ],
});

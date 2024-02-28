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
      name: 'route',
      title: 'Route',
      type: 'string',
    },
    {
      type: 'markdown',
      description: 'Enter markdown for the page below!',
      name: 'content',
      title: 'Page content',
    },
  ],
});

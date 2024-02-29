import { defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        {
          title: 'Image alt',
          name: 'alt',
          type: 'string',
        },
        {
          title: 'width',
          name: 'width',
          type: 'string',
        },
        {
          title: 'height',
          name: 'height',
          type: 'string',
        },
      ],
    },
    {
      type: 'markdown',
      description: 'Enter markdown for the post below!',
      name: 'content',
      title: 'Page content',
    },
  ],
});

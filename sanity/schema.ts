import { type SchemaTypeDefinition } from 'sanity';
import page from './schemaTypes/page';
import post from './schemaTypes/post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, page],
};

import type { Collection } from 'tinacms';

const Download: Collection = {
  label: 'Downloads',
  name: 'download',
  path: 'content/downloads',
  format: 'md',
  ui: {
    router: ({ document }) => {
      return `/downloads/${document._sys.filename}`;
    },
  },
  fields: [
    { type: 'string', name: 'title', label: 'Download Title', isTitle: true, required: true },
    { type: 'string', name: 'file_url', label: 'File URL', required: true },
    { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
    { type: 'boolean', name: 'featured', label: 'Featured' },
    { type: 'object', name: 'meta', label: 'Meta', fields: [
      { type: 'string', name: 'title', label: 'Meta Title' },
      { type: 'string', name: 'description', label: 'Meta Description' },
    ] },
  ],
};

export default Download; 
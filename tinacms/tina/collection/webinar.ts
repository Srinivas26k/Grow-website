import type { Collection } from 'tinacms';

const Webinar: Collection = {
  label: 'Webinars',
  name: 'webinar',
  path: 'content/webinars',
  format: 'md',
  ui: {
    router: ({ document }) => {
      return `/webinars/${document._sys.filename}`;
    },
  },
  fields: [
    { type: 'string', name: 'title', label: 'Webinar Title', isTitle: true, required: true },
    { type: 'datetime', name: 'date', label: 'Date', required: true },
    { type: 'string', name: 'time', label: 'Time', required: true },
    { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
    { type: 'string', name: 'registration_url', label: 'Registration URL' },
    { type: 'boolean', name: 'featured', label: 'Featured' },
    { type: 'object', name: 'meta', label: 'Meta', fields: [
      { type: 'string', name: 'title', label: 'Meta Title' },
      { type: 'string', name: 'description', label: 'Meta Description' },
    ] },
  ],
};

export default Webinar; 
import type { Collection } from 'tinacms';

const University: Collection = {
  label: 'Universities',
  name: 'university',
  path: 'content/universities',
  format: 'md',
  ui: {
    router: ({ document }) => {
      return `/universities/${document._sys.filename}`;
    },
  },
  fields: [
    { type: 'string', name: 'title', label: 'University Name', isTitle: true, required: true },
    { type: 'string', name: 'slug', label: 'Slug', required: true },
    { type: 'string', name: 'region', label: 'Region', options: ['India', 'Abroad'], required: true },
    { type: 'string', name: 'country', label: 'Country', required: true },
    { type: 'string', name: 'fees_range', label: 'Fees Range', required: true },
    { type: 'string', name: 'income_tier', label: 'Income Tier', options: ['lower', 'middle', 'upper'], required: true },
    { type: 'boolean', name: 'featured', label: 'Featured' },
    { type: 'image', name: 'image', label: 'Image' },
    { type: 'string', name: 'partner_url', label: 'Partner URL' },
    { type: 'object', name: 'meta', label: 'Meta', fields: [
      { type: 'string', name: 'title', label: 'Meta Title' },
      { type: 'string', name: 'description', label: 'Meta Description' },
    ] },
    { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
    { type: 'string', name: 'programs', label: 'Programs' },
    { type: 'string', name: 'students', label: 'Students' },
    { type: 'string', name: 'tags', label: 'Tags (comma separated)' },
    { type: 'string', name: 'category', label: 'Category' },
    { type: 'number', name: 'rating', label: 'Rating' },
    { type: 'string', name: 'logo', label: 'Logo' },
    { type: 'string', name: 'flag', label: 'Flag Emoji' },
    { type: 'string', name: 'feeRange', label: 'Fee Range (for filter)' },
    { type: 'string', name: 'details', label: 'Details', ui: { component: 'textarea' } },
  ],
};

export default University; 
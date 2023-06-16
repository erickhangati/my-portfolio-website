import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  dataset: 'production',
  apiVersion: '2023-02-04',
  useCdn: true,
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  token: import.meta.env.VITE_SANITY_PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

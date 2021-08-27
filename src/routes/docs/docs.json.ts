import type { DocMetaData } from './docs';

export async function get(): Promise<{
  body: { docs: DocMetaData[] };
}> {
  const modules = import.meta.glob('./*.svx');
  const docs: DocMetaData[] = [];

  for (const slug in modules) {
    const { metadata } = await modules[slug]();
    docs.push({ ...metadata, slug: `docs/${slug}`.replace('.svx', '') });
  }

  return {
    body: {
      docs: docs,
    },
  };
}
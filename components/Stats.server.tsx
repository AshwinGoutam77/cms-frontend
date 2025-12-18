import Stats from "./Stats";
import { client } from "@/lib/sanity";

async function getStats() {
    return await client.fetch(`
    *[_type == "statsSection"][0]{
      heading,
      desc,
      ctaText,
      cta,
      counters[]->{
        _id,
        value,
        label
      },
      cases[]->{
        _id,
        title,
        link,
        image
      }
    }
  `);
}

export default async function StatsServer() {
    const data = await getStats();
    if (!data) return null;

    return <Stats data={data} />;
}

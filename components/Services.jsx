import { client } from "@/lib/sanity";
import ServicesScroll from "./ServicesScroll";

async function getServices() {
  return await client.fetch(`
      *[_type == "service"] | order(_createdAt asc){
      title,
      desc,
      link,
      icon
    }
  `);
}

export default async function Services() {
  const services = await getServices();

  if (!services.length) return null;

  return <ServicesScroll services={services} />;
}

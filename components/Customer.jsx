import { client } from "@/lib/sanity";
import UseCasesSliderClient from "./UseCasesSliderClient";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function getUseCases() {
  return await client.fetch(`
    *[_type == "useCasesSection"][0]{
      heading,
      desc,
      cards[]->{
        _id,
        heading,
        subheading,
        "imageUrl": image.asset->url
      }
    }
  `);
}

export default async function UseCasesSlider() {
  const data = await getUseCases();
  console.log('data', data);

  // if (!data?.card?.length) return null;

  return (
    <UseCasesSliderClient
      heading={data.heading}
      desc={data.desc}
      cards={data.cards}
    />
  );
}

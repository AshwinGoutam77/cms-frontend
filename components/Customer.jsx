import UseCasesSliderClient from "./UseCasesSliderClient";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function getUseCases() {
  const res = await fetch(
    `${STRAPI_URL}/api/use-casess?populate[card][populate]=*`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const json = await res.json();
  return json?.data || null;
}

export default async function UseCasesSlider() {
  const data = await getUseCases();

  if (!data?.card?.length) return null;

  return (
    <UseCasesSliderClient
      heading={data.heading}
      desc={data.desc}
      cards={data.card}
    />
  );
}

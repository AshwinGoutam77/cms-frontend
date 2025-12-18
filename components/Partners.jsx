import { client } from "@/lib/sanity";
import PartnersMotion from "./PartnersMotion";

async function getPartners() {
  return await client.fetch(`
   *[_type == "partnersSection"][0]{
  introText,
  heading,
  description,
  logos[]->{
    _id,
    image,
    alt
  }
}
  `);
}

export default async function Partners() {
  const partners = await getPartners();

  if (!partners) return null;

  return (
    <>
      {/* TOP TEXT + LOGOS */}
      <section className="container mx-auto border-b border-[#ccc9] pb-20">
        <div className="px-6">
          <PartnersMotion
            introText={partners.introText}
            logos={partners.logos}
          />
        </div>
      </section>

      {/* BOTTOM TEXT */}
      <section className="container max-w-6xl mx-auto">
        <PartnersMotion
          heading={partners.heading}
          description={partners.description}
          type="bottom"
        />
      </section>
    </>
  );
}

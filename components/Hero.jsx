import { client } from "@/lib/sanity";
import HeroMotion from "./HeroMotion";
import { Button } from "./ui/button";

async function getHero() {
  return await client.fetch(`
    *[_type == "hero"][0]{
      heading,
      description,
      ctaText,
      "videoUrl": heroVideo.asset->url
    }
  `);
}

export default async function Hero() {
  const hero = await getHero();
  console.log(hero);
  

  if (!hero) return null;

  const videoUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL + hero?.heroVideo?.url;

  return (
    <section className="relative mx-auto min-h-screen overflow-hidden bg-[#071a2b]">
      <HeroMotion videoUrl={hero.videoUrl}>
        <div className="container mx-auto px-6 py-32 min-h-screen flex items-center relative z-10">
          <div className="grid lg:grid-cols-2 items-center w-full">

            {/* LEFT TEXT */}
            <div className="max-w-xl">
              <h1 className="text-5xl xl:text-[60px] font-bold leading-[68px] bg-gradient-to-r from-[#00d4ff] via-[#0099ff] to-[#0066ff] bg-clip-text text-transparent">
                {hero.heading}
              </h1>

              <p className="mt-6 text-lg text-white/80">
                {hero.description?.[0]?.children?.[0]?.text}
              </p>

              <div className="mt-10">
                <Button className="primary-btn">
                  {hero.ctaText}
                </Button>
              </div>
            </div>

            <div />
          </div>
        </div>
      </HeroMotion>
    </section>
  );
}

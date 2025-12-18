import Link from "next/link";
import { Button } from "./ui/button";
import HeaderMotion from "./HeaderMotion";
import { client, urlFor } from "@/lib/sanity";

/* ------------------ SERVER FETCH ------------------ */
async function getHeader() {
  return await client.fetch(`
    *[_type == "header"][0]{
      logo,
      navLinks,
      rightLinks
    }
  `);
}

/* ------------------ COMPONENT ------------------ */
export default async function Header() {
  const header = await getHeader();

  if (!header) return null;

  const { logo, navLinks, rightLinks } = header;
  console.log('header', header);


  return (
    <HeaderMotion>
      <nav className="border-b border-white/10">
        <div className="mx-auto px-10 py-5">
          <div className="flex items-center justify-between">

            {/* LOGO + NAV */}
            <div className="flex items-center gap-20">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src={urlFor(logo).width(180).url()}
                  alt="Logo"
                  width={180}
                  height={40}
                />
              </Link>

              {/* MAIN NAV */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="text-white/90 hover:text-white text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-6">
              {rightLinks.map((item,index) =>
                item.label === "Contact Us" ? (
                  <Button key={index} className="primary-btn-header">
                    {item.label}
                  </Button>
                ) : (
                  <Link
                    key={index}
                    href={item.url}
                    className="text-white/90 text-sm"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

          </div>
        </div>
      </nav>
    </HeaderMotion>
  );
}

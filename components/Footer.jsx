import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";

async function getFooter() {
  return await client.fetch(`
    *[_type == "footer"][0]{
      logo,
      companyLinks,
      resourceLinks,
      newsletterTitle,
      newsletterDesc,
      socialLinks,
      copyright,
      privacyLink
    }
  `);
}

export default async function Footer() {
  const footer = await getFooter();
  if (!footer) return null;

  return (
    <footer className="bg-[#071a2f] text-white container mx-auto py-16">
      <div className="max-auto">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 items-start">

          {/* LOGO */}
          <div className="flex justify-center sm:justify-start">
            {footer.logo && (
              <img
                src={urlFor(footer.logo).url()}
                alt="KPI Digital"
                className="w-[140px] sm:w-[170px]"
              />
            )}
          </div>

          {/* COMPANY LINKS */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-white/80">
              {footer.companyLinks?.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCE LINKS */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-white/80">
              {footer.resourceLinks?.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-3">
              {footer.newsletterTitle}
            </h3>

            <p className="text-white/70 mb-6 text-sm">
              {footer.newsletterDesc}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-white/30 pb-2">
              <input
                type="email"
                placeholder="Email*"
                className="bg-transparent outline-none flex-1 text-sm placeholder-white/50"
              />
              <button className="primary-btn-header sm:whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-white/20 my-12"></div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 justify-center md:justify-start">
            {footer.socialLinks?.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="w-10 h-10 rounded-full border border-[#00b4ff] flex items-center justify-center text-[#00b4ff]"
              >
                {item.icon && (
                  <img
                    src={urlFor(item.icon).width(24).height(24).url()}
                    alt={item.label || "social"}
                    className="w-5 h-5"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* COPYRIGHT */}
          <div className="text-sm text-white/70">
            {footer.copyright}
          </div>

          {/* PRIVACY */}
          <Link href="#" className="text-sm text-white/80">
            {footer.privacyLink}
          </Link>
        </div>
      </div>
    </footer>
  );
}

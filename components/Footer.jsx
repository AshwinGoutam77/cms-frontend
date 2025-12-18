import Link from "next/link";

async function getFooter() {
  const res = await fetch(
    "https://cms-server-yog6.onrender.com/api/footer?populate=*",
    { cache: "no-store" }
  );

  const json = await res.json();
  return json.data;
}

export default async function Footer() {
  const footer = await getFooter();

  if (!footer) return null;

  const logoUrl = footer.logo?.url;

  return (
    <footer className="bg-[#071a2f] text-white">
      <div className="max-w-[1400px] mx-auto px-6 pb-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LOGO */}
          <div>
            {logoUrl && (
              <img
                src={`https://cms-server-yog6.onrender.com${logoUrl}`}
                alt="Logo"
                className="w-[170px]"
              />
            )}
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-white/80">
              {footer.companyLinks?.map((item) => (
                <li key={item.id}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCE LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-white/80">
              {footer.resourceLinks?.map((item) => (
                <li key={item.id}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              {footer.newsletterTitle}
            </h3>
            <p className="text-white/70 mb-6 text-sm">
              {footer.newsletterDesc}
            </p>

            <div className="flex items-center border-b border-white/30 pb-2">
              <input
                type="email"
                placeholder="Email*"
                className="bg-transparent outline-none flex-1 text-sm placeholder-white/50"
              />
              <button className="primary-btn-header">Subscribe</button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 my-12"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* SOCIAL LINKS */}
          <div className="flex gap-4">
            {footer.socialLinks?.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="w-10 h-10 rounded-full border border-[#00b4ff] flex items-center justify-center"
              >
                <img
                  src={`https://cms-server-yog6.onrender.com${item.icon?.data?.attributes?.url}`}
                  alt={item.label}
                  className="w-5 h-5"
                />
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

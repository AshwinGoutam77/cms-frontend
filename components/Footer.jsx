import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#071a2f] text-white">
            <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-10">
                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">

                    {/* LOGO */}
                    <div>
                        <img
                            src="https://kpidigital.com/wp-content/uploads/2022/12/kpi-logo-white.svg"
                            alt="KPI Digital"
                            className="w-[170px]"
                        />
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-white/80">
                            <li><Link href="#">About us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Contact us</Link></li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3 text-white/80">
                            <li><Link href="#">Case Studies</Link></li>
                            <li><Link href="#">Our Partners</Link></li>
                            <li><Link href="#">Blog</Link></li>
                        </ul>
                    </div>

                    {/* SUBSCRIBE */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-3">
                            Join our mailing list.
                        </h3>
                        <p className="text-white/70 mb-6 text-sm">
                            Stay up to date with the latest news, articles, blogs and more.
                        </p>

                        <div className="flex items-center border-b border-white/30 pb-2">
                            <input
                                type="email"
                                placeholder="Email*"
                                className="bg-transparent outline-none flex-1 text-sm placeholder-white/50"
                            />
                            <button className="primary-btn-header">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-white/20 my-12"></div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* SOCIAL */}
                    <div className="flex gap-4">
                        {["linkedin", "facebook", "instagram", "youtube"].map((icon) => (
                            <div
                                key={icon}
                                className="w-10 h-10 rounded-full border border-[#00b4ff] flex items-center justify-center text-[#00b4ff]"
                            >
                                <img src={icon == 'linkedin' ? "https://kpidigital.com/wp-content/uploads/2023/02/CompositeLayer.svg" :
                                    icon == 'facebook' ? "https://kpidigital.com/wp-content/uploads/2023/02/CompositeLayer-1.svg" :
                                        icon == 'instagram' ? "https://kpidigital.com/wp-content/uploads/2023/02/instagram.svg" :
                                            "https://kpidigital.com/wp-content/uploads/2023/02/CompositeLayer-3.svg"} alt="" />
                            </div>
                        ))}
                    </div>

                    {/* COPYRIGHT */}
                    <div className="text-sm text-white/70">
                        ©2025 KPI Digital Inc. All rights reserved.
                    </div>

                    {/* PRIVACY */}
                    <Link href="#" className="text-sm text-white/80">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7]" style={{ padding: "64px 0 0" }}>
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-[#e0e0e0]">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-bebas text-xl tracking-widest text-[#1d1d1f] mb-3">
              Petz Insurance<span className="text-[#0066cc]"> Compare</span>
            </div>
            <p className="text-[#7a7a7a] text-[12px] leading-relaxed">
              The independent pet insurance comparison platform. Compare top providers for every animal type.
            </p>
          </div>

          {/* Compare */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] tracking-[-0.12px] mb-3">Compare</h4>
            <ul>
              {["Dogs", "Cats", "Birds", "Rabbits", "Reptiles", "Exotic Pets"].map((a) => (
                <li key={a}>
                  <Link
                    href={`/compare?animal=${a.toLowerCase()}`}
                    className="text-[17px] text-[#0066cc] leading-[2.41] tracking-[0] hover:underline block"
                  >
                    {a} Insurance
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] tracking-[-0.12px] mb-3">Resources</h4>
            <ul>
              {[
                { label: "How Deductibles Work", slug: "how-deductibles-work" },
                { label: "Pre-existing Conditions", slug: "pre-existing-conditions" },
                { label: "Exotic Pet Coverage", slug: "exotic-pet-coverage-guide" },
                { label: "When to Buy Insurance", slug: "when-to-buy-pet-insurance" },
              ].map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/resources/${r.slug}`}
                    className="text-[17px] text-[#0066cc] leading-[2.41] tracking-[0] hover:underline block"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] tracking-[-0.12px] mb-3">Company</h4>
            <ul>
              {[
                { label: "About Us", href: "/about" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Resources", href: "/resources" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[17px] text-[#0066cc] leading-[2.41] tracking-[0] hover:underline block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6">
          <p className="text-[12px] text-[#7a7a7a] leading-relaxed max-w-4xl mb-3">
            <strong className="text-[#333333]">Disclaimer:</strong> Petz Insurance Compare is an independent comparison platform and is not affiliated with any insurance provider listed. Plan details, pricing, and availability are subject to change. Always verify coverage details directly with the provider before purchasing. Petz Insurance Compare does not sell insurance and is not a licensed insurance agent.
          </p>
          <p className="text-[12px] text-[#7a7a7a]">
            © {new Date().getFullYear()} Petz Insurance Compare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

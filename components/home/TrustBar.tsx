import { Shield, Award, Home, Users, type LucideIcon } from "lucide-react";

const BBB_URL =
  "https://www.bbb.org/us/ia/davenport/profile/siding-contractors/suburban-construction-inc-0664-102852";

type TrustItem = {
  icon: LucideIcon | null;
  label: string;
  value: string;
  href?: string;
};

const trustItems: TrustItem[] = [
  { icon: Shield, label: "In Business", value: "Since 1985" },
  { icon: Home, label: "Installations", value: "40,000+" },
  { icon: Award, label: "Workmanship", value: "Lifetime Guarantee" },
  { icon: Users, label: "Company Type", value: "Family Owned" },
  { icon: null, label: "BBB Rating", value: "A+", href: BBB_URL },
];

function BbbIcon() {
  return (
    <span className="h-7 flex items-center">
      <span className="text-xs font-extrabold border-2 border-accent-muted text-accent-muted rounded px-1.5 py-0.5 leading-none tracking-wide">
        BBB
      </span>
    </span>
  );
}

export default function TrustBar() {
  return (
    <section
      className="bg-brand-navy py-6"
      style={{ backgroundColor: "#1e2235" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {trustItems.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                {Icon ? (
                  <Icon className="w-7 h-7 text-accent-muted" />
                ) : (
                  <BbbIcon />
                )}
                <div>
                  <div className="text-white font-bold text-lg leading-tight">
                    {value}
                  </div>
                  <div className="text-gray-400 text-xs uppercase tracking-wide">
                    {label}
                  </div>
                </div>
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center gap-2 hover:opacity-80 transition-opacity"
              >
                {inner}
              </a>
            ) : (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-2"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

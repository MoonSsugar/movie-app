import Link from "next/link";

interface NavItemProps {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

export default function NavItem({ title, links }: NavItemProps) {
  return (
    <li className="relative group cursor-pointer">
      <span className="text-white font-bold">{title}</span>

      <div className="absolute top-full -left-7 border border-gray-200 bg-white text-black text-sm rounded w-30 hidden group-hover:block px-4 py-1 z-20 ">
        {links.map((link) => {
          return (
            <Link key={link.href} href={link.href} className="block">
              {link.name}
            </Link>
          );
        })}
      </div>
    </li>
  );
}

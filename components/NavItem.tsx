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
      <span>{title}</span>

      <div className="absolute top-full -left-7 bg-white text-black text-sm rounded w-30 hidden group-hover:block px-4 py-1 z-20 ">
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href} className="block">
              {link.name}
            </Link>
          );
        })}
      </div>
    </li>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();

	return (
		<Link href={href} className={pathname === href ? "active" : undefined}>
			{children}
		</Link>
	);
}

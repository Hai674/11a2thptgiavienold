import Link from "next/link";
import { navigationItems } from "@/lib/constants";

export function SiteHeader() {
  return <header><nav aria-label="Điều hướng chính">{navigationItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></header>;
}

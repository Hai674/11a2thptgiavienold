import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";

export function MainLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main></>;
}

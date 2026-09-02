import { SITE_NAME } from "@/lib/constants";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-primary">
            <GraduationCap className="h-5 w-5" />
            <span className="font-semibold">Lớp 11A10</span>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            {SITE_NAME}. Lưu giữ những kỷ niệm thanh xuân đẹp nhất.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lớp 11A10. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

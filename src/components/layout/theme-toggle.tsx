"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card",
          className
        )}
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:bg-secondary",
        className
      )}
      aria-label="Chuyển chế độ sáng/tối"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-yellow-400" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700" />
      )}
    </button>
  );
}

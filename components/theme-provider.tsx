"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore, type ReactNode } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "built-for-pros-theme";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function preferredTheme(): Theme {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (isTheme(storedTheme)) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function subscribeToThemeChange(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const syncTheme = () => {
    applyTheme(preferredTheme());
    onStoreChange();
  };

  window.addEventListener("storage", syncTheme);
  window.addEventListener("themechange", syncTheme);
  mediaQuery.addEventListener("change", syncTheme);

  return () => {
    window.removeEventListener("storage", syncTheme);
    window.removeEventListener("themechange", syncTheme);
    mediaQuery.removeEventListener("change", syncTheme);
  };
}

function getThemeSnapshot() {
  return preferredTheme();
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useSyncExternalStore(
    subscribeToThemeChange,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const nextTheme = theme === "dark" ? "light" : "dark";

  function toggleTheme() {
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <>
      {children}
      <button
        type="button"
        onClick={toggleTheme}
        className="fixed bottom-4 left-4 z-[60] inline-flex size-11 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--elevated)] text-[color:var(--fg)] shadow-[0_16px_36px_-20px_rgb(0_0_0_/_0.45)] transition hover:border-[color:var(--border-hover)] hover:bg-[color:var(--elevated-strong)] sm:bottom-5 sm:left-5"
        aria-label={`Switch to ${nextTheme} mode`}
      >
        {theme === "dark" ? (
          <Sun className="size-4" strokeWidth={2} />
        ) : (
          <Moon className="size-4" strokeWidth={2} />
        )}
      </button>
    </>
  );
}

// src/app/layout.tsx
import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

// Load your global font(s)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Default SEO metadata (you can override per page)
export const metadata: Metadata = {
  title: {
    default: "Journalyst",
    template: "%s | Journalyst",
  },
  description:
    "Trade journaling platform that helps retail traders journal, analyze & succeed",
  icons: {
    icon: "/favicon.ico",
  },
};

// Global layout applied to every route in /app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // Prevent mismatch between server/client theme
    >
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased transition-colors duration-300",
          inter.variable
        )}
      >
        {/*
          ThemeProvider from next-themes
          - Manages light/dark theme across entire app
          - Uses 'class' attribute strategy to let Tailwind's dark: classes work
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system" // 'system' | 'light' | 'dark'
          enableSystem
          disableTransitionOnChange
        >
          {/* All pages and layouts will render inside this provider */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

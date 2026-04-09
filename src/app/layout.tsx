import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Rahul Awale | Applied AI / ML Engineer",
  description:
    "Portfolio of Rahul Awale — Applied AI and Machine Learning Engineer building end-to-end ML systems, RAG applications, and deployable AI products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
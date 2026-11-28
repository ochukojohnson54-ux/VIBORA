import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIBORA — Where creators and entertainment meet",
  description: "An all-in-one AI creative and entertainment platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
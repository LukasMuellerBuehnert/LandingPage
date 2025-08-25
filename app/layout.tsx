import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourBrand – Landing",
  description: "Clean Next.js landing page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

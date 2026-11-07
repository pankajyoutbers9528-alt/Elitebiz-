
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlitBiz | Learn Without Limits",
  description:
    "BlitBiz is a free educational learning platform for students from school to university.",
  applicationName: "BlitBiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

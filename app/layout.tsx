import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sibani Pattanaik — Frontend Developer",
  description: "Frontend Developer specializing in React, React Native, TypeScript and full-stack web development.",
  keywords: ["Sibani Pattanaik", "Frontend Developer", "React Developer", "React Native", "TypeScript"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

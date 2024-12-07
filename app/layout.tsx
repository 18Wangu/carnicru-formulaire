import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formulaire test",
  description: "formulaire portion nourriture pour chien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

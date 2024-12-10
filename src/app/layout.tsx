import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Body from "../components/Body"
export const metadata: Metadata = {
  title: "WeFrameTech",
  description: "Location de matériel événementiel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <Body isHomePage={true}/>
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Provider from "@/components/provider";
import "./globals.css";

const font = Exo_2({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaime Reyes",
  description: "Página principal portfolio",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${font.className} dark`}>
        <Provider>
          <main className="flex flex-col min-h-screen">{children}</main>
        </Provider>
      </body>
    </html>
  );
}

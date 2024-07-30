import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/components/BootstrapClient';

export const metadata: Metadata = {
  title: "Nextjs, React-Bootstrap",
  description: "Kadyl Bakyt's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-bs-theme='light'>
      <body className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}

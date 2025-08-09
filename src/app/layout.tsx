import type {Metadata} from 'next';
import './globals.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'CBPHACKERS - Crypto Support',
  description: 'Expert Cryptocurrency Support for wallet recovery, security, and fraud investigation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-body antialiased`}>{children}</body>
    </html>
  );
}

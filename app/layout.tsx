import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Provider from '@/components/SessionProvider/SessionProvider';
import { getServerSession } from 'next-auth/next';
import { GET } from '@/app/api/auth/[...nextauth]/route';
import { Session } from 'next-auth';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session: Session | null = await getServerSession(GET);
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}

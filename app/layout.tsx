import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';

const onest = Onest({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Samuel Gomez Suarez - Software Developer',
  description:
    "Hi, I'm Samuel, a software developer skilled in Python, JavaScript, and Java. I specialize in building dynamic web applications and backend solutions. Check out my portfolio here to see my work, or contact me for collaboration!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>{children}</body>
    </html>
  );
}

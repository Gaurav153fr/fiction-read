import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SessionWrapper from "@/components/SessionWrapper";
import UserContextProvider from "@/components/userContext";
// import dynamic from "next/dynamic";
// import type { NextTopLoaderProps } from 'nextjs-toploader';

// Dynamically import NextTopLoader
// Use dynamic import and explicitly define the component for Next.js

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiction Read - Read your favourite fiction",
  description: "From comedy to action, read your favourite fiction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
       <link rel="icon" href="/favilogo.png" />
      </head>
      <body className={inter.className}>
        <SessionWrapper>
          <UserContextProvider>
            {/* <ClientOnlyNextTopLoader /> */}
            {children}
            <Toaster />
          </UserContextProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}

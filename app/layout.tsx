import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Anshh — UI UX Designer ",
  description:
    "Anshh, UI UX Designer  with a background in arts and design based in India.",
  generator: "Next.js",
  applicationName: "Anshh",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Anshh — UI UX Designer ",
    description:
      "Anshh, UI UX Designer  with a background in arts and design based in India.",
    url: "https://www.nitrix.online/",
    siteName: "www.nitrix.online",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1243971455365156876/1244329656031776811/NITRIX_-_EXE.png?ex=6654b7cc&is=6653664c&hm=abb1b72684e19908819ec313b7e111e8fc53862294bcd6bfd48afcc64ea45c2a&",
        width: 1200,
        height: 630,
        alt: "Anshh —  UI UX Designer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshh — UI UX Designer ",
    description:
      "Anshh, UI UX Designer  with a background in arts and design based in India.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://media.discordapp.net/attachments/1243971455365156876/1244329656031776811/NITRIX_-_EXE.png?ex=6654b7cc&is=6653664c&hm=abb1b72684e19908819ec313b7e111e8fc53862294bcd6bfd48afcc64ea45c2a&",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

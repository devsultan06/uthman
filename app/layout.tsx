import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: `devsultan`,
  description:
    "Sultan's Portfolio",
  keywords: [
    "developer portfolio",
    "web development",

  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/avatar.png", type: "image/svg+xml" },
      { url: "/avatar.png", sizes: "any" },
    ],
    apple: [{ url: "/avatar.png", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",

};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster />
        {children}
      </body>
    </html>
  );
}

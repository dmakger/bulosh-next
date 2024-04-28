import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { Providers } from "./_providers/app-provider";
import { SITE_NAME } from "@/shared/data/seo.data";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"], variable: '--montserrat-font' });


export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: `${SITE_NAME} им. Арины`
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

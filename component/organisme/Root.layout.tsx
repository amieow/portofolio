"use client";
import React, { useRef } from "react";
import Header from "./header";
import { Analytics } from "@vercel/analytics/react";
import { Fira_Code, Inter, Poppins, Montserrat } from "next/font/google";
import Footer from "./footer";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["500", "400", "300"],
	display: "swap",
});

const firaCode = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
	weight: ["500", "400", "300"],
	display: "swap",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-montserrat",
	display: "swap",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-poppins",
	display: "swap",
});
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const rootRef = useRef(null);

	return (
		<body
			ref={rootRef}
			className={`bg-background overflow-x-hidden z-10 dark:bg-tertiary text-black dark:text-white relative min-h-screen ${poppins.variable} ${inter.variable} ${montserrat.variable} ${firaCode.variable}`}>
			<Header rootRef={rootRef} />
			{children}
			<Footer />
			<Analytics
				mode="auto"
				path={"/"}
			/>
		</body>
	);
}

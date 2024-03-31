"use client";
import { createContext, useEffect, useRef, useState } from "react";
import Header from "./header";
import { Analytics } from "@vercel/analytics/react";

import { Fira_Code, Inter, Poppins, Montserrat } from "next/font/google";
import Footer from "./footer";
import { AnimatePresence } from "framer-motion";
import Loading from "../molecules/loading";
import HandleRouting from "./HandleRouting";

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

export const preloading = createContext({
	preloadingDone: false,
	setPreloadingDone: (e: boolean) => {},
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const rootRef = useRef(null);

	return (
		<preloading.Provider
			value={{ preloadingDone: false, setPreloadingDone: () => {} }}>
			<body
				ref={rootRef}
				className={`bg-background overflow-x-hidden z-10 dark:bg-tertiary text-black dark:text-white relative min-h-screen ${poppins.variable} ${inter.variable} ${montserrat.variable} ${firaCode.variable}`}>
				<HandleRouting>
					<Header rootRef={rootRef} />
					{children}

					<Footer />
				</HandleRouting>
				<Analytics
					mode="auto"
					path={"/"}
				/>
			</body>
		</preloading.Provider>
	);
}

import RootLayout from "@/component/organisme/Root.layout";
import "./globals.css";
import "./preload.css";
import 'react-medium-image-zoom/dist/styles.css'
import { Metadata } from "next";
export const metadata: Metadata = {
	generator: "Next.js",
	applicationName: "Next.js",
	referrer: "origin-when-cross-origin",
	category: "portfolio",
	metadataBase: new URL("https://amieow.dev"),
	keywords: [
		"amieow",
		"amieow dev",
		"amieow portfolio",
		"fauzan firdaus",
		"fauzan",
		"portofolio fauzan firdaus",
	],
	authors: [{ name: "amieow", url: "https://amieow.dev" }],
	creator: "Amieow",
	title: "About Amieow",
	description:
		"i'am Amieow, a fullstack web developer. based in Yogyakarta, Indonesia",

	openGraph: {
		url: "https://amieow.dev",
		type: "website",
		title: "amieow",
		siteName: "amieow",
		description:
			"i'am Amieow, a fullstack web developer. based in Yogyakarta, Indonesia",
		images:
			"https://opengraph.b-cdn.net/production/documents/fa01bc07-8c95-4c45-8012-e48a442786ae.png?token=AT1NpjWDi-SqBXN5s_YBhzblGz7iS4F5pJMy4V3g-LI&height=722&width=1200&expires=33247562192",
	},
	twitter: {
		card: "summary_large_image",
		title: "amieow",
		description:
			"i'am Amieow, a fullstack web developer. based in Yogyakarta, Indonesia",
		images: [
			"https://opengraph.b-cdn.net/production/documents/fa01bc07-8c95-4c45-8012-e48a442786ae.png?token=AT1NpjWDi-SqBXN5s_YBhzblGz7iS4F5pJMy4V3g-LI&height=722&width=1200&expires=33247562192",
		],
	},
};

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<RootLayout>{children}</RootLayout>
		</html>
	);
}

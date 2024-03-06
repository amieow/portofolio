import RootLayout from "@/component/organisme/Root.layout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "amieow",
	description: `i'am Amieow, a developer. based in Yogyakarta, Indonesia`,
};

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <RootLayout>{children}</RootLayout>;
}

import RootLayout from "@/component/organisme/Root.layout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "amieow | about",
	description: `i'am Amieow , i am experienced a year on front-end web developer related also im learning small about the back-end. based in Yogyakarta, Indonesia`,
};

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <RootLayout>{children}</RootLayout>;
}

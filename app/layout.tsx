import RootLayout from "@/component/organisme/Root.layout";
import "./globals.css";
import "./preload.css";
import Head from "next/head";

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<Head>
				{/* HTML Meta Tags */}
				<title>About Amieow</title>
				<meta
					name="description"
					content="i'am Amieow, a fullstack web developer. based in Yogyakarta, Indonesia"
				/>

				{/* Facebook Meta Tags */}
				<meta
					property="og:url"
					content="https://amieow.dev"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:title"
					content="amieow"
				/>
				<meta
					property="og:description"
					content="i'am Amieow, a fullstack web developer. based in Yogyakarta, Indonesia"
				/>
				<meta
					property="og:image"
					content="https://opengraph.b-cdn.net/production/documents/fa01bc07-8c95-4c45-8012-e48a442786ae.png?token=AT1NpjWDi-SqBXN5s_YBhzblGz7iS4F5pJMy4V3g-LI&height=722&width=1200&expires=33247562192"
				/>

				{/* Twitter Meta Tags */}
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					property="twitter:domain"
					content="amieow.dev"
				/>
				<meta
					property="twitter:url"
					content="https://amieow.dev"
				/>
				<meta
					name="twitter:title"
					content="amieow"
				/>
				<meta
					name="twitter:description"
					content="i'am Amieow, a fullstack web developer. based in Yogyakarta, Indonesia"
				/>
				<meta
					name="twitter:image"
					content="https://opengraph.b-cdn.net/production/documents/fa01bc07-8c95-4c45-8012-e48a442786ae.png?token=AT1NpjWDi-SqBXN5s_YBhzblGz7iS4F5pJMy4V3g-LI&height=722&width=1200&expires=33247562192"
				/>
			</Head>
			<RootLayout>{children}</RootLayout>
		</html>
	);
}

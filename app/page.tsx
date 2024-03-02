import HeroSection from "@/component/organisme/hero.section";
import PortofolioSection from "@/component/organisme/portofolio.section";

export default async function Home() {
	return (
		<main className="flex flex-col">
			<HeroSection />
			<PortofolioSection />
		</main>
	);
}

"use client";
import HeroSection from "@/component/organisme/hero.section";
import PortofolioSection from "@/component/organisme/portofolio.section";
import { motion } from "framer-motion";
import ServicesSection from "@/component/organisme/services.section";
import AboutSection from "@/component/organisme/about.section";
import ContactSection from "@/component/organisme/contact.section";
import SertificateSection from "@/component/organisme/sertificate.section";

export default function Home() {
	return (
		<motion.div
			className="min-h-screen"
			initial={{ opacity: 0 }} // Atur opacity awal menjadi 0
			animate={{ opacity: 1 }} // Animasikan opacity menjadi 1
			exit={{ opacity: 0 }} // Atur opacity ketika keluar
		>
			<main className="flex flex-col relative">
				<HeroSection />
				<AboutSection />
				<SertificateSection />
				<PortofolioSection />
				<ServicesSection />
				<div className="w-full h-20 bg-indigo-50"></div>
				<div className="absolute -bottom-20 w-full bg-indigo-50 h-20"></div>
			</main>
		</motion.div>
	);
}

"use client";
import HeroSection from "@/component/organisme/hero.section";
import PortofolioSection from "@/component/organisme/portofolio.section";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServicesSection from "@/component/organisme/services.section";
import AboutSection from "@/component/organisme/about.section";
import ContactSection from "@/component/organisme/contact.section";

export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [preloadState, setPreloadState] = useState(0);

	useEffect(() => {
		// Periksa apakah ada nilai "preloadState" yang disimpan di localStorage
		// const storedPreloadState = localStorage.getItem("preloadState");

		// if (storedPreloadState) {
		// 	setPreloadState(parseInt(storedPreloadState, 10));
		// }

		// const delay = preloadState === 2 ? 2000 : 8000;

		// Simulasikan waktu tunggu selama 8 detik sebelum menandai bahwa komponen telah dimuat.
		// const timer = setTimeout(() => {
		// 	setIsLoaded(true);
		// }, delay);
		setIsLoaded(true);
		// return () => {
		// 	clearTimeout(timer);
		// };
	}, [preloadState]);

	// useEffect(() => {
	// 	const delay = preloadState === 2 ? 2000 : 8000;

	// 	// Tambahkan penanganan waktu tunggu 5 detik sebelum mengubah preloadState
	// 	const timer = setTimeout(() => {
	// 		if (preloadState === 2) {
	// 			setPreloadState(1);
	// 			localStorage.setItem("preloadState", "1");
	// 		}
	// 	}, delay);

	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, [preloadState]);

	return (
		<div>
			<motion.div
				className="min-h-screen"
				initial={{ opacity: 0 }} // Atur opacity awal menjadi 0
				animate={{ opacity: 1 }} // Animasikan opacity menjadi 1
				exit={{ opacity: 0 }} // Atur opacity ketika keluar
			>
				{isLoaded && (
					<AnimatePresence>
						<motion.div
							key="mobile"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<main className="flex flex-col relative">
								<HeroSection />
								<AboutSection />
								<PortofolioSection />
								<ServicesSection />
								<ContactSection />
								<div className="absolute -bottom-20 w-full bg-indigo-50 h-20"></div>
							</main>
						</motion.div>
					</AnimatePresence>
				)}
			</motion.div>
		</div>
	);
}

"use client";

import { AnimatePresence, Variants, motion, useAnimation } from "framer-motion";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useSearchParams } from "next/navigation";
import { createContext, useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Typography from "@/component/atoms/ui/typography";
export const ctxProvider = createContext({
	animatePageOut(href: string, router: AppRouterInstance) {},
	fullUrl: "",
});
export default function Template({ children }: { children: React.ReactNode }) {
	const transitionAnimation = useAnimation();
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const [isFirstTime, setIsFirstTime] = useState(true);
	const [trigger, setTrigger] = useState(true);
	const [slowLoad, setSlowLoad] = useState(true);
	const [href, setHref] = useState("/");
	const pathname = usePathname();
	const [fullUrl, setFullUrl] = useState("/");
	const searchParams = useSearchParams();
	const variantTransition: Variants = {
		pageIn_initial: {
			x: 0,
		},
		pageIn_animation: (index: number) => ({
			x: "100%",
			transition: { duration: isMobile ? 0.3 : 0.5, delay: 0.2 * index },
		}),
		pageOut_initial: {
			x: "-100%",
		},
		pageOut_animation: (index: number) => ({
			x: 0,
			transition: { duration: isMobile ? 0.3 : 0.5, delay: 0.2 * index },
		}),
	};
	const animatePageOut = (href: string, router: AppRouterInstance) => {
		transitionAnimation.set("pageOut_initial");
		transitionAnimation.start("pageOut_animation").then(() => {
			setHref(href);
			router.push(href);
		});
	};
	const animatePageIn = useMemo(() => {
		return () => {
			transitionAnimation.set("pageIn_initial");
			transitionAnimation.start("pageIn_animation");
		};
	}, [transitionAnimation]);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (trigger || fullUrl == href) {
			setTrigger(false);
			animatePageIn();
			console.log("triggered page in");
			timeout = setTimeout(() => {
				setSlowLoad(true);
				console.log({ href, fullUrl });
			}, 1000);

			setIsFirstTime(false);
		}
		return () => clearTimeout(timeout);
	}, [trigger, animatePageIn, fullUrl, href]);

	useEffect(() => {
		if (searchParams.toString().length > 0) {
			setFullUrl(`${pathname}?${searchParams.toString()}`);
		} else {
			setFullUrl(pathname);
		}
		console.log("slow load set to false");
		setSlowLoad(false);
	}, [pathname, searchParams]);
	return (
		<ctxProvider.Provider value={{ animatePageOut, fullUrl }}>
			{" "}
			<div>
				{Array.from({ length: 4 }).map((_, index) => (
					<motion.div
						key={index}
						variants={variantTransition}
						animate={transitionAnimation}
						id={`banner-${index}`}
						style={{ top: `${index * 25}%` }}
						custom={index}
						className="w-screen bg-indigo-200 z-[999] fixed left-0 h-1/4"
					/>
				))}
				<AnimatePresence>
					{!(trigger || fullUrl == href) ||
						(isFirstTime && slowLoad && (
							<motion.div
								initial={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.5 }}
								className="w-screen h-screen flex flex-col justify-center items-center fixed z-[1000] ">
								<div className="flex flex-col items-center">
									<Typography>Sabar gan bentar lagi</Typography>
								</div>
							</motion.div>
						))}
				</AnimatePresence>
				{children}
			</div>
		</ctxProvider.Provider>
	);
}

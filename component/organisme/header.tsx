"use client";
import { usePathname } from "next/navigation";
import Typography from "../atoms/ui/typography";
import { RefObject, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import Logo from "./logo";
import Navigation from "./navigation";
import { NAVBAR_MENU } from "@/contents/Navigation";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { cn, parseTarget } from "@/lib/utils";
export default function Header({
	rootRef,
}: {
	rootRef: RefObject<HTMLBodyElement>;
}) {
	const path = usePathname();
	const isVerySmallScreen = useMediaQuery({ maxWidth: 390 });
	const [isScrolledDown, setScrolledDown] = useState(false);
	const { scrollYProgress } = useScroll();
	scrollYProgress.on("change", (progress) => {
		const ProgressToPercent = progress * 100;
		handleScroll();
		if (ProgressToPercent > 20 && !isScrolledDown) {
			setScrolledDown(true);
		} else if (ProgressToPercent < 20 && isScrolledDown) {
			setScrolledDown(false);
		}
	});
	const [activeSection, setActiveSection] = useState("");
	const filterPageOnly = NAVBAR_MENU.filter(
		(menu) => !parseTarget(menu.link).sectionTarget,
	);
	const excludePageOnly = NAVBAR_MENU.filter(
		(menu) => parseTarget(menu.link).sectionTarget,
	);
	const determineActiveSection = () => {
		let isAdayangTrue = false;
		for (const sectionID of excludePageOnly) {
			const Target = parseTarget(sectionID.link);
			const isInThePage = path === Target.pageTarget;
			if (!Target.sectionTarget.length && isInThePage && isScrolledDown) {
				setActiveSection(sectionID.title);
				isAdayangTrue = true;
				break;
			}
			const section = document.getElementById(Target.sectionTarget);
			if (section) {
				const rect = section.getBoundingClientRect();
				// console.log({
				// 	top: rect.top,
				// 	bottom: rect.bottom,
				// 	id: sectionID.link.slice(1),
				// });
				if (
					rect.top < 382 &&
					rect.bottom >= 300 &&
					isInThePage &&
					isScrolledDown
				) {
					setActiveSection(sectionID.title);
					isAdayangTrue = true;
					break;
				}
			}
		}
		if (!isAdayangTrue) {
			for (const sectionID of filterPageOnly) {
				const Target = parseTarget(sectionID.link);
				const isInThePage = path === Target.pageTarget;
				if (!Target.sectionTarget.length && isInThePage && isScrolledDown) {
					setActiveSection(sectionID.title);
					isAdayangTrue = true;
					break;
				}
			}
			if (!isAdayangTrue) {
				setActiveSection("");
			}
		}
	};
	const handleScroll = () => {
		determineActiveSection();
	};
	useEffect(() => {
		handleScroll(); // Initial call when component mounts
	}, [path]);
	return (
		<>
			<header className="absolute top-0 z-20 w-full">
				<header
					className={cn("flex items-center z-50 h-[80px] transition-all", {
						// "w-full sticky top-0 bg-[#254142] hidden": isScrolledDown,
						"dark:border-0 border-b-2 border-gray-300 dark:bg-gradient-to-b dark:from-[#00000050] dark:to-tertiary":
							!isScrolledDown,
					})}>
					<header className="container w-full flex items-center justify-between">
						<Logo isScrolledDown={isScrolledDown} />
						<Navigation
							activeSection={activeSection}
							isScrolledDown={isScrolledDown}
							NAVBAR_MENU={NAVBAR_MENU}
							path={path}
						/>
					</header>
				</header>
			</header>
			<div
				className={cn(
					"fixed z-50 transition-all -top-14 left-1/2 -translate-x-1/2",
					{
						"translate-y-16": isScrolledDown,
					},
				)}>
				<div
					className={cn(
						"flex bg-white/30 relative backdrop-blur-md border border-gray-300 p-1 rounded-3xl",
						"first:rounded-l-3xl last:rounded-r-3xl",
					)}>
					{NAVBAR_MENU.map((menu, index) => (
						<Link
							key={index}
							href={menu.link}>
							<Typography
								thick={"medium"}
								className={cn(
									"h-full flex items-center ease-out px-3 py-1 md:px-6 rounded-2xl",
									"gradient-primary-hover hover:text-transparent",
									{
										"gradient-primary text-white hover:text-white":
											activeSection === menu.title,
										"hover:bg-clip-text": !(activeSection === menu.title),
									},
								)}>
								{menu.title}
							</Typography>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

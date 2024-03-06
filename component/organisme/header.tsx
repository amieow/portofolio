"use client";
import { usePathname } from "next/navigation";
import Typography from "../atoms/ui/typography";
import { RefObject, useState } from "react";
import { useScroll } from "framer-motion";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "../atoms/ui/sheet";
import { MenuIcon } from "lucide-react";
import Logo from "./logo";
import Navigation from "./navigation";
import { MobileMenuHeader } from "./mobileMenu";
import { NAVBAR_MENU } from "@/contents/Navigation";
import { cn } from "@/lib/utils";
export default function Header({
	rootRef,
}: {
	rootRef: RefObject<HTMLDivElement>;
}) {
	const path = usePathname();
	const [isScrolledDown, setScrolledDown] = useState(false);
	const { scrollYProgress } = useScroll({
		offset: ["end end", "start start"],
		target: rootRef,
	});
	scrollYProgress.on("change", (progress) => {
		const ProgressToPercent = progress * 100;
		if (ProgressToPercent < 80 && !isScrolledDown) {
			setScrolledDown(true);
		} else if (ProgressToPercent >= 80 && isScrolledDown) {
			setScrolledDown(false);
		}
	});
	return (
		<header
			className={`flex ${
				isScrolledDown
					? "w-full sticky top-0 bg-[#1C3233] animate-showToBottom"
					: "dark:border-0 border-b-2 border-gray-300 dark:bg-gradient-to-b dark:from-[#00000050] dark:to-tertiary "
			} items-center z-50 h-[80px] transition-all`}>
			<header className="container w-full flex items-center justify-between">
				<Logo isScrolledDown={isScrolledDown} />
				<Navigation
					isScrolledDown={isScrolledDown}
					NAVBAR_MENU={NAVBAR_MENU}
					path={path}
				/>
				<Sheet>
					<SheetTrigger
						className="md:hidden cursor-pointer"
						asChild>
						<MenuIcon className={cn({ "text-white": isScrolledDown })} />
					</SheetTrigger>
					<SheetContent>
						<SheetTitle asChild>
							<Typography
								thick={"bold"}
								size={"subheading1"}>
								Navigation
							</Typography>
						</SheetTitle>
						<MobileMenuHeader
							NAVBAR_MENU={NAVBAR_MENU}
							path={path}
						/>
					</SheetContent>
				</Sheet>
			</header>
		</header>
	);
}

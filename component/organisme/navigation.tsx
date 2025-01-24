'use client'
import Link from "next/link";
import Typography from "../atoms/ui/typography";
import { Fragment, useState } from "react";
import { TypeNavbarMenu } from "@/contents/Navigation";
import { cn } from "@/lib/utils";
import TransitionLink from "../molecules/TransitisionLink";
import { ChevronDown, ChevronDownCircleIcon } from "lucide-react";
type NavigationProps = {
	NAVBAR_MENU: TypeNavbarMenu[];
	path: string;
	isScrolledDown: boolean;
	activeSection: string;
};
const Navigation = ({
	NAVBAR_MENU,
	path,
	activeSection,
	isScrolledDown,
}: NavigationProps) => {
	const [open, setOpen] = useState(false);
	const toggleOpen = () => {
		setOpen(!open)
	}
	return (
		<nav className="gap-4 h-10 hidden md:flex">
			{NAVBAR_MENU.map((menu, index) => {
				const [open, setOpen] = useState(false)
				const isHaveMore = NAVBAR_MENU.length - 1 > index;
				return (
					<Fragment key={index}>
						<div className="relative flex gap-2" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
							{
								menu.link ? (<Link
									href={menu.link}
									scroll>
									<Typography
										thick={"bold"}
										color={path === menu.link ? "primary" : "default"}
										className={cn(
											"h-full cursor-pointer gap-2 hover:text-white flex items-center transition-all px-2 rounded-lg",
											{
												"text-white": isScrolledDown,
												"text-white gradient-primary": activeSection === menu.title,
												"rounded-b-none hover:bg-indigo-600 transition-none": menu.subMenu,
												"bg-indigo-600 text-white": open,
												"gradient-primary-hover": !menu.subMenu
											},
										)}
										size={"subheading2"}>
										{menu.title}
										{menu.subMenu && <ChevronDown />}
									</Typography>
								</Link>) : (
									<Typography
										thick={"bold"}
										color={path === menu.link ? "primary" : "default"}
										className={cn(
											"h-full cursor-pointer gap-2 hover:text-white flex items-center transition-all px-2 rounded-lg",
											{
												"text-white": isScrolledDown,
												"text-white gradient-primary": activeSection === menu.title,
												"rounded-b-none hover:bg-indigo-600 transition-none": menu.subMenu,
												"bg-indigo-600 text-white": open,
												"gradient-primary-hover": !menu.subMenu
											},
										)}
										size={"subheading2"}>
										{menu.title}
										{menu.subMenu && <ChevronDown className={cn("", {
											"rotate-180": open
										})} />}
									</Typography>
								)
							}
							{menu.subMenu && open && (
								<div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="absolute bg- bg-indigo-600 top-10 px-2 py-2 w-full right-0 flex flex-col">
									{menu.subMenu.map((v) => {
										if (v.link) {
											return (
												<Link className="px-2 py-1 hover:bg-indigo-800 flex-1 text-white" href={v.link}>
													<Typography thick={"medium"}>
														{v.title}
													</Typography>
												</Link>
											)
										}
										return (
											<Typography className="px-2 py-1 hover:bg-indigo-800 flex-1 text-white" thick={"medium"}>
												{v.title}
											</Typography>
										)
									})}
								</div>
							)}
						</div>
						{isHaveMore && <span className="w-px h-6 mt-2 bg-gray-300"></span>}
					</Fragment>
				);
			})}
		</nav>
	)
};

export type { NavigationProps };
export default Navigation;

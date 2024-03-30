import Link from "next/link";
import Typography from "../atoms/ui/typography";
import { Fragment } from "react";
import { TypeNavbarMenu } from "@/contents/Navigation";
import { cn } from "@/lib/utils";

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
}: NavigationProps) => (
	<nav className="gap-4 h-10 hidden md:flex">
		{NAVBAR_MENU.map((menu, index) => {
			const isHaveMore = NAVBAR_MENU.length - 1 > index;
			return (
				<Fragment key={index}>
					<Link href={menu.link}>
						<Typography
							thick={"bold"}
							color={path === menu.link ? "primary" : "default"}
							className={cn(
								"h-full hover:text-white flex items-center gradient-primary-hover transition-all px-2 rounded-lg",
								{
									"text-white": isScrolledDown,
									"text-white gradient-primary": activeSection === menu.title,
								},
							)}
							size={"subheading2"}>
							{menu.title}
						</Typography>
					</Link>
					{isHaveMore && <span className="w-px h-6 mt-2 bg-white"></span>}
				</Fragment>
			);
		})}
	</nav>
);

export type { NavigationProps };
export default Navigation;

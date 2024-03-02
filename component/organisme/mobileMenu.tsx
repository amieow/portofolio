// MobileMenu.js
import Link from "next/link";
import Typography from "../atoms/ui/typography";
import { Fragment } from "react";
import { NavigationProps } from "./navigation";

const MobileMenuHeader = ({ NAVBAR_MENU, path }: NavigationProps) => (
	<div className="flex flex-col gap-3 mt-5">
		{NAVBAR_MENU.map((menu, index) => {
			const hasMore = NAVBAR_MENU.length > index;
			return (
				<Fragment key={index}>
					<Link href={menu.link}>
						<Typography
							thick={"bold"}
							color={path === menu.link ? "primary" : "default"}
							className="tracking-[2.4px] hover:underline"
							size={"subheading1"}>
							{menu.title}
						</Typography>
					</Link>
					{hasMore && <span className="h-px w bg-white"></span>}
				</Fragment>
			);
		})}
	</div>
);

const MobileMenuSection = ({
	NAVBAR_MENU,
}: Pick<NavigationProps, "NAVBAR_MENU">) => {
	return (
		<section
			className="container"
			id="navigation-section">
			<Typography
				as="h3"
				color="primary"
				size="subheading2">
				Done reading? Check this out!
			</Typography>
		</section>
	);
};

export { MobileMenuHeader, MobileMenuSection };

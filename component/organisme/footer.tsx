import React from "react";
import Typography from "../atoms/ui/typography";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full pt-4 pb-16">
			<div>
				<Typography
					thick={"bolder"}
					font={"code"}
					size={"headline2"}>
					Made By{" "}
					<Link
						className="border-b border-blue-300 bg-clip-text gradient-primary text-transparent"
						href={"https://github.com/Amieow"}>
						Amieow
					</Link>
				</Typography>
			</div>
		</footer>
	);
}

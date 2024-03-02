import Link from "next/link";
import React from "react";
import Typography from "../atoms/ui/typography";

export default function Logo() {
	return (
		<Link
			href={"/"}
			className="shrink-0"
			scroll>
			<Typography
				className="tracking-[3.2px] max-md:text-2xl shrink-0 cursor-pointer"
				thick={"bold"}
				size={"headline1"}
				font={"code"}>
				Amieow | Dev
			</Typography>
		</Link>
	);
}

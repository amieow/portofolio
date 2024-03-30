import Link from "next/link";
import React from "react";
import Typography from "../atoms/ui/typography";
import { cn } from "@/lib/utils";

export default function Logo({ isScrolledDown }: { isScrolledDown: boolean }) {
	return (
		<Link
			href={"/"}
			className="shrink-0"
			scroll>
			<Typography
				className={cn(
					"tracking-[3.2px] gradient-primary text-transparent bg-clip-text max-md:text-2xl shrink-0  cursor-pointer",
				)}
				thick={"bold"}
				size={"headline2"}
				font={"poppins"}>
				Amieow | Dev
			</Typography>
		</Link>
	);
}

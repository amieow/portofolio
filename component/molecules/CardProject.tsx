import { ProjectTypes } from "@/lib/types/project.types";
import React from "react";
import Typography from "../atoms/ui/typography";

type CardProjectProps = ProjectTypes & React.ComponentPropsWithoutRef<"div">;

export default function CardProject(props: CardProjectProps) {
	const {
		image,
		title,
		shortDescription: description,
		colaborator,
		...otherProps
	} = props;
	return (
		<div
			className="w-[200px] h-20"
			{...otherProps}>
			<Typography
				size={"subheading2"}
				as="h3">
				{title}
			</Typography>
		</div>
	);
}

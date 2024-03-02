import React from "react";
import Typography, { TypographyProps } from "./ui/typography";
type TextWithLeftLineProps = TypographyProps<"p"> & {
	rootClassname?: string;
};
export default function TextWithLeftLine({
	children,
	rootClassname,
	...props
}: TextWithLeftLineProps) {
	return (
		<div className={`flex ${rootClassname}`}>
			<span className="mr-8 bg-secondary w-px "> </span>
			<Typography {...props}>{children}</Typography>
		</div>
	);
}

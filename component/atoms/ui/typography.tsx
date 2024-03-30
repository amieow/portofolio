import * as React from "react";
import { cn } from "@/lib/utils";
import { Fira_Code, Inter } from "next/font/google";
import { VariantProps, cva } from "class-variance-authority";
type TypographyProps<T extends React.ElementType> = {
	as?: T;
	className?: string;

	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T> &
	VariantProps<typeof typographyVariant>;

type TypographyComponent = <T extends React.ElementType = "p">(
	props: TypographyProps<T>,
) => React.ReactElement | null;

const typographyVariant = cva("", {
	variants: {
		size: {
			display: "text-[40px] sm:text-[48px]",
			headline1: "text-[32px] sm:text-[40px]",
			headline2: "text-[30px] sm:text-[36px]",
			subheading1: "text-[24px] sm:text-[28px]",
			subheading2: "text-[16px] sm:text-[20px]",
			paragraf1: "text-[18px] sm:text-[20px]",
			paragraf2: "text-[16px] sm:text-[18px]",
			label1: "text-[14px]",
			label2: "text-[12px]",
		},
		thick: {
			extraBold: "font-extrabold",
			bolder: "font-bold",
			bold: "font-semibold",
			medium: "font-medium",
			regular: "font-normal",
		},
		color: {
			default: "text-black dark:text-white",
			primary: "text-primary",
		},
		font: {
			inter: "font-inter",
			montserrat: "font-montserrat",
			poppins: "font-poppins",
			code: "font-code",
		},
		defaultVariant: {
			size: "paragraf2",
			thick: "regular",
			color: "default",
			font: "inter",
		},
	},
});

//@ts-ignore
// eslint-disable-next-line react/display-name
const Typography: TypographyComponent = React.forwardRef(
	<T extends React.ElementType>(
		{
			as,
			size = "paragraf2",
			thick,
			className,
			color,
			font,
			children,
			...props
		}: TypographyProps<T>,
		ref?: React.ComponentPropsWithRef<T>["ref"],
	): React.ReactElement | null => {
		const Component = as || "p";

		return (
			<Component
				ref={ref}
				className={cn(
					typographyVariant({
						thick,
						size,
						color,
						font,
					}),
					className,
				)}
				{...props}>
				{children}
			</Component>
		);
	},
);

export { typographyVariant, type TypographyProps };
export default Typography;

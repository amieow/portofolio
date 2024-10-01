"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
type RevealProps = {
	side?: "left" | "right" | "top" | "bottom";
	side2?: "left" | "right" | "top" | "bottom";
	width?: "fit-content" | "100%";
	animation_gap?: "full" | "half" | "100";
	delay?: number;
	className?: string;
	wannaOverflow?: boolean;
	wannaSlide?: boolean;
	children: React.ReactNode;
};

export const revealVariant = ({
	delay,
	side2,
	side,
	animation_gap,
}: Omit<RevealProps, "children">) => {
	let gap: string | number = 100;
	if (animation_gap === "full") {
		gap = "100%";
	}
	if (animation_gap === "half") {
		gap = "50%";
	}
	return {
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				delay,
				duration: 0.5,
			},
		},
		hidden: {
			opacity: 0,
			y:
				side === "top" || side2 === "top"
					? `-${gap}`
					: side === "bottom" || side2 === "left"
					? gap
					: 0,
			x:
				side == "right" || side2 === "right"
					? gap
					: side === "left" || side2 === "left"
					? `-${gap}`
					: 0,
		},
	};
};

export default function Reveal({
	side = "bottom",
	side2,
	width = "fit-content",
	animation_gap = "100",
	wannaOverflow = false,
	wannaSlide,
	delay = 0,
	children,
	className,
}: RevealProps) {
	const ref = useRef(null);
	const inView = useInView(ref, { margin: "0px 20px 0px 20px", amount: "all" });
	const mainControl = useAnimation();
	const variant = revealVariant({ delay, side2, side, animation_gap });
	useEffect(() => {
		if (inView) {
			mainControl.start("visible");
		}
	}, [inView, mainControl]);
	return (
		<div
			ref={ref}
			// style={{
			// 	position: "relative",
			// 	overflow: wannaOverflow ? "visible" : "hidden",
			// }}
			className={cn(
				"relative overflow-hidden",
				{
					"overflow-visible": wannaOverflow,
				},
				className,
			)}>
			<motion.div
				variants={variant}
				initial="hidden"
				style={{
					width,
				}}
				animate={mainControl}>
				{children}
			</motion.div>
		</div>
	);
}

"use client";
import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../atoms/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import Typography from "../atoms/ui/typography";
import { motion, useAnimation } from "framer-motion";
import { TypeSocialMedia } from "@/contents/Social-media";
import { cn } from "@/lib/utils";
const BACKGROUND_COLOR = ["#eef2ff", "#e0e7ff"];
export default function SocialMediaButton({
	index,
	reverse,
	iconOnly,
	bgOption = 0,
	...social
}: TypeSocialMedia & {
	index: number;
	reverse?: boolean;
	iconOnly?: boolean;
	bgOption?: number;
}) {
	const controlAnimation = useAnimation();
	return (
		<TooltipProvider
			delayDuration={200}
			key={index}>
			<Tooltip key={index}>
				<TooltipTrigger className="overflow-clip w-fit flex items-center ml-auto">
					<Link
						onMouseEnter={() => controlAnimation.start("visible")}
						onMouseLeave={() => controlAnimation.start("hidden")}
						target="_blank"
						className={cn(
							"md:px-4 py-2 w-full group shrink-0 relative overflow-clip flex group items-center",
							{
								"flex-row-reverse": reverse,
							},
						)}
						href={social.link}
						key={index}>
						<Image
							draggable={false}
							src={social.icon}
							alt=""
							className="shrink-0"
							width={36}
							height={36}
						/>
						<Typography
							font={"poppins"}
							style={{ color: social.color }}
							thick={"bold"}
							className={cn("px-2 h-fit shrink-0 relative", {
								"max-md:hidden": iconOnly,
							})}>
							{social.username}
							{iconOnly && (
								<motion.span
									style={{ backgroundColor: BACKGROUND_COLOR[bgOption] }}
									className={cn(
										"absolute w-full group-hover:w-0 ease-in duration-200 transition-all bg-origin-padding h-8 bottom-0 z-10",
										{
											"left-0": reverse,
											"right-0": !reverse,
										},
									)}
								/>
							)}
						</Typography>

						<motion.span
							variants={{
								hidden: { width: 0 },
								visible: {
									width: "100%",
								},
							}}
							animate={controlAnimation}
							style={{ backgroundColor: social.color }}
							className={cn("h-1 bottom-0 rounded-lg absolute z-10", {
								"right-0": reverse,
								"left-4": !reverse,
							})}
						/>
					</Link>
				</TooltipTrigger>
				<TooltipContent
					sideOffset={36}
					side="top">
					<Typography thick={"medium"}>{social.username}</Typography>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

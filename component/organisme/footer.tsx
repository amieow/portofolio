import React from "react";
import Typography from "../atoms/ui/typography";
import Link from "next/link";
import { NAVBAR_MENU } from "@/contents/Navigation";
import SOCIAL_MEDIA from "@/contents/Social-media";
import Image from "next/image";
import mosaic from "@/public/images/decoration/mosaic-1.svg";

import { cn } from "@/lib/utils";
import SocialMediaButton from "../molecules/SocialMediaButton";
import { useMediaQuery } from "react-responsive";
import { TooltipProvider } from "../atoms/ui/tooltip";
export default function Footer() {
	const isSmallScreen = useMediaQuery({ maxWidth: 768 });
	return (
		<footer className="pt-16 z-10 relative">
			<footer className="w-full z-10 md:overflow-hidden bg-indigo-100 relative pt-16 pb-40">
				<div className="container gap-2 flex flex-col max-md:justify-between max-md:px-5 items-center">
					<Typography
						font={"poppins"}
						thick={"bold"}
						className="text-gray-700"
						size={"headline2"}>
						Amieow
					</Typography>
					<div className="flex">
						{NAVBAR_MENU.map((menu, index) => (
							<Link
								href={menu.link}
								key={index}>
								<Typography
									className="py-2 px-4 hover:underline"
									thick={"medium"}>
									{menu.title}
								</Typography>
							</Link>
						))}
					</div>
					<div className="flex flex-col"></div>
					<div className="flex flex-col md:ml-10">
						<Typography
							font={"poppins"}
							thick={"bold"}
							className="text-gray-700 text-center"
							size={"headline2"}>
							Get in touch
						</Typography>
						<div className="flex flex-wrap justify-center gap-4">
							{SOCIAL_MEDIA.map((social, index) => (
								<SocialMediaButton
									index={index}
									key={index}
									{...social}
								/>
							))}
						</div>
					</div>
					<span className="h-px w-full bg-gray-400 mt-10" />
					<div className=" flex justify-center gap-5">
						<Typography size={"label1"}>Last Updated March, 2024</Typography>
						<span className="h-5 w-1 bg-indigo-300" />
						<Typography size={"label1"}>All Rights Reserved</Typography>
					</div>
				</div>
				<Image
					src={mosaic}
					alt=""
					draggable={false}
					className={cn(
						"absolute -z-10 max-md:hidden md:-right-10 md:-bottom-10 opacity-50",
					)}
					width={300}
					height={300}
				/>
			</footer>
			<div className="w-full h-4 absolute top-11 -z-10">
				<div className="w-full relative h-4 flex flex-col">
					<span
						className={cn(
							"h-4 w-[91%] absolute top-1 rounded-t-lg left-1/2 bg-indigo-100 -translate-x-1/2",
							{
								"h-2 top-3": isSmallScreen,
							},
						)}
					/>
					<span
						className={cn(
							"h-4 w-[75%] absolute -top-3 rounded-t-lg left-1/2 bg-indigo-100 -translate-x-1/2",
							{
								"h-2 top-1": isSmallScreen,
							},
						)}
					/>
					<span
						className={cn(
							"h-4 w-[50%] absolute -top-7 rounded-t-lg left-1/2 bg-indigo-100 -translate-x-1/2",
							{
								"h-2 -top-1": isSmallScreen,
							},
						)}
					/>
					<span
						className={cn(
							"h-4 w-[25%] absolute -top-11 rounded-t-lg left-1/2 bg-indigo-100 -translate-x-1/2",
							{
								"h-2 -top-3": isSmallScreen,
							},
						)}
					/>
				</div>
			</div>
		</footer>
	);
}

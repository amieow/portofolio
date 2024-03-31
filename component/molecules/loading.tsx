import { motion } from "framer-motion";
import React from "react";
import Typography from "../atoms/ui/typography";
import loader from "@/public/images/decoration/my-loader.svg";
import Image from "next/image";
export default function Loading({ isFirstTime }: { isFirstTime?: boolean }) {
	return (
		<motion.div
			initial={
				!isFirstTime && {
					scale: 0.7,
					opacity: 0,
				}
			}
			animate={{
				opacity: 1,
				scale: 1,
				x: 0,
				borderRadius: "0%",
				transition: { duration: 0.3 },
			}}
			exit={{
				x: "100vw",
				scale: 0,
				opacity: 0,
				borderRadius: "100%",
				transition: { duration: 1 },
			}}
			key="loading"
			className="w-full  h-screen flex-col m-auto flex z-50 justify-center items-center bg-indigo-950 text-white fixed top-0">
			<div className="flex flex-col relative justify-center items-center gap-1">
				<Image
					src={loader}
					alt="loading ..."
					className="w-52 h-32"
				/>
				<span className="bg-blue-700 w-full h-px" />
				<Typography font={"montserrat"}>created by amieow</Typography>
			</div>
		</motion.div>
	);
}

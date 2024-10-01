import React from "react";
import Typography from "../atoms/ui/typography";
import { motion } from "framer-motion";
import ABOUT_ME from "@/contents/aboutMe";
import { Images_decoration } from "@/contents/images";
import Image from "next/image";
//I've been hooked on Computer Science since I was 12, with a particular interest in botting. and when I was 15 i started seriously learning how to code in field of botting. after that when i 16-year-old i started learning web development.
export default function AboutSection() {
	return (
		<section
			id="about"
			className="w-full flex flex-col overflow-x-hidden gap-10 pt-40 bg-indigo-50 pb-20">
			<Typography
				as="h2"
				size={"display"}
				thick={"bold"}
				font={"poppins"}
				className="text-center w-full "
				color="primary">
				About me 🧑
			</Typography>
			<div className="container relative flex flex-col-reverse gap-4 md:justify-between md:flex-row">
				<div className="bg-[#e5ebfe] h-fit px-6 rounded-3xl md:w-3/5 py-8 pb-12 relative">
					<Typography
						size={"paragraf1"}
						className="whitespace-pre-line">
						{ABOUT_ME}
					</Typography>{" "}
					<div className="absolute top-0 right-2 md:right-0 translate-x-1/2 -translate-y-1/2">
						<motion.div
							whileInView={{
								scale: [1, 1.2],
								opacity: [0.3, 1],
								transition: {
									duration: 1,
									repeat: Infinity,
									repeatType: "reverse",
								},
							}}>
							<Image
								src={Images_decoration.marked}
								alt=""
								className="rotate-12"
								width={36}
								height={36}
							/>
						</motion.div>
					</div>
				</div>
				<div>
					<Image
						src={Images_decoration.man}
						alt="amieow"
						className="w-full z-10 "
					/>
				</div>
				<Image
					src={Images_decoration.shineM}
					alt=""
					className="absolute top-0 right-0 hover:rotate-[720deg] hover:scale-125 cursor-pointer duration-700 transition-all translate-x-1/2 -translate-y-1/2"
				/>
			</div>
		</section>
	);
}

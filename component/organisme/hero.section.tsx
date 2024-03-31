import Typography from "../atoms/ui/typography";
import { Fragment } from "react";
import Image from "next/image";
import Reveal from "../molecules/Reveal";
import waves2 from "@/public/images/decoration/wave (1).svg";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
// import vscode from "@/public/images/icon_vscode.svg";
const GIMMICK = ["Development", "Webflow", "Implementation"];
export default function HeroSection() {
	return (
		<section
			className=" pt-48 hero pb-20 min-h-[77vh] overflow-hidden z-10 sm:min-h-[90vh] relative flex-col gap-20"
			id="hero">
			{" "}
			<div className="flex flex-col overflow-hidden container">
				<Reveal>
					<Typography
						as="h1"
						color={"primary"}
						font={"montserrat"}
						//max-sm:text-[7vw] sm:text-[3em] min-[900px]:
						className="max-sm:text-[6.6vw] sm:text-[5.5vw] min-[1400px]:text-7xl inline-flex flex-col text-[4vw] font-bold leading-[1.2] tracking-[-0.5px] mb-6 sm:w-fit"
						thick={"bold"}>
						<span>
							{`HI`}
							<span className="w-fit inline-flex transition-all">{`👋`}</span>{" "}
							{` I'M AMIEOW.`}
							<br />A FULLSTACK DEVELOPER
						</span>{" "}
						BASED IN YOGYAKARTA
					</Typography>
				</Reveal>

				<div className=" w-fit mt-4 items-center flex sm:flex-row gap-2 md:gap-4">
					{GIMMICK.map((gimmick, index) => (
						<Reveal
							delay={0.2 + index / 10}
							key={index}>
							<Fragment>
								<Typography
									as="span"
									size={"paragraf1"}
									font={"poppins"}
									className="text-[4vw] sm:text-[2.4vw] md:text-[2vw] mr-4 sm:tracking-[4px] min-[1200px]:text-xl"
									color="default">
									{gimmick}
								</Typography>
								{index !== GIMMICK.length - 1 && (
									<span className="text-[4vw] sm:text-[2vw] md:text-[2.2vw] min-[1200px]:text-2xl text-primary">
										*
									</span>
								)}
							</Fragment>
						</Reveal>
					))}
				</div>
			</div>
			<motion.div
				initial={{ y: 0, x: "50%" }}
				animate={{
					y: 40,
					x: "50%",
					transition: {
						duration: 2,
						repeat: Infinity,
						repeatType: "reverse",
					},
				}}
				className="absolute bottom-32 right-1/2">
				<Link
					href={"#about"}
					className="box-primary relative px-6 py-3 font-semibold rounded-2xl backdrop-blur-xl bg-sky-400 text-white border border-gray-200">
					Read More
					<span
						className="h-1.5 w-[80%] bg-sky-300 absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-b-lg
					"></span>
					<ChevronDown
						color="#7dd3fc"
						className="w-6 h-6 absolute -bottom-5 left-1/2 -translate-x-1/2"
					/>
				</Link>
			</motion.div>
			<Image
				draggable={false}
				src={waves2}
				alt="waves"
				width={"100"}
				height={"500"}
				className="w-full absolute bottom-0 sm:-bottom-20 xl:-bottom-40 -z-10"
			/>
		</section>
	);
}

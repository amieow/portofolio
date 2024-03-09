import Typography from "../atoms/ui/typography";
import TextWithLeftLine from "../atoms/TextWithLeftLine";
import { Fragment } from "react";
import PProfile from "@/public/images/photo-profile.png";
import Image from "next/image";
import Reveal from "../molecules/Reveal";
import Link from "next/link";
import waves from "@/public/images/decoration/wave.svg";
import waves2 from "@/public/images/decoration/wave (1).svg";
// import vscode from "@/public/images/icon_vscode.svg";
const GIMMICK = ["Development", "Webflow", "Implementation"];
export default function HeroSection() {
	return (
		<section
			className=" pt-36 hero pb-20 min-h-[77vh] sm:min-h-[90vh] relative flex-col gap-20"
			id="hero">
			<div className="flex flex-col overflow-hidden container">
				<Reveal>
					<Typography
						as="h1"
						color={"primary"}
						font={"montserrat"}
						//max-sm:text-[7vw] sm:text-[3em] min-[900px]:
						className="max-sm:text-[6.7vw] min-[1400px]:text-7xl inline-flex flex-col text-[4vw] font-bold leading-[1.2] tracking-[-0.5px] mb-6 sm:w-fit"
						thick={"bold"}>
						<span>
							{`HI`}
							<span className="w-fit inline-flex transition-all">{`👋`}</span>{" "}
							{` I'M AMIEOW.`}
							<br />A SOFTWARE ENGGINER
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
									className="text-[4vw] sm:text-[2vw] md:text-[2vw] mr-4 sm:tracking-[4px] min-[1200px]:text-xl"
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

			<div className="flex gap-5 sm:gap-10 container"></div>
			<Image
				draggable={false}
				src={waves2}
				alt="waves"
				width={"100"}
				height={"500"}
				className="w-full absolute bottom-0 "
			/>
		</section>
	);
}

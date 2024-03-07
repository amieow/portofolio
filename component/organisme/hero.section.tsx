import Typography from "../atoms/ui/typography";
import TextWithLeftLine from "../atoms/TextWithLeftLine";
import { Fragment } from "react";
import PProfile from "@/public/images/photo-profile.png";
import Image from "next/image";
import Reveal from "../molecules/Reveal";
// import vscode from "@/public/images/icon_vscode.svg";
const GIMMICK = ["Development", "Webflow", "Implementation"];
export default function HeroSection() {
	return (
		<section
			className=" pt-20 pb-20 flex max-sm:flex-col-reverse gap-10 overflow-hidden justify-between container"
			id="hero">
			<div className="flex flex-col overflow-hidden sm:w-[70%]">
				<Reveal>
					<Typography
						as="h1"
						color={"primary"}
						font={"montserrat"}
						//max-sm:text-[7vw] sm:text-[3em] min-[900px]:
						className="max-sm:text-[6.7vw] min-[1400px]:text-6xl inline-flex flex-col text-[4vw] font-bold leading-[1.2] tracking-[-0.5px] mb-6 sm:w-fit"
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
			<div className="relative px-5 py-2 w-full object-cover sm:w-[28%] h-[300px] sm:h-[300px] border-2 border-gray-200 rounded-3xl flex items-center justify-center">
				<Image
					src={PProfile}
					alt="Photo Profile"
					fill
					className="rounded-3xl object-cover"
				/>
			</div>
		</section>
	);
}

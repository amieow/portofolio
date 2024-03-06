import Typography from "../atoms/ui/typography";
import TextWithLeftLine from "../atoms/TextWithLeftLine";
import { Fragment } from "react";
import PProfile from "@/public/images/photo-profile.png";
import Image from "next/image";
// import vscode from "@/public/images/icon_vscode.svg";
const GIMMICK = ["Development", "Webflow", "Implementation"];
export default function HeroSection() {
	return (
		<section
			className=" pt-20 pb-20 flex max-sm:flex-col-reverse gap-10 overflow-hidden justify-between container"
			id="hero">
			<div className="flex flex-col overflow-hidden">
				<Typography
					as="h1"
					color={"primary"}
					font={"montserrat"}
					//max-sm:text-[7vw] sm:text-[3em] min-[900px]:
					className="max-sm:text-[7vw] min-[1400px]:text-6xl flex flex-col text-[4.7vw] font-bold leading-[1.2] tracking-[-0.5px] mb-6 sm:w-fit"
					thick={"bold"}>
					<span>
						{`HI`}
						<span className="w-fit transition-all rotate-45">{`👋`}</span>{" "}
						{` I'M AMIEOW.`}
						<br />A SOFTWARE ENGGINER
					</span>{" "}
					BASED IN YOGYAKARTA
				</Typography>

				<div className=" w-fit mt-4 items-center flex sm:flex-row gap-2 md:gap-4">
					{GIMMICK.map((gimmick, index) => (
						<Fragment key={index}>
							<Typography
								as="span"
								size={"paragraf1"}
								font={"poppins"}
								className="text-[4vw] sm:text-[2vw] md:text-[2.2vw] sm:tracking-[4px] min-[1400px]:text-2xl"
								color="default">
								{gimmick}
							</Typography>
							{index !== GIMMICK.length - 1 && (
								<span className="text-[4vw] sm:text-[2vw] md:text-[2.2vw] min-[1400px]:text-2xl text-primary">
									*
								</span>
							)}
						</Fragment>
					))}
				</div>
			</div>
			<div className="relative px-5 py-2 border-2 border-gray-200 rounded-3xl flex items-center justify-center">
				<Image
					src={PProfile}
					alt="Photo Profile"
					width={250}
					height={250}
				/>
			</div>
		</section>
	);
}

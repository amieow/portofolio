import Typography from "../atoms/ui/typography";
import TextWithLeftLine from "../atoms/TextWithLeftLine";
// import Image from "next/image";
// import vscode from "@/public/images/icon_vscode.svg";
export default function HeroSection() {
	return (
		<section
			className=" pt-20 pb-20 flex flex-col overflow-hidden container"
			id="hero">
			<Typography
				as="h1"
				color={"primary"}
				font={"montserrat"}
				className="max-sm:text-[7vw] sm:text-[3em] flex flex-col min-[900px]:text-[4em] font-bold leading-[1.2] tracking-[-0.5px] mb-6"
				thick={"bold"}>
				<span>
					{`HI`}
					<span className="w-fit transition-all rotate-45">{`👋`}</span>{" "}
					{` I'M AMIEOW.`}
					<br />A SOFTWARE ENGGINER
				</span>{" "}
				BASED IN YOGYAKARTA
			</Typography>

			<div className="sm:w-full mt-4 items-center flex sm:flex-row gap-2 md:gap-4">
				<Typography
					as="span"
					font={"poppins"}
					size={"paragraf1"}
					className="text-[4vw] sm:text-lg md:text-2xl sm:tracking-[4px]"
					color="default">
					Development
				</Typography>
				<span className="sm:text-lg md:text-xl text-primary">*</span>
				<Typography
					as="span"
					size={"paragraf1"}
					font={"poppins"}
					className="text-[4vw] sm:text-lg md:text-2xl sm:tracking-[4px]"
					color="default">
					Webflow
				</Typography>
				<span className="text-lg md:text-xl text-primary">*</span>
				<Typography
					as="span"
					size={"paragraf1"}
					font={"poppins"}
					className="text-[4vw] sm:text-lg md:text-2xl sm:tracking-[4px]"
					color="default">
					Implementation
				</Typography>
			</div>
		</section>
	);
}

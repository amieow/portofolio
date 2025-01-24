import React from "react";
import Typography from "../atoms/ui/typography";
import InfiniteScrollingImages from "../molecules/InfiniteScrollingImage";
import PROJECT_SHOWCASE from "@/contents/Projects";
import CardProject from "../molecules/CardProject";
import Reveal from "../molecules/Reveal";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../atoms/ui/button";
import { ArrowUpRight } from "lucide-react";
import TransitionLink from "../molecules/TransitisionLink";
import { Images_decoration } from "@/contents/images";

export default function PortofolioSection() {
	const path = usePathname();
	return (
		<section
			id="portofolio"
			className="w-full relative z-10 bg-indigo-50 dark:bg-indigo-950">
			<section
				id="tech-stack"
				className="w-full flex flex-col gap-3 z-10 pt-20">
				<Reveal width="100%">
					<Typography
						as="h2"
						size={"display"}
						thick={"bold"}
						font={"montserrat"}
						className="text-center w-full container z-10"
						color="primary">
						Tech Stack 🧑‍💻
					</Typography>
				</Reveal>
				<Reveal
					side="bottom"
					delay={0.4}
					width="100%"
					side2="right">
					<InfiniteScrollingImages />
				</Reveal>
			</section>

			<section className="relative z-10 overflow-hidden">
				<section
					className="container z-10 pt-20"
					id="project">
					<Typography
						as="h2"
						size={"display"}
						thick={"bold"}
						font={"montserrat"}
						className="text-center w-full "
						color="primary">
						Projects 📦
					</Typography>
					<Typography
						size={"paragraf1"}
						className="text-center w-full ">
						Here are some projects {`I've`} worked on <br /> some are
						colaborating with others
					</Typography>
					<div className="w-full z-10 flex flex-col gap-10 pt-10 h-full">
						<div className="flex flex-wrap md:items-stretch h-fit gap-8 flex-col sm:flex-row">
							{PROJECT_SHOWCASE.slice(0, 3).map((ITEM, INDEX) => (
								<CardProject
									path={path}
									index={INDEX}
									key={INDEX}
									ProjectItem={ITEM}
								/>
							))}
						</div>
						<Reveal
							side="left"
							className="flex w-full items-center justify-center">
							<Button
								className="border-2 border-gray-300"
								variant={"outline"}
								asChild>
								<Link target="_blank" href={"https://github.com/amieow?tab=repositories"}>
									<Typography
										font={"poppins"}
										className="gap-2 flex">
										Find more projects
									</Typography>
									<ArrowUpRight className=" ml-2 w-6 h-6" />
								</Link>
							</Button>
						</Reveal>
					</div>
				</section>
				<div
					draggable={false}
					className="w-full absolute -right-[80%] top-[60%] rotate-[35deg] -z-10">
					<Image
						src={Images_decoration.wave_nonsimetric}
						alt=""
						width={400}
						height={400}
						draggable={false}
					/>
					<Image
						src={Images_decoration.wave_nonsimetric}
						alt=""
						className="-translate-y-0.5 -translate-x-3"
						width={400}
						draggable={false}
						height={400}
					/>
				</div>
				<div
					draggable={false}
					className="w-full absolute -top-0 xl:-top-[70%] -left-[20%] -rotate-[35deg] -z-10">
					<Image
						src={Images_decoration.wave_nonsimetric}
						alt=""
						draggable={false}
						width={400}
						height={400}
					/>
					<Image
						src={Images_decoration.wave_nonsimetric}
						alt=""
						className="-translate-y-0.5 -translate-x-3"
						width={400}
						draggable={false}
						height={400}
					/>
				</div>
			</section>
		</section>
	);
}

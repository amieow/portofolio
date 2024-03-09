import React from "react";
import Typography from "../atoms/ui/typography";
import InfiniteScrollingImages from "../molecules/InfiniteScrollingImage";
import PROJECT_SHOWCASE from "@/contents/Projects";
import CardProject from "../molecules/CardProject";
import Reveal from "../molecules/Reveal";

export default function PortofolioSection() {
	return (
		<section
			id="portofolio"
			className="w-full space-y-40 bg-indigo-50 dark:bg-indigo-950 pt-20 py-10">
			<section className="">
				<section
					id="tech-stack"
					className="w-full flex flex-col gap-3">
					<Reveal width="100%">
						<Typography
							as="h2"
							size={"display"}
							thick={"bold"}
							font={"montserrat"}
							className="text-center w-full container "
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
			</section>
			<section
				className="container"
				id="projects">
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
					Here are some projects {`I've`} worked on <br /> some are colaborating
					with others
				</Typography>
				<div className="w-full flex flex-wrap md:gap-10 mt-10">
					{PROJECT_SHOWCASE.slice(0, 3).map((ITEM, INDEX) => (
						<CardProject
							index={INDEX}
							key={INDEX}
							ProjectItem={ITEM}
						/>
					))}
				</div>
			</section>
		</section>
	);
}

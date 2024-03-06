import React from "react";
import Typography from "../atoms/ui/typography";
import InfiniteScrollingImages from "../molecules/InfiniteScrollingImage";
import PROJECT_SHOWCASE from "@/contents/Projects";
import CardProject from "../molecules/CardProject";

export default function PortofolioSection() {
	return (
		<section
			id="portofolio"
			className="w-full space-y-40 bg-indigo-50 dark:bg-indigo-950 mt-20 py-10">
			<section className="">
				<section
					id="tech-stack"
					className="w-full flex flex-col gap-3">
					<Typography
						as="h2"
						size={"display"}
						thick={"bold"}
						font={"montserrat"}
						className="text-center w-full container "
						color="primary">
						Tech Stack 🧑‍💻
					</Typography>
					<InfiniteScrollingImages />
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
					{PROJECT_SHOWCASE.map((ITEM, INDEX) => (
						<CardProject
							index={INDEX}
							key={INDEX}
							{...ITEM}
						/>
					))}
				</div>
			</section>
		</section>
	);
}

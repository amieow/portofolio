import Typography from "@/component/atoms/ui/typography";
import CardProject from "@/component/molecules/CardProject";
import PROJECT_SHOWCASE from "@/contents/Projects";
import { usePathname } from "next/navigation";
import React from "react";

export default function Home() {
	const path = usePathname();
	const websiteProject = PROJECT_SHOWCASE.filter(
		(project) => project.category === "WEBSITE",
	);
	const botProject = PROJECT_SHOWCASE.filter(
		(project) => project.category === "BOT",
	);
	return (
		<section className="container pt-28 pb-20">
			<Typography
				size={"display"}
				color="primary"
				thick={"bolder"}
				className="w-full text-center mb-5">
				List of projects 📦
			</Typography>
			{/** Category Projects */}
			<div className="mb-10"></div>
			{/** Project Showcase */}
			<div className="flex flex-wrap gap-3">
				<Typography
					color="primary"
					thick={"bolder"}
					size={"headline1"}
					font={"montserrat"}
					className="w-full border-b-2 border-gray-200">
					Website
				</Typography>
				{websiteProject.map((project, index) => (
					<CardProject
						path={path}
						key={index}
						ProjectItem={project}
						index={index}
						isBig
						className="lg:w-[49%]"
					/>
				))}
			</div>
		</section>
	);
}

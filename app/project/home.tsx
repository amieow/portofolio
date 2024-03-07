import Typography from "@/component/atoms/ui/typography";
import CardProject from "@/component/molecules/CardProject";
import PROJECT_SHOWCASE from "@/contents/Projects";
import React from "react";

export default function Home() {
	return (
		<section className="container pt-16">
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
				{PROJECT_SHOWCASE.map((project, index) => (
					<CardProject
						key={index}
						{...project}
						index={index}
						isBig
						className="lg:w-[49%]"
					/>
				))}
			</div>
		</section>
	);
}

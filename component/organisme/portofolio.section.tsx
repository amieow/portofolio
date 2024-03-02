import React from "react";
import Typography from "../atoms/ui/typography";
import InfiniteScrollingImages from "../molecules/InfiniteScrollingImage";

export default function PortofolioSection() {
	return (
		<section
			id="portofolio"
			className="w-full bg-indigo-950 mt-20 py-10">
			<section className="container">
				<section
					id="tech-stack"
					className="w-full flex flex-col gap-3">
					<Typography
						as="h2"
						size={"headline2"}
						thick={"bold"}
						font={"montserrat"}
						className="text-center w-full "
						color="primary">
						Tech Stack
					</Typography>
					<InfiniteScrollingImages />
				</section>
			</section>
		</section>
	);
}

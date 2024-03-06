"use client";
import Typography from "@/component/atoms/ui/typography";
import PROJECT_SHOWCASE from "@/contents/Projects";
import { formattedDateDDMMYYYY } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import webIcon from "@/public/images/icon/website-logo.svg";
import partnerIcon from "@/public/images/icon/partner-icon.svg";
import repoIcon from "@/public/images/icon/repository-icon.svg";
import arrowUpRight from "@/public/images/icon/arrow-up-right.svg";
export default function Page() {
	const params = useSearchParams();
	const isProjectId =
		Number(params.get("project-key")) < PROJECT_SHOWCASE.length;
	if (!isProjectId) {
		return (
			<>
				<Typography>Not Found</Typography>
			</>
		);
	}
	const ProjectItem = PROJECT_SHOWCASE[Number(params.get("project-key"))];
	return (
		<section
			id="project-mobile"
			className="flex flex-col relative pt-14 max-lg:pb-6 p-8 rounded-3xl">
			<div className="flex flex-col max-lg:pt-14 max-lg:pb-6 py-8 xl:p-8 rounded-3xl">
				<Link
					className="absolute top-8 left-8 px-4 py-2 bg-gray-800 text-white rounded-lg"
					href={"/"}>
					<Typography thick={"bold"}>
						<span className="transition-all hover:translate-x-1">{`<`}</span>{" "}
						Back
					</Typography>
				</Link>
				<div className="max-lg:bg-opacity-90 gap-4 lg:gap-8 flex flex-col lg:flex-row w-full">
					<Image
						src={ProjectItem.thumbnail}
						alt={ProjectItem.title}
						width={600}
						height={401}
						className="w-full lg:w-[490px]  xl:w-[600px] rounded-2xl"
					/>
					<div className="flex flex-col w-full">
						<Typography
							as="h2"
							thick={"bolder"}
							size={"headline1"}>
							{ProjectItem.title}
						</Typography>
						<div className="flex w-full justify-between">
							<Typography>
								{ProjectItem.dateStart
									? `${formattedDateDDMMYYYY(ProjectItem.dateStart)} - ${
											ProjectItem.dateEnd
												? formattedDateDDMMYYYY(ProjectItem.dateEnd)
												: "Present"
									  }`
									: "unknown time"}
							</Typography>
							<Typography>
								{ProjectItem.category == "WEBSITE" ? (
									<Image
										src={webIcon}
										alt="web-icon"
										width={28}
										height={28}
									/>
								) : (
									"BOT"
								)}
							</Typography>
						</div>
						<div className="flex flex-col gap-2">
							<Typography
								size={"subheading2"}
								thick={"bold"}>
								Tech stack
							</Typography>
							<div className="flex gap-2 flex-wrap">
								{ProjectItem.techStack.map((tech, index) => (
									<Typography
										key={index}
										className="px-3 py-1 gradient-primary text-white rounded-lg">
										{tech}
									</Typography>
								))}
							</div>
						</div>
						<div>
							<Typography
								size={"subheading2"}
								thick={"bold"}>
								Description
							</Typography>
							<Typography>{ProjectItem.description}</Typography>
						</div>
						<div className="flex flex-col lg:flex-row flex-wrap gap-6 mt-8 lg:mt-auto mb-3">
							<div className="flex max-lg:flex-col max-xl:lg:justify-between gap-6 mt-8 xl:mt-auto mb-3">
								{ProjectItem.links?.demo && (
									<Link
										className="flex gap-2 border max-sm:w-full bg-slate-50 border-gray-400 px-6 py-3 hover:bg-slate-200 rounded-lg"
										href={ProjectItem.links.demo}>
										<Typography className="tracking-wide">DEMO</Typography>
										<Image
											src={arrowUpRight}
											alt="arrow direct"
											width={24}
											height={24}
										/>
									</Link>
								)}
								{ProjectItem.links?.repository && (
									<Link
										className="flex gap-2 border max-sm:w-full bg-slate-50 border-gray-400 px-6 py-3 hover:bg-slate-200 rounded-lg"
										href={ProjectItem.links.repository}>
										<Image
											src={repoIcon}
											alt="repo icon"
											width={24}
											height={24}
										/>
										<Typography className="tracking-wide">REPO</Typography>
									</Link>
								)}

								{ProjectItem.links?.collaborators && (
									<Link
										className="flex gap-2 border max-sm:w-full bg-slate-50 border-gray-400 px-6 py-3 hover:bg-slate-200 rounded-lg"
										href={ProjectItem.links.collaborators}>
										<Image
											src={partnerIcon}
											alt="partner icon"
											width={24}
											height={24}
										/>
										<Typography className=" tracking-wide">
											COLLABORATORS
										</Typography>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

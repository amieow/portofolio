"use client";
import Typography from "@/component/atoms/ui/typography";
import PROJECT_SHOWCASE from "@/contents/Projects";
import { formattedDateDDMMYYYY } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import webIcon from "@/public/images/icon/website-logo.svg";
import partnerIcon from "@/public/images/icon/partner-icon.svg";
import repoIcon from "@/public/images/icon/repository-icon.svg";
import arrowUpRight from "@/public/images/icon/arrow-up-right.svg";
import packages from "@/public/images/icon/package-icon.svg";
import Home from "./home";
import Reveal from "@/component/molecules/Reveal";
import ImageSwipper from "./imageSwipper";

const LinkButton = ({
	children,
	links,
	icon,
	alt,
	delay = 0,
}: {
	children: React.ReactNode;
	links: string;
	alt: string;
	icon: StaticImageData;
	delay?: number;
}) => {
	return (
		<Reveal delay={delay}>
			<Link
				className="flex gap-2 border blink-button max-sm:w-full bg-slate-100 border-gray-400 px-6 py-3 hover:bg-slate-200 rounded-lg"
				href={links}>
				<Image
					src={icon}
					alt={alt}
					width={24}
					height={24}
				/>
				<Typography className="tracking-wide">{children}</Typography>
			</Link>
		</Reveal>
	);
};

export default function Page() {
	const params = useSearchParams();
	const projectId = Number(params.get("project-key"));
	const backreference = params.get("redirect") || "";
	const isProjectId = projectId >= 0 && projectId < PROJECT_SHOWCASE.length;
	if (params.get("project-key") == undefined) {
		return <Home />;
	}
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
			className="flex flex-col container pb-20 relative pt-36 max-lg:pb-6 rounded-3xl">
			<div className="flex flex-col max-lg:pt-14 max-lg:pb-6 py-8 xl:p-8 rounded-3xl">
				<Link
					className="absolute top-28 left-8 px-4 py-2 bg-gray-800 text-white rounded-lg"
					href={backreference || "/"}>
					<Typography thick={"bold"}>
						<span className="transition-all hover:translate-x-1">{`<`}</span>{" "}
						Back
					</Typography>
				</Link>
				<div className="max-lg:bg-opacity-90 gap-4 lg:gap-8 flex flex-col lg:flex-row w-full">
					<ImageSwipper ProjectItem={ProjectItem} />
					<div className="flex flex-col w-full">
						<Reveal side="left">
							<Typography
								as="h2"
								thick={"bolder"}
								size={"headline1"}>
								{ProjectItem.title}
							</Typography>
						</Reveal>
						<div className="flex w-full justify-between">
							<Reveal
								side="left"
								delay={0.1}>
								<Typography>
									{ProjectItem.dateStart
										? `${formattedDateDDMMYYYY(ProjectItem.dateStart)} - ${
												ProjectItem.dateEnd
													? formattedDateDDMMYYYY(ProjectItem.dateEnd)
													: "Present"
										  }`
										: " "}
								</Typography>
							</Reveal>
							<Reveal
								side="right"
								delay={0.1}>
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
							</Reveal>
						</div>
						<div className="flex flex-col gap-2">
							<Reveal side="left">
								<Typography
									size={"subheading2"}
									thick={"bold"}>
									Tech stack
								</Typography>
							</Reveal>
							<div className="flex gap-2 flex-wrap">
								{ProjectItem.techStack.map((tech, index) => (
									<Reveal
										key={index}
										side="left"
										delay={index * 0.3}>
										<Typography
											key={index}
											className="px-3 py-1 gradient-primary text-white rounded-lg">
											{tech}
										</Typography>
									</Reveal>
								))}
							</div>
						</div>
						<div className="mt-5">
							<Reveal side="left">
								<Typography
									size={"subheading2"}
									className=" mb-2"
									thick={"bold"}>
									Description
								</Typography>
							</Reveal>
							<Reveal
								side="left"
								delay={0.1}>
								<Typography className="whitespace-pre-wrap">
									{"\t\t" + ProjectItem.description}
								</Typography>
							</Reveal>
						</div>
						<div className="flex max-sm:flex-grow flex-col lg:flex-row flex-wrap gap-6 mt-8 mb-3">
							{ProjectItem.links?.demo && (
								<LinkButton
									links={ProjectItem.links.demo}
									alt="demo icon"
									icon={arrowUpRight}
									delay={0.2}>
									DEMO
								</LinkButton>
							)}

							{ProjectItem.links?.repository && (
								<LinkButton
									links={ProjectItem.links.repository}
									alt="repo icon"
									icon={repoIcon}
									delay={0.4}>
									REPO
								</LinkButton>
							)}

							{ProjectItem.links?.collaborators && (
								<LinkButton
									links={ProjectItem.links.collaborators}
									alt="partner icon"
									icon={partnerIcon}
									delay={0.6}>
									COLLABORATORS
								</LinkButton>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between">
				{projectId - 1 >= 0 ? (
					<Link
						className="px-4 py-2 gap-2 bg-gray-200 hover:bg-gray-400 transition-all flex items-center rounded-lg"
						href={{
							pathname: "/project",
							query: {
								"project-key": projectId - 1,
							},
						}}>
						<Typography thick={"bold"}>{`< Previous`}</Typography>
					</Link>
				) : (
					<div></div>
				)}
				<Link
					className="px-6 py-3 flex gap-2 bg-gray-200 hover:bg-gray-400 transition-all rounded-lg"
					href={{
						pathname: "/project",
					}}>
					<Image
						src={packages}
						alt="package icon"
						width={24}
						height={24}
					/>
					<Typography
						className="max-[470px]:hidden"
						thick={"bold"}>
						{" "}
						All Project
					</Typography>
				</Link>
				{projectId + 1 < PROJECT_SHOWCASE.length ? (
					<Link
						className="px-4 py-2 gap-2 bg-gray-200 hover:bg-gray-400 transition-all flex rounded-lg items-center"
						href={{
							pathname: "/project",
							query: {
								"project-key": projectId + 1,
							},
						}}>
						<Typography thick={"bold"}>{`Next >`}</Typography>
					</Link>
				) : (
					<div></div>
				)}
			</div>
		</section>
	);
}

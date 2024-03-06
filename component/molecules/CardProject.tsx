"use client";
import { ProjectTypes } from "@/lib/types/project.types";
import React, { useEffect } from "react";
import Typography from "../atoms/ui/typography";
import Image from "next/image";
import webIcon from "@/public/images/icon/website-logo.svg";
import partnerIcon from "@/public/images/icon/partner-icon.svg";
import repoIcon from "@/public/images/icon/repository-icon.svg";
import arrowUpRight from "@/public/images/icon/arrow-up-right.svg";
import clsx from "clsx";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogOverlay,
	AlertDialogPortal,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../atoms/ui/alert-dialog";
import { formattedDateDDMMYYYY } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
type CardProjectProps = ProjectTypes & React.ComponentPropsWithoutRef<"a">;

export default function CardProject({
	thumbnail,
	imageDetail,
	title,
	description,
	shortDescription,
	colaborator,
	links,
	dateStart,
	dateEnd,
	category,
	techStack,
	index,
	isColaborating,
	className,
	...otherProps
}: CardProjectProps & { index: number }) {
	const params = useSearchParams();
	const isProjectId = params.get("project-key") == index.toString();
	const [open, setOpen] = React.useState(false);

	const ProjectItem: ProjectTypes = {
		thumbnail,
		title,
		imageDetail,
		description,
		shortDescription,
		colaborator,
		links,
		dateStart,
		category,
		techStack,
		isColaborating,
		dateEnd,
	};
	useEffect(() => {
		if (isProjectId) {
			setOpen(true);
		}
	}, [isProjectId]);

	// Gunakan objek 'project' sesuai kebutuhan Anda dalam komponen ini

	return (
		<AlertDialog open={open}>
			<AlertDialogTrigger asChild>
				<Link
					href={{
						pathname: "/",
						query: {
							"project-key": index.toString(),
						},
					}}
					className={clsx(
						"w-full sm:w-1/2 md:w-96 lg:w-1/3 relative shadow-xl p-1 rounded-xl",
						className,
					)}
					{...otherProps}>
					<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
						<div
							onClick={() => setOpen((prev) => !prev)}
							className="relative group w-fit h-fit overflow-hidden">
							<Image
								className=" transition group-hover:cursor-pointer w-full h-fit group-hover:scale-110 object-cover object-center"
								src={ProjectItem.thumbnail}
								alt="blog"
								width={400}
								height={100}
								style={{ transformOrigin: "center" }}
							/>
						</div>
						<div className="px-4 py-2 bg-indigo-100 shadow-xl dark:bg-tertiary">
							<Typography
								as="h3"
								onClick={() => setOpen((prev) => !prev)}
								className=" text-lg font-medium mb-3 hover:text-blue-500 hover:underline hover:cursor-pointer">
								{ProjectItem.title}
							</Typography>
							<p className="leading-relaxed mb-3">
								{ProjectItem.shortDescription}
							</p>
							{/* menu bawah */}
							<div className="flex items-center flex-wrap"></div>
						</div>
					</div>
				</Link>
			</AlertDialogTrigger>
			<AlertDialogPortal>
				<AlertDialogOverlay onClick={() => setOpen(false)} />
				<AlertDialogContent className=" bg-transparent p-3 sm:p-3 lg:px-6 border-none">
					<div className="bg-white max-lg:overflow-y-scroll flex flex-col relative max-lg:pt-14 max-lg:pb-6 p-8 rounded-3xl">
						<AlertDialogCancel
							onClick={() => setOpen(false)}
							className="text-black max-lg:bg-black max-lg:text-white  text-xl bg-transparent absolute top-5 right-5 px-4">
							x
						</AlertDialogCancel>
						<div className="bg-white max-lg:bg-opacity-90 gap-4 lg:gap-8 flex flex-col lg:flex-row w-full">
							<Image
								src={ProjectItem.thumbnail}
								alt={ProjectItem.title}
								width={600}
								height={401}
								className="w-full lg:w-[600px] rounded-2xl"
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
									<div className="flex flex-col max-lg:hidden flex-wrap gap-6 mt-8 lg:mt-auto mb-3">
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
									<AlertDialog>
										<AlertDialogTrigger>
											<Typography className="flex gap-2 items-center w-full lg:hidden border max-sm:w-full bg-slate-50 border-gray-400 px-6 py-3 hover:bg-slate-200 rounded-lg">
												LInks
											</Typography>
										</AlertDialogTrigger>
										<AlertDialogContent className="rounded-3xl px-4 py-2">
											<div className="flex flex-col lg:hidden flex-wrap gap-6 mt-8 lg:mt-auto mb-3">
												{ProjectItem.links?.demo && (
													<Link
														className="flex gap-2 border max-sm:w-full bg-slate-50 border-gray-400 px-6 py-3 hover:bg-slate-200 rounded-lg"
														href={ProjectItem.links.demo}>
														<Typography className="tracking-wide">
															DEMO
														</Typography>
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
														<Typography className="tracking-wide">
															REPO
														</Typography>
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
										</AlertDialogContent>
									</AlertDialog>
								</div>
							</div>
						</div>
					</div>
				</AlertDialogContent>
			</AlertDialogPortal>
		</AlertDialog>
	);
}

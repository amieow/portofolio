"use client";
import { ProjectTypes } from "@/lib/types/project.types";
import React, { useEffect } from "react";
import Typography from "../atoms/ui/typography";
import Image from "next/image";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogOverlay,
	AlertDialogPortal,
	AlertDialogTrigger,
} from "../atoms/ui/alert-dialog";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ModalProject from "./ModalProject";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
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
	isBig,
	...otherProps
}: CardProjectProps & { index: number; isBig?: boolean }) {
	const params = useSearchParams();
	const isProjectId = params.get("project-key") == index.toString();
	const [open, setOpen] = React.useState(false);
	const isMobile = useMediaQuery({ query: "(min-width: 1280px)" });
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
		if (isProjectId && !isMobile) {
			setOpen(true);
		}
	}, [isProjectId, isMobile]);

	// Gunakan objek 'project' sesuai kebutuhan Anda dalam komponen ini

	return (
		<AlertDialog open={open}>
			<AlertDialogTrigger asChild>
				<Link
					href={{
						pathname: "/project",
						query: {
							"project-key": index.toString(),
						},
					}}
					className={clsx(
						"w-full sm:w-[46%] lg:w-[30%] relative shadow-xl p-3 rounded-xl",
						className,
					)}
					{...otherProps}>
					<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
						<div
							onClick={() => isMobile && setOpen((prev) => !prev)}
							className={cn("relative group w-full h-[200px] overflow-hidden", {
								"h-[300px]": isBig,
							})}>
							<Image
								className=" transition group-hover:cursor-pointer w-full h-fit group-hover:scale-110 object-cover object-center"
								src={
									ProjectItem.thumbnail.staticImage || ProjectItem.thumbnail.src
								}
								alt="blog"
								fill
								style={{ transformOrigin: "center" }}
							/>
						</div>
						<div className="px-4 py-2 bg-indigo-100 shadow-xl dark:bg-tertiary">
							<Reveal>
								<Typography
									as="h3"
									onClick={() => isMobile && setOpen((prev) => !prev)}
									className=" text-lg font-medium mb-3 hover:text-blue-500 hover:underline hover:cursor-pointer">
									{ProjectItem.title}
								</Typography>
							</Reveal>
							<Reveal>
								<p className="leading-relaxed mb-3">
									{ProjectItem.shortDescription}
								</p>
							</Reveal>
							{/* menu bawah */}
							<div className="flex items-center flex-wrap"></div>
						</div>
					</div>
				</Link>
			</AlertDialogTrigger>
			<AlertDialogPortal>
				<AlertDialogOverlay onClick={() => setOpen(false)} />
				<AlertDialogContent className=" p-3 sm:p-3 lg:px-6 bg-transparent border-none">
					{/* <ModalProject
						setOpen={setOpen}
						ProjectItem={ProjectItem}
					/> */}
				</AlertDialogContent>
			</AlertDialogPortal>
		</AlertDialog>
	);
}

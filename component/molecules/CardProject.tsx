"use client";
import { ProjectTypes } from "@/lib/types/project.types";
import React from "react";
import Typography from "../atoms/ui/typography";
import Image from "next/image";
import clsx from "clsx";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../atoms/ui/alert-dialog";
type CardProjectProps = ProjectTypes & React.ComponentPropsWithoutRef<"div">;

export default function CardProject({
	image,
	title,
	description,
	shortDescription,
	colaborator,
	links,
	dateStart,
	category,
	techStack,
	isColaborating,
	className,
	...otherProps
}: CardProjectProps) {
	const [open, setOpen] = React.useState(false);
	const ProjectItem: ProjectTypes = {
		image,
		title,
		description,
		shortDescription,
		colaborator,
		links,
		dateStart,
		category,
		techStack,
		isColaborating,
	};

	// Gunakan objek 'project' sesuai kebutuhan Anda dalam komponen ini

	return (
		<AlertDialog open={open}>
			<AlertDialogTrigger
				onClick={() => setOpen((prev) => !prev)}
				asChild>
				<div
					{...otherProps}
					className={clsx("w-full md:w-96 relative", className)}>
					<div className="h-full border-2 bg-tertiary border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
						<div className="relative">
							<Image
								className="lg:h-56 md:h-36 w-full object-cover object-center"
								src={ProjectItem.image}
								alt="blog"
								width={721}
								height={401}
							/>
						</div>
						<div className="p-2 bg-tertiary">
							<Typography
								as="h3"
								className=" text-lg font-medium mb-3">
								{ProjectItem.title}
							</Typography>
							<p className="leading-relaxed mb-3">
								{ProjectItem.shortDescription}
							</p>
							{/* menu bawah */}
							<div className="flex items-center flex-wrap"></div>
						</div>
					</div>
				</div>
			</AlertDialogTrigger>
			<AlertDialogContent onFocusOutside={() => setOpen(false)}>
				<Image
					src={ProjectItem.image}
					alt={ProjectItem.title}
					width={721}
					height={401}
				/>
			</AlertDialogContent>
		</AlertDialog>
	);
}

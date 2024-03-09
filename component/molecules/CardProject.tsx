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
type CardProjectProps = {
	ProjectItem: ProjectTypes;
	index: number;
	isBig?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export default function CardProject({
	ProjectItem,
	className,
	isBig,
	index,
	...otherProps
}: CardProjectProps) {
	const params = useSearchParams();
	const isProjectId = params.get("project-key") == index.toString();
	const [open, setOpen] = React.useState(false);
	const isMobile = useMediaQuery({ query: "(min-width: 1280px)" });
	useEffect(() => {
		if (isProjectId && !isMobile) {
			setOpen(true);
		}
	}, [isProjectId, isMobile]);

	// Gunakan objek 'project' sesuai kebutuhan Anda dalam komponen ini

	return (
		<AlertDialog open={open}>
			<AlertDialogTrigger asChild>
				<div
					className={clsx(
						"w-full sm:w-[46%] lg:w-[30%] relative shadow-xl p-3 rounded-xl",
						className,
					)}
					{...otherProps}>
					<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
						<Link
							href={{
								pathname: `/project`,
								query: { "project-key": index.toString() },
							}}>
							<div
								onClick={() => isMobile && setOpen((prev) => !prev)}
								className={cn(
									"relative group w-full h-[200px] overflow-hidden",
									{
										"h-[300px]": isBig,
									},
								)}>
								<Image
									className=" transition group-hover:cursor-pointer w-full h-fit group-hover:scale-110 object-cover object-center"
									src={
										ProjectItem.thumbnail.staticImage ||
										ProjectItem.thumbnail.src
									}
									alt="blog"
									fill
									style={{ transformOrigin: "center" }}
								/>
							</div>
						</Link>
						<div className="px-4 py-2 bg-indigo-100 h-full shadow-xl dark:bg-tertiary">
							<Reveal>
								<Link
									href={{
										pathname: `/project`,
										query: { "project-key": index.toString() },
									}}>
									<Typography
										as="h3"
										onClick={() => isMobile && setOpen((prev) => !prev)}
										className=" text-lg font-medium mb-3 hover:text-blue-500 hover:underline hover:cursor-pointer">
										{ProjectItem.title}
									</Typography>
								</Link>
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
				</div>
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

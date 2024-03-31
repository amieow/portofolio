"use client";
import { ProjectTypes } from "@/lib/types/project.types";
import React from "react";
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
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import { Button } from "../atoms/ui/button";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
type CardProjectProps = {
	ProjectItem: ProjectTypes;
	index: number;
	isBig?: boolean;
	key?: string | number;
	path: string;
	className?: string;
};
export default function CardProject({
	ProjectItem,
	className,
	isBig,
	path,
	index,
	...otherProps
}: CardProjectProps) {
	const [open, setOpen] = React.useState(false);
	const isMobile = useMediaQuery({ maxWidth: 768 });
	// Gunakan objek 'project' sesuai kebutuhan Anda dalam komponen ini

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Reveal
					className={clsx(
						"w-full sm:w-[46%] flex lg:w-[30%] items-stretch relative rounded-xl",
						className,
					)}
					wannaOverflow={!isMobile}
					delay={index * 0.1}
					animation_gap="full"
					side={isMobile ? (index % 2 === 0 ? "left" : "right") : "bottom"}
					{...otherProps}>
					<div className="h-full flex flex-col shadow-xl p-3 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
						<Link
							href={{
								pathname: `/project`,
								query: {
									"project-key": index.toString(),
									redirect: path,
								},
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
						<div className="px-4 flex flex-col py-2 bg-indigo-100 h-full dark:bg-tertiary">
							<Reveal>
								<Link
									href={{
										pathname: `/project`,
										query: {
											"project-key": index.toString(),
											redirect: path,
										},
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
							<div className="flex mt-auto items-center gap-5 flex-wrap">
								<Button
									variant={"outline"}
									className="ring-1 hover:bg-blue-500 hover:text-white hover:ring-0"
									asChild>
									<Link
										href={{
											pathname: `/project`,
											query: {
												"project-key": index.toString(),
												redirect: path,
											},
										}}>
										More Detail
									</Link>
								</Button>
								{ProjectItem.links?.demo && (
									<Button className="gap-1 bg-indigo-500 hover:bg-indigo-600	">
										<Link
											className="flex gap-1 items-center"
											href={ProjectItem.links?.demo}>
											visit <ArrowUpRight size={16} />
										</Link>
									</Button>
								)}
							</div>
						</div>
					</div>
				</Reveal>
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

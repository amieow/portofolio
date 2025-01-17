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
import TransitionLink from "./TransitisionLink";
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
	const isMobile = useMediaQuery({ maxWidth: 769 });
	// Gunakan objek 'project' sesuai kebutuhan Anda dalam komponen ini

	return (
		<Reveal
			className={clsx(
				"w-full mx-auto flex lg:w-[30%] relative rounded-xl max-w-[500px] md:max-h-[400px] items-stretch",
				className,
			)}
			width="100%"
			wannaOverflow={!isMobile}
			delay={index * 0.1}
			animation_gap="full"
			side={isMobile ? (index % 2 === 0 ? "left" : "right") : "bottom"}
			{...otherProps}>
			<div className="flex flex-col shadow-xl p-3 md:h-full border-2 border-gray-200 border-opacity-60 rounded-lg ">
				<div
					onClick={() => isMobile && setOpen((prev) => !prev)}
					className={cn(
						"relative group w-full h-[250px] sm:h-[300px] overflow-hidden",
					)}>
					<Image
						className=" transition group-hover:cursor-pointer group-hover:scale-110 object-cover object-center"
						src={
							ProjectItem.thumbnail.staticImage ||
							ProjectItem.thumbnail.src
						}
						alt="blog"
						fill
						style={{ transformOrigin: "center" }}
					/>
				</div>
				<div className="px-4 flex h-full flex-col gap-3 py-2 bg-indigo-100  dark:bg-tertiary">
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
					<div className="flex items-center gap-5 flex-wrap mt-auto">
						{ProjectItem.links?.repository && (
							<Button
								variant={"outline"}
								className="ring-1 hover:bg-blue-500 hover:text-white hover:ring-0"
								asChild>
								<Link href={ProjectItem.links.repository}>
									Visit
									<ArrowUpRight size={16} />
								</Link>
							</Button>)
						}
					</div>
				</div>
			</div>
		</Reveal>
	);
}

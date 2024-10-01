import { ProjectTypes } from "@/lib/types/project.types";
import React from "react";
import { AlertDialogCancel } from "../atoms/ui/alert-dialog";
import Link from "next/link";
import Image from "next/image";
import Typography from "../atoms/ui/typography";
import { formattedDateDDMMYYYY } from "@/lib/utils";
import { ImageViewer } from "./image-viewer";
import { Images_decoration } from "@/contents/images";
export default function ModalProject({
	ProjectItem,
	setOpen,
}: {
	ProjectItem: ProjectTypes;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<div className="bg-white flex flex-col relative max-lg:pt-14 max-lg:pb-6 p-8 rounded-3xl">
			<Link
				className="text-black  text-xl bg-transparent absolute top-5 right-5 px-4"
				href={"/"}>
				<AlertDialogCancel
					onClick={() => setOpen(false)}
					className=" max-lg:text-white">
					x
				</AlertDialogCancel>
			</Link>

			<div className="bg-white group max-lg:bg-opacity-90 overflow-hidden gap-4 lg:gap-8 flex flex-col lg:flex-row w-full">
				<ImageViewer
					saus={[{ src: ProjectItem.thumbnail.src, alt: ProjectItem.title }]}>
					<Image
						src={ProjectItem.thumbnail.staticImage || ProjectItem.thumbnail.src}
						alt={ProjectItem.title}
						width={600}
						height={401}
						className="w-full transition-transform transform-gpu lg:w-[600px] rounded-2xl"
					/>
				</ImageViewer>
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
									src={Images_decoration.webIcon}
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
						<div className="flex max-lg:hidden gap-6 mt-8 lg:mt-auto mb-3">
							{ProjectItem.links?.demo && (
								<Link
									className="flex gap-2 border max-sm:w-full bg-slate-50 border-gray-400 px-6 py-3 hover:bg-slate-200 rounded-lg"
									href={ProjectItem.links.demo}>
									<Typography className="tracking-wide">DEMO</Typography>
									<Image
										src={Images_decoration.arrowUpRight}
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
										src={Images_decoration.repoIcon}
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
										src={Images_decoration.partnerIcon}
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
	);
}

import React from "react";
import Typography from "../atoms/ui/typography";
import Image from "next/image";
import Link from "next/link";
import allMySertif from "@/contents/Sertificate";
import { cn } from "@/lib/utils";
import Zoom from 'react-medium-image-zoom'
//I've been hooked on Computer Science since I was 12, with a particular interest in botting. and when I was 15 i started seriously learning how to code in field of botting. after that when i 16-year-old i started learning web development.
export default function SertificateSection() {
	return (
		<section
			id="about"
			className="w-full flex flex-col overflow-x-hidden gap-10 bg-indigo-50 pb-20">
			<Typography
				as="h2"
				size={"display"}
				thick={"bold"}
				font={"poppins"}
				className="text-center w-full "
				color="primary">
				My Sertificate
			</Typography>
			<div className="container relative grid grid-cols-1 md:grid-cols-4 gap-10">
				{allMySertif.map((v, index) => {
					console.log(allMySertif.length % 2 != 0 && index === allMySertif.length - 1);
					return (
						<div
							className={cn("group col-span-2 transition-all", {
								"bg-black md:col-start-2 ": allMySertif.length % 2 != 0 && index === allMySertif.length - 1,
							})}
							key={index}>
							{v.link ? (
								<Link className="py-2 bg-indigo-200 px-2 flex flex-col gap-2 overflow-hidden" href={v.link}>
									<Image draggable={false} className="w-full transition-all" alt={v.name} src={v.image} />
									<Typography font={"poppins"} thick={"bold"} size={"subheading2"}>{v.name}</Typography>
								</Link>
							) : (
								<div className="bg-indigo-200 px-2 py-2 flex flex-col gap-2 overflow-hidden">
									<Zoom classDialog="">
										<Image draggable={false} className="w-full transition-all max-h-[420px]" alt={v.name} src={v.image} />
									</Zoom>
									<Typography font={"poppins"} thick={"bold"} size={"subheading2"}>{v.name}</Typography>
								</div>
							)}
						</div>
					)
				})}
			</div>
		</section>
	);
}

"use client";
import React from "react";
import Typography from "../atoms/ui/typography";
import SERVICES_MENU from "@/contents/services";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import Reveal from "../molecules/Reveal";

export default function ServicesSection() {
	const searchParam = useSearchParams();
	const isforfun = searchParam.get("ref") == "amieow";
	const SERVICES = isforfun
		? SERVICES_MENU
		: SERVICES_MENU.filter((service) => !service.name.includes("game"));

	return (
		<section
			className="w-full flex flex-col gap-3 pt-20 bg-indigo-50 pb-36"
			id="services">
			<Typography
				as="h2"
				size={"display"}
				thick={"bold"}
				font={"montserrat"}
				className="text-center w-full "
				color="primary">
				Services 🔧
			</Typography>
			<div className="flex relative flex-col gap-20 pt-10 container">
				{SERVICES.map((service, index) => (
					<div
						key={index}
						className={cn("flex max-md:flex-col gap-10 justify-around group", {
							"flex-row-reverse": index % 2 === 1,
						})}>
						<Reveal
							delay={0.1 + index / 10}
							wannaOverflow
							side={index % 2 === 1 ? "right" : "left"}>
							<div className="flex justify-center">
								<Image
									src={service.thumbnail.staticImage || service.thumbnail.src}
									alt={service.name}
									width={300}
									height={300}
									className={cn(
										"rounded-3xl hover:scale-110 transition-all duration-500 hover:rotate-3",
										"group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-2xl",
										{
											"hover:-rotate-3 group-hover:-rotate-3 group-hover:shadow-2xl":
												index % 2 === 1,
										},
									)}
								/>
							</div>
						</Reveal>
						<Reveal
							className="h-fit"
							delay={0.2 + index / 10}
							side={index % 2 === 1 ? "left" : "right"}>
							<div className="flex flex-col gap-4 px-10 rounded-3xl h-fit bg-indigo-200/50 py-6">
								<Typography
									key={index}
									as="h3"
									size={"paragraf1"}
									thick={"bold"}
									font={"poppins"}
									className=" w-full text-gray-700">
									{service.name}
								</Typography>
								<Typography className="whitespace-pre-line max-w-xl">
									{service.description}
								</Typography>
							</div>
						</Reveal>
					</div>
				))}
			</div>
		</section>
	);
}

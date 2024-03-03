"use client";
import TECH_STACK_MENU from "@/contents/TechStack";
import Image from "next/image";
import { useEffect } from "react";
import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/component/atoms/ui/tooltip";

import "@splidejs/splide/dist/css/splide.min.css";
import Typography from "../atoms/ui/typography";

const InfiniteScrollingImages = () => {
	useEffect(() => {
		const splide = new Splide(".splide", {
			type: "loop",
			drag: "free",
			perPage: 20,

			autoScroll: {
				speed: 2,
			},
			breakpoints: {
				2200: {
					perPage: 15,
				},
				1800: {
					perPage: 10,
				},
				1500: {
					perPage: 8,
				},
				1100: {
					perPage: 5,
				},
				900: {
					perPage: 4,
				},
				600: {
					perPage: 3,
				},
			},
			arrows: false,
			pagination: false,
			focus: "center",
			direction: "ltr",
		});

		splide.mount({ AutoScroll });

		// Membersihkan instance Splide saat komponen unmount
		return () => {
			splide.destroy();
		};
	}, []); // Menjalankan efek hanya sekali setelah komponen dipasang

	return (
		<div className="splide w-full z-0">
			<div className="splide__track ">
				<ul className="splide__list">
					{/* Buat konten gambar di sini */}
					{TECH_STACK_MENU.map((item, index) => (
						<TooltipProvider
							delayDuration={200}
							key={index}>
							<Tooltip key={index}>
								<TooltipTrigger asChild>
									<li
										key={index}
										className="splide__slide inline-block p-2 mx-5">
										<Image
											src={item.img}
											alt={item.name}
											about={item.name}
											className="mx-auto my-auto"
											width={75}
											height={75}
										/>
									</li>
								</TooltipTrigger>
								<TooltipContent
									side="top"
									sideOffset={4}>
									<Typography>{item.name}</Typography>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					))}
				</ul>
			</div>
		</div>
	);
};

export default InfiniteScrollingImages;

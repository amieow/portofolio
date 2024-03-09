"use client";
import { ProjectTypes } from "@/lib/types/project.types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const ReactViewer = dynamic(() => import("react-viewer"), { ssr: false });
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import dynamic from "next/dynamic";
export default function ImageSwipper({
	ProjectItem,
}: {
	ProjectItem: ProjectTypes;
}) {
	const [open, setOpen] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(0);
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				className="max-h-[400px] md:sticky md:top-0 w-full h-[300px] sm:h-[400px] lg:w-[490px] xl:w-[600px]"
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}>
				<SwiperSlide className="relative overflow-hidden w-full h-[300px] sm:h-[400px] lg:w-[490px] xl:w-[600px] rounded-3xl">
					<Image
						onClick={() => {
							setOpen(true);
							setActiveIndex(0);
						}}
						src={ProjectItem.thumbnail.staticImage || ProjectItem.thumbnail.src}
						alt={ProjectItem.title}
						fill
						style={{
							backgroundColor: ProjectItem.style?.backgroundColor || "000000",
						}}
						className={cn(
							"rounded-3xl object-cover cursor-pointer hover:scale-110 transition-transform transform-gpu",
							{
								"object-contain": ProjectItem.style?.img == "contain",
							},
						)}
					/>
				</SwiperSlide>
				{ProjectItem.imageDetail?.map((image, index) => (
					<SwiperSlide
						key={index}
						className="relative w-full overflow-hidden h-[300px] sm:h-[400px] lg:w-[490px] xl:w-[600px] rounded-3xl">
						<Image
							key={index}
							onClick={() => {
								setOpen(true);
								setActiveIndex(index + 1);
							}}
							src={image.staticImage || image.src}
							alt={ProjectItem.title}
							fill
							style={{
								backgroundColor: ProjectItem.style?.backgroundColor || "000000",
							}}
							className={cn(
								"rounded-3xl object-cover cursor-pointer hover:scale-110 transition-transform transform-gpu",
								{
									"object-contain": ProjectItem.style?.img == "contain",
								},
							)}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<ReactViewer
				visible={open}
				onClose={() => setOpen(false)}
				activeIndex={activeIndex}
				images={[
					{ src: ProjectItem.thumbnail.src, alt: ProjectItem.title },
					...(ProjectItem.imageDetail
						? ProjectItem.imageDetail.map((image) => ({
								src: image.src,
								alt: ProjectItem.title,
						  }))
						: []),
				]}
			/>
		</>
	);
}

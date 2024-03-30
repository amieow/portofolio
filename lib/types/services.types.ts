import { StaticImageData } from "next/image";

export type SERVICES_TYPE = {
	name: string;
	rangePrice: {
		start: number;
		max?: number;
	};
	style?: {
		img: "cover" | "contain";
		backgroundColor?: string;
	};
	description: string;
	thumbnail: {
		src: string;
		staticImage?: StaticImageData;
	};
	techStack: string[];
	link?: {
		[key: string]: string;
	};
};

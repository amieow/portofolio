import { StaticImageData } from "next/image";
import { UserCollaborator } from "./userCollaborator.types";

export type ProjectTypes = {
	thumbnail: {
		src: string;
		staticImage?: StaticImageData;
	};
	title: string;
	description: string;
	shortDescription: string;
	isColaborating: boolean;
	imageDetail?: {
		src: string;
		staticImage: StaticImageData;
	}[];
	dateStart?: Date;
	dateEnd?: Date;
	category: "WEBSITE" | "BOT";
	techStack:
		| string[]
		| (
				| "Next.js"
				| "Typescript"
				| "Tailwind"
				| "React"
				| "express.js"
				| "lua"
				| "grammY"
				| "node.js"
		  )[];
	myRole?: string;
	colaborator?: UserCollaborator[];
	links?: {
		repository?: string;
		demo?: string;
		collaborators?: string;
	};
};

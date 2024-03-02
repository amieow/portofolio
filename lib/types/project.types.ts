import { UserCollaborator } from "./userCollaborator.types";

export type ProjectTypes = {
	image: string;
	title: string;
	description: string;
	shortDescription: string;
	colaborator?: UserCollaborator[];
	links?: {
		repository?: string;
		demo?: string;
	};
};

type roleCollaborator = "UI/UX Designer" | "Developer" | "Frontend" | "Backend";

export type UserCollaborator = {
	name: string;
	role: roleCollaborator;
	links?: string;
};

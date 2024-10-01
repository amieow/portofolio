import { StaticImageData } from "next/image";
import Images from "./images";
export type TypeSocialMedia = {
	username: string;
	icon: StaticImageData;
	link: string;
	color: string;
};
const SOCIAL_MEDIA: TypeSocialMedia[] = [
	{
		username: "amieow",
		icon: Images.github,
		link: "https://github.com/amieow",
		color: "#0f172a",
	},
	{
		username: "@amieow.env",
		icon: Images.instagram,
		link: "https://instagram.com/amieow_i/",
		color: "#d946ef",
	},
	{
		username: "amieow.dev",
		icon: Images.discord,
		link: "https://discordapp.com/users/740359797748137995",
		color: "#3b82f6",
	},
	{
		username: "@amieowdev",
		icon: Images.telegram,
		link: "https://t.me/amieowdev",
		color: "#38bdf8",
	},
];

export default SOCIAL_MEDIA;

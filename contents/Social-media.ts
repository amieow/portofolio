import github from "@/public/images/icon/github-icon.svg";
import instagram from "@/public/images/icon/instagram-icon.svg";
import discord from "@/public/images/icon/discord-icon.svg";
import telegram from "@/public/images/icon/telegram-icon.svg";
import { StaticImageData } from "next/image";
export type TypeSocialMedia = {
	username: string;
	icon: StaticImageData;
	link: string;
	color: string;
};
const SOCIAL_MEDIA: TypeSocialMedia[] = [
	{
		username: "amieow",
		icon: github,
		link: "https://github.com/amieow",
		color: "#0f172a",
	},
	{
		username: "@amieow.env",
		icon: instagram,
		link: "https://instagram.com/amieow_i/",
		color: "#d946ef",
	},
	{
		username: "amieow.dev",
		icon: discord,
		link: "https://discordapp.com/users/740359797748137995",
		color: "#3b82f6",
	},
	{
		username: "@amieowdev",
		icon: telegram,
		link: "https://t.me/amieowdev",
		color: "#38bdf8",
	},
];

export default SOCIAL_MEDIA;

import { SERVICES_TYPE } from "@/lib/types/services.types";
import botGrowtopia from "@/public/images/services/botting-growtopia.png";
import website from "@/public/images/services/website.svg";
import chatbot from "@/public/images/services/chat-bot.svg";
const SERVICES_MENU: SERVICES_TYPE[] = [
	{
		name: "botting game",
		rangePrice: { start: 200000 },
		description:
			"I specialize in crafting custom bots for the popular game Growtopia. Whether you need a bot for farming, trading, or any other in-game task, I've got you covered. I can tailor the bot to match your specific requirements and adapt it to integrate seamlessly with any application or documentation you prefer. ",
		thumbnail: botGrowtopia,
		techStack: ["lua"],
	},
	{
		name: "bot telegram",
		rangePrice: { start: 300000 },
		description:
			"I specialize in crafting custom bots for telegram. Whether you need a bot for trading, airdrop crypto, scraping or any other task, I've got you covered . I can help you create a bot that meets your specific requirements and adapt it to integrate seamlessly with any application or documentation you prefer. ",
		thumbnail: chatbot,
		techStack: ["grammy", "typescript"],
	},
	{
		name: "website",
		rangePrice: { start: 200000 },
		description:
			"I specialize in crafting website either frontend or backend for your project. Whether you need a website for Landing Page, E-Commerce, Personal Website ,or any other type of website. ",
		thumbnail: website,
		techStack: ["next.js", "tailwind", "react"],
	},
];
export default SERVICES_MENU;

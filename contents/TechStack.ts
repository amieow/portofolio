import { StaticImageData } from "next/image";
import Images from "./images";

interface TechMenu {
	img: StaticImageData;
	name: string;
}
const TECH_STACK_MENU: TechMenu[] = [
	{ img: Images.nextJs, name: "next.js" },
	{ img: Images.typescript, name: "typescript" },
	{ img: Images.react, name: "react js" },
	{ img: Images.tailwind, name: "tailwind-css" },
	{ img: Images.express, name: "express.js" },
	{ img: Images.lua, name: "lua" },
	{ img: Images.prisma, name: "prisma" },
	{ img: Images.zod, name: "zod" },
	{ img: Images.websocket, name: "websocket" },
	{ img: Images.mysql, name: "mysql" },
	{ img: Images.mongodb, name: "mongodb" },
	{ img: Images.jwt, name: "jwt" },
	{ img: Images.digitalOcean, name: "digital ocean" },
	{ img: Images.figma, name: "figma" },
	{ img: Images.grammY, name: "grammY telegram bot framework" },
	{ img: Images.azure, name: "azure" },
];

export default TECH_STACK_MENU;

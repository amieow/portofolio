import nextJs from "@/public/images/nextjs.svg";
import typescript from "@/public/images/typescript-icon.svg";
import react from "@/public/images/react.svg";
import tailwind from "@/public/images/tailwindcss.svg";
import express from "@/public/images/express-icon.svg";
import lua from "@/public/images/lua.svg";
import prisma from "@/public/images/prisma.svg";
import zod from "@/public/images/zod.svg";
import websocket from "@/public/images/websocket.svg";
import mysql from "@/public/images/mysql.svg";

import mongodb from "@/public/images/mongodb-icon.svg";
import jwt from "@/public/images/jwt-icon.svg";
import digitalOcean from "@/public/images/digital-ocean-icon.svg";
import figma from "@/public/images/figma.svg";
import grammY from "@/public/images/grammy.svg";
import azure from "@/public/images/microsoft-azure.svg";
import { StaticImageData } from "next/image";

interface TechMenu {
	img: StaticImageData;
	name: string;
}

const TECH_STACK_MENU: TechMenu[] = [
	{ img: nextJs, name: "next.js" },
	{ img: typescript, name: "typescript" },
	{ img: react, name: "react js" },
	{ img: tailwind, name: "tailwind-css" },
	{ img: express, name: "express.js" },
	{ img: lua, name: "lua" },
	{ img: prisma, name: "prisma" },
	{ img: zod, name: "zod" },
	{ img: websocket, name: "websocket" },
	{ img: mysql, name: "mysql" },
	{ img: mongodb, name: "mongodb" },
	{ img: jwt, name: "jwt" },
	{ img: digitalOcean, name: "digital ocean" },
	{ img: figma, name: "figma" },
	{ img: grammY, name: "grammY telegram bot framework" },
	{ img: azure, name: "azure" },
];

export default TECH_STACK_MENU;

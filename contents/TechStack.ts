import nextJs from "@/public/images/icon/nextjs.svg";
import typescript from "@/public/images/icon/typescript-icon.svg";
import react from "@/public/images/icon/react.svg";
import tailwind from "@/public/images/icon/tailwindcss.svg";
import express from "@/public/images/icon/express-icon.svg";
import lua from "@/public/images/icon/lua.svg";
import prisma from "@/public/images/icon/prisma.svg";
import zod from "@/public/images/icon/zod.svg";
import websocket from "@/public/images/icon/websocket.svg";
import mysql from "@/public/images/icon/mysql.svg";
import mongodb from "@/public/images/icon/mongodb-icon.svg";
import jwt from "@/public/images/icon/jwt-icon.svg";
import digitalOcean from "@/public/images/icon/digital-ocean-icon.svg";
import figma from "@/public/images/icon/figma.svg";
import grammY from "@/public/images/icon/grammY.svg";
import azure from "@/public/images/icon/microsoft-azure.svg";
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

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const formattedDateDDMMYYYY = (date: Date) =>
	`${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
		.toString()
		.padStart(2, "0")}-${date.getFullYear()}`;

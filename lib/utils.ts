import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
export function removeSlashAndHash(input: string): string {
	let result = "";
	for (let i = 0; i < input.length; i++) {
		// Mengabaikan karakter '/' dan '#'
		if (input[i] !== "/" && input[i] !== "#") {
			result += input[i];
		}
	}
	return result;
}

interface Target {
	pageTarget: string;
	sectionTarget: string;
}

export function parseTarget(input: string): Target {
	const target: Target = { pageTarget: "", sectionTarget: "" };

	if (input.startsWith("/")) {
		target.pageTarget = "/";
		target.sectionTarget = input.substring(2); // Mengambil bagian setelah '/#'
	} else {
		const parts = input.split("/");
		const lastPart = parts[parts.length - 1];

		if (lastPart.startsWith("#")) {
			// Jika bagian terakhir dimulai dengan tanda pagar (#), maka ini adalah section target
			target.sectionTarget = lastPart.substring(1);
			parts.pop(); // Hapus bagian terakhir dari array
		}

		target.pageTarget = parts.join("/"); // Gabungkan bagian-bagian yang tersisa untuk mendapatkan page target
	}

	return target;
}

export function formatRupiah(amount: number) {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(amount);
}

export const formattedDateDDMMYYYY = (date: Date) =>
	`${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
		.toString()
		.padStart(2, "0")}-${date.getFullYear()}`;

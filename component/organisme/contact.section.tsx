"use client";
import Typography from "../atoms/ui/typography";
import SOCIAL_MEDIA from "@/contents/Social-media";
import SocialMediaButton from "../molecules/SocialMediaButton";
import { Input } from "../atoms/ui/input";
import { Label } from "../atoms/ui/label";
import { Textarea } from "../atoms/ui/textarea";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../atoms/ui/button";
import Reveal from "../molecules/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Images from "@/contents/images";

export default function ContactSection() {
	const router = useRouter();
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [company, setCompany] = useState("");
	const [isIndividual, setIsIndividual] = useState(true);
	const buttons = [
		{ label: "An individual", isIndividual: true },
		{ label: "A company", isIndividual: false },
	];

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		let subject = "";
		let messageBody = "";

		if (isIndividual) {
			subject = name;
			messageBody = `Hi 👋! My name is ${name} and I represent A individual`;
		} else {
			subject = company;
			messageBody = `Hi 👋! My name is ${name} and I represent A company by the name of ${company}`;
		}

		const messages = `${messageBody}\n\n${message}`;
		router.push(
			`mailto:amieowkenzy@gmail.com?subject=${encodeURIComponent(
				subject,
			)}&body=${encodeURIComponent(messages)}`,
		);
	};

	return (
		<section
			className="bg-indigo-50 pt-20 pb-16 relative"
			id="contact">
			<div className="bg-indigo-200/50 max-w-7xl absolute w-2/3 -rotate-12 -top-2 right-1/4 translate-x-1/3 h-20 rounded-full blur-xl shadow-inner" />
			<Typography
				as="h2"
				size="display"
				thick="bold"
				font="montserrat"
				className="text-center w-full"
				color="primary">
				Contact 📞
			</Typography>
			<Typography
				size="paragraf1"
				className="text-center">
				Interseted? Feel free to contact me
			</Typography>
			<div className="container relative max-md:flex-col-reverse items-center justify-left flex pt-10 gap-10">
				<Reveal
					side="left"
					wannaOverflow>
					<div className="flex flex-col flex-wrap pt-10 gap-8 max-md:flex-row">
						<SocialMediaButton
							index={6}
							reverse
							iconOnly
							username="amieowkenzy@gmail.com"
							icon={Images.gmail}
							link="mailto:umaybeucanrun0butneverlol@gmail.com"
							color="#ca8a04"
						/>
						{SOCIAL_MEDIA.map((media, index) => (
							<SocialMediaButton
								reverse
								iconOnly
								key={index}
								{...media}
								index={index}
							/>
						))}
					</div>
				</Reveal>
				<span className="w-full h-1 bg-gray-500 md:hidden relative">
					<Typography className="absolute -translate-x-1/2 left-1/2 -top-3 px-4 bg-indigo-50">
						or
					</Typography>
				</span>
				<Reveal
					side="right"
					className="w-full sm:w-4/5 xl:w-1/2"
					wannaOverflow>
					<form
						onSubmit={handleSubmit}
						className={cn(
							"pt-10 p-10  transition-all bg-indigo-200 duration-300 rounded-2xl flex flex-col  border-2",
							{
								"to-indigo-200 from-violet-300 bg-gradient-to-t": !isIndividual,
								"bg-indigo-200": isIndividual,
							},
						)}>
						<Typography
							font={"poppins"}
							size={"subheading1"}
							className="text-gray-600 mb-5"
							thick={"bold"}>
							Contact Me
						</Typography>
						<div className="space-y-3 mb-5">
							<Label htmlFor="name">
								<Typography
									font={"poppins"}
									size={"paragraf1"}
									thick={"medium"}>
									Hi 👋! My name is...
								</Typography>
							</Label>
							<Input
								onChange={(e) => setName(e.target.value)}
								type="text"
								id="name"
								className="bg-indigo-100 focus-visible:ring-0"
								placeholder="Your name..."
							/>
						</div>
						<div className="space-y-2 mb-5">
							<Label htmlFor="subject">
								<Typography
									font={"poppins"}
									size={"paragraf1"}
									thick={"medium"}>
									and I represent...
								</Typography>
							</Label>
							<div className="flex border-4 rounded-lg overflow-hidden border-indigo-100 w-fit">
								{buttons.map((button, index) => (
									<Button
										key={index}
										variant="outline"
										onClick={() => setIsIndividual(button.isIndividual)}
										className={cn(
											"rounded-none ring-0 border-0 z-10 hover:text-white text-white hover:bg-transparent relative",
											{
												"text-black hover:text-black": !(
													isIndividual === button.isIndividual
												),
											},
										)}>
										{button.label}
										{!isIndividual === !button.isIndividual && (
											<motion.span
												layoutId="contact-tab"
												transition={{
													type: "spring",
													duration: 0.4,
													stiffness: 100,
													damping: 10,
													mass: 0.8,
												}}
												className="absolute inset-0 rounded-none -z-10 bg-gradient-to-r from-violet-400 to-indigo-400"
											/>
										)}
									</Button>
								))}
							</div>
						</div>
						<AnimatePresence>
							{!isIndividual && (
								<motion.div
									initial={{ opacity: 0.3, height: 0, y: "-100%" }}
									animate={{ opacity: 1, height: "auto", y: 0 }}
									transition={{ duration: 0.5 }}
									exit={{ opacity: 0, height: 0, y: "-100%" }}
									className="space-y-2">
									<Label htmlFor="company">
										<Typography
											font={"poppins"}
											size={"paragraf1"}
											thick={"medium"}>
											by the name of...
										</Typography>
									</Label>
									<Input
										required
										type="text"
										id="company"
										onChange={(e) => setCompany(e.target.value)}
										className="bg-indigo-100 focus-visible:ring-0"
										placeholder="Your company name..."
									/>
								</motion.div>
							)}
						</AnimatePresence>
						<div
							className={cn("space-y-2 mb-5 transition-all", {
								"my-5": !isIndividual,
							})}>
							<Label htmlFor="messages">
								<Typography
									font={"poppins"}
									size={"paragraf1"}
									thick={"medium"}>
									Messages
								</Typography>
							</Label>
							<Textarea
								required
								onChange={(e) => setMessage(e.target.value)}
								id="messages"
								className="bg-indigo-100 focus-visible:ring-0"
								placeholder="type your message here"
							/>
						</div>
						<Button
							className="bg-indigo-400 hover:bg-indigo-600"
							type="submit">
							Send
						</Button>
					</form>
				</Reveal>
			</div>
		</section>
	);
}

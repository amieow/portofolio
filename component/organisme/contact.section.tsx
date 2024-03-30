"use client";
import Typography from "../atoms/ui/typography";
import SOCIAL_MEDIA from "@/contents/Social-media";
import SocialMediaButton from "../molecules/SocialMediaButton";
import { Input } from "../atoms/ui/input";
import { Label } from "../atoms/ui/label";
import { Textarea } from "../atoms/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../atoms/ui/button";
import gmail from "@/public/images/icon/gmail-icon.svg";
import Reveal from "../molecules/Reveal";
export default function ContactSection() {
	const router = useRouter();
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	return (
		<section
			className="bg-indigo-50 pt-20 pb-16 relative"
			id="contact">
			<div className="bg-indigo-200/50 absolute w-1/2 -rotate-12 -top-10 -right-20 h-20 rounded-full blur-xl shadow-inner" />
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
			<div className="container relative max-md:flex-col-reverse items-center justify-center flex pt-10 gap-10">
				<Reveal
					side="left"
					wannaOverflow>
					<div className="flex flex-col flex-wrap pt-10 gap-8 max-md:flex-row">
						<SocialMediaButton
							index={6}
							reverse
							iconOnly
							username="amieowkenzy@gmail.com"
							icon={gmail}
							link="mailto:umaybeucanrun0butneverlol@gmail.com"
							color="#0f172a"
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
						onSubmit={(e) => {
							e.preventDefault();
							setEmail("");
							setSubject("");
							setMessage("");
							router.push(
								`mailto:amieowkenzy@gmail.com?subject=${subject}&body=${message}`,
							);
						}}
						className="pt-10 p-10 gap-5 flex flex-col  border-2">
						<div className="space-y-2">
							<Label htmlFor="email">
								<Typography
									font={"poppins"}
									size={"paragraf1"}
									thick={"medium"}>
									Email
								</Typography>
							</Label>
							<Input
								required
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								id="email"
								className="bg-indigo-100 focus-visible:ring-0"
								placeholder="Enter your email"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="subject">
								<Typography
									font={"poppins"}
									size={"paragraf1"}
									thick={"medium"}>
									Subject
								</Typography>
							</Label>
							<Input
								required
								onChange={(e) => setSubject(e.target.value)}
								type="text"
								id="subject"
								className="bg-indigo-100 focus-visible:ring-0"
								placeholder=" Enter your subject"
							/>
						</div>
						<div className="space-y-2">
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

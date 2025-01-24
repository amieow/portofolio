import React from "react";
import Typography from "../atoms/ui/typography";
import Image from "next/image";
import Images from "@/contents/images";
import Link from "next/link";
//I've been hooked on Computer Science since I was 12, with a particular interest in botting. and when I was 15 i started seriously learning how to code in field of botting. after that when i 16-year-old i started learning web development.
export default function SertificateSection() {
	const allsertif = [{
		image: Images.sertificate_cpfinalis01,
		name: "sertificate cpfinalis",
		link: "/view/sertif-finalis"
	}, {
		image: Images.sertificate_fedone01,
		name: "course fe done"
	}]
	return (
		<section
			id="about"
			className="w-full flex flex-col overflow-x-hidden gap-10 bg-indigo-50 pb-20">
			<Typography
				as="h2"
				size={"display"}
				thick={"bold"}
				font={"poppins"}
				className="text-center w-full "
				color="primary">
				My Sertificate
			</Typography>
			<div className="container relative flex flex-col-reverse gap-4 md:justify-between md:flex-row">
				{allsertif.map((v) => (
					<>
						{v.link ? (<Link href={v.link}>
							<Image className="md:w-[35rem]" alt={v.name} src={v.image} />
							{/* <Typography>{v.name}</Typography> */}
						</Link>) : <div>
							<Image className="md:w-[31rem]" alt={v.name} src={v.image} />
							{/* <Typography>{v.name}</Typography> */}
						</div>}
					</>
				))}
			</div>
		</section>
	);
}

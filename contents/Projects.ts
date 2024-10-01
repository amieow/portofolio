import { ProjectTypes } from "@/lib/types/project.types";
import Images from "./images";

const PROJECT_SHOWCASE: ProjectTypes[] = [
	{
		title: "SCHOOLABS",
		description:
			"SchooLabs is a new start up company and they want to build a website that offers a range of online courses for UI/UX Designers and Developers. The website aims to offer a user-friendly interface and visually appealing platform, the platform must be easy for learners to discover, access and engage with online courses.",
		shortDescription:
			"A user-friendly platform offering a range of online courses for UI/UX Designers and Developers.",
		thumbnail: Images.schoolabs,
		dateStart: new Date("2023-08-26"),
		dateEnd: new Date("2023-10-12"),
		isColaborating: true,
		techStack: ["Next.js", "Tailwind", "React"],
		myRole: "Frontend Developer",
		links: {
			collaborators:
				"https://github.com/amieow/sturdy-fortnight?tab=readme-ov-file#%EF%B8%8F-contributor-",
			demo: "https://sturdy-fortnight.vercel.app/",
			repository: "https://github.com/amieow/sturdy-fortnight",
		},
		category: "WEBSITE",
	},
	{
		title: "DEPUBLIC",
		description:
			"This platform is a marketplace for buying and selling concert or event tickets. It offers various categories of needs. Users who register on this application can act as buyers. In this case, users are expected to easily find concert schedules that suit their needs and pay for tickets online. Additionally, the website is expected to provide accurate and up-to-date information about ongoing events.",
		shortDescription:
			"Depublic serves as a marketplace for purchasing and selling concert or event tickets",
		thumbnail: Images.depublic,
		imageDetail: [Images.depublic1, Images.depublic2, Images.depublic3],
		style: { img: "contain", backgroundColor: "#272727" },
		techStack: ["Next.js", "Tailwind", "React", "jwt"],
		myRole: "Frontend Developer",
		links: {
			demo: "https://depublic-amieow.vercel.app/",
			repository: "https://github.com/amieow/depublic-amieow/tree/master",
		},
		category: "WEBSITE",
	},
	{
		title: "FUTURESPACE",
		description: `Futurespace revolutionizes the concept of traditional office environments by offering a cutting-edge platform for individuals and businesses seeking shared workspace solutions. At Futurespace, we understand the evolving needs of modern professionals and enterprises, which is why we've crafted an innovative online platform that seamlessly connects users with flexible, collaborative workspaces tailored to their specific requirements.

Gone are the days of being tied down to a static office lease. With Futurespace, you gain access to a dynamic network of shared workspaces located in prime locations around the globe, all conveniently accessible through our user-friendly web interface. Whether you're a freelancer, startup, or established corporation, our diverse range of workspaces caters to teams of all sizes and industries.

`,
		shortDescription: "Slicing figma designs into reusable components.",
		thumbnail: Images.futurespace,
		imageDetail: [
			Images.futurespace1,
			Images.futurespace2,
			Images.futurespace3,
			Images.futurespace4,
			Images.futurespace5,
		],
		isColaborating: true,
		techStack: ["Next.js", "Tailwind", "React"],
		myRole: "Frontend Developer",
		links: {
			collaborators:
				"https://github.com/amieow/tugas-koleb-1/graphs/contributors",
			demo: "https://tugas-koleb-1.vercel.app/",
			repository: "https://github.com/amieow/tugas-koleb-1",
		},
		category: "WEBSITE",
	},
	{
		title: "SCHOOLABS",
		description:
			"SchooLabs is a new start up company and they want to build a website that offers a range of online courses for UI/UX Designers and Developers. The website aims to offer a user-friendly interface and visually appealing platform, the platform must be easy for learners to discover, access and engage with online courses.",
		shortDescription:
			"A user-friendly platform offering a range of online courses for UI/UX Designers and Developers.",
		thumbnail: Images.schoolabs,
		dateStart: new Date("2023-08-26"),
		dateEnd: new Date("2023-10-12"),
		isColaborating: true,
		techStack: ["Next.js", "Tailwind", "React"],
		myRole: "Frontend Developer",
		links: {
			collaborators:
				"https://github.com/amieow/sturdy-fortnight?tab=readme-ov-file#%EF%B8%8F-contributor-",
			demo: "https://sturdy-fortnight.vercel.app/",
			repository: "https://github.com/amieow/sturdy-fortnight",
		},
		category: "WEBSITE",
	},
	{
		title: "DEPUBLIC",
		description:
			"This platform is a marketplace for buying and selling concert or event tickets. It offers various categories of needs. Users who register on this application can act as buyers. In this case, users are expected to easily find concert schedules that suit their needs and pay for tickets online. Additionally, the website is expected to provide accurate and up-to-date information about ongoing events.",
		shortDescription:
			"Depublic serves as a marketplace for purchasing and selling concert or event tickets",
		thumbnail: Images.depublic,
		imageDetail: [Images.depublic1, Images.depublic2, Images.depublic3],
		style: { img: "contain", backgroundColor: "#272727" },
		techStack: ["Next.js", "Tailwind", "React", "jwt"],
		myRole: "Frontend Developer",
		links: {
			demo: "https://depublic-amieow.vercel.app/",
			repository: "https://github.com/amieow/depublic-amieow/tree/master",
		},
		category: "WEBSITE",
	},
	{
		title: "FUTURESPACE",
		description: `Futurespace revolutionizes the concept of traditional office environments by offering a cutting-edge platform for individuals and businesses seeking shared workspace solutions. At Futurespace, we understand the evolving needs of modern professionals and enterprises, which is why we've crafted an innovative online platform that seamlessly connects users with flexible, collaborative workspaces tailored to their specific requirements.

Gone are the days of being tied down to a static office lease. With Futurespace, you gain access to a dynamic network of shared workspaces located in prime locations around the globe, all conveniently accessible through our user-friendly web interface. Whether you're a freelancer, startup, or established corporation, our diverse range of workspaces caters to teams of all sizes and industries.

`,
		shortDescription: "Slicing figma designs into reusable components.",
		thumbnail: Images.futurespace,
		imageDetail: [
			Images.futurespace1,
			Images.futurespace2,
			Images.futurespace3,
			Images.futurespace4,
			Images.futurespace5,
		],
		isColaborating: true,
		techStack: ["Next.js", "Tailwind", "React"],
		myRole: "Frontend Developer",
		links: {
			collaborators:
				"https://github.com/amieow/tugas-koleb-1/graphs/contributors",
			demo: "https://tugas-koleb-1.vercel.app/",
			repository: "https://github.com/amieow/tugas-koleb-1",
		},
		category: "WEBSITE",
	},
];

export default PROJECT_SHOWCASE;

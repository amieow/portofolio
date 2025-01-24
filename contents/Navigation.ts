const NAVBAR_MENU: TypeNavbarMenu[] = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "Project",
		link: "/#project",
	},
	{
		title: "Services",
		link: "/#services",
	},
	{
		title:"Download",
		subMenu: [
			{
				title : "Resume",
				link:"/pdf/my-resume.pdf"
			},
			{
				title: "Books CP Tutorial(IDN)",
				link:"https://osn.toki.id/data/pemrograman-kompetitif-dasar.pdf"
			},
			{
				title: "Books CP Tutorial(ENG)",
				link:"https://files.gitter.im/SamZhangQingChuan/sam/DA1g/Steven-Halim_-Felix-Halim-Competitive-Programming-3_-The-New-Lower-Bound-of-Programming-Contests-Lulu.com-_2013_.pdf"
			},
			
		]
	}
	// {
	// 	title: "Contact",
	// 	link: "/#contact",
	// },
];

type TypeNavbarMenu = {
	title: string;
	link?: string;
	subMenu?:TypeNavbarMenu[]
	section?: string;
};

export { NAVBAR_MENU, type TypeNavbarMenu };

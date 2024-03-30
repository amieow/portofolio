const NAVBAR_MENU: TypeNavbarMenu[] = [
	{
		title: "Home",
		link: "/",
		section: "",
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
		title: "Contact",
		link: "/#contact",
	},
];

type TypeNavbarMenu = {
	title: string;
	link: string;
	section?: string;
};

export { NAVBAR_MENU, type TypeNavbarMenu };

"use client";
import { ctxProvider } from "@/app/template";
import { LoaderIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useContext, useState } from "react";
import { format } from "url";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	href:
		| string
		| {
				pathname: string;
				query?: Record<string, string | number>;
				section?: string;
		  };
	color?: string;
	noLoader?: boolean;
	children: React.ReactNode;
}

const TransitionLink = ({
	href,
	children,
	noLoader = false,
	...props
}: Props) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	let pathname = "";
	if (typeof href === "string") {
		pathname = href;
	} else {
		pathname = format({
			pathname: href.pathname,
			query: href.query,
		});
	}

	const handleClick = () => {
		if (!noLoader) setLoading(true);
		router.push(pathname);
	};

	return (
		<button
			{...props}
			onClick={handleClick}>
			<Fragment>
				{loading && !noLoader && (
					<LoaderIcon
						size={24}
						color="yellow"
						className="animate-spin"
					/>
				)}
				{children}
			</Fragment>
		</button>
	);
};

export default TransitionLink;

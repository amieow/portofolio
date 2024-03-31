"use client";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Loading from "../molecules/loading";
import { usePathname } from "next/navigation";
import { Fira_Code, Inter, Poppins, Montserrat } from "next/font/google";

export default function HandleRouting({
	children,
}: {
	children: React.ReactNode;
}) {
	const [loading, setLoading] = useState(true);
	const [changing, setChanging] = useState(false);
	const [sumPreloading, setSumPreloading] = useState(0);
	const path = usePathname();

	useEffect(() => {
		setSumPreloading((prev) => prev + 1);
		setLoading(false);
		setChanging(true);
		let Timeout: NodeJS.Timeout;
		Timeout = setTimeout(() => {
			setChanging(false);
		}, 2000);
		console.log({ loading, changing, sumPreloading });

		return () => {
			clearTimeout(Timeout);
		};
	}, [path]);

	return (
		<AnimatePresence>
			<AnimatePresence>
				{(loading || changing) && <Loading isFirstTime={sumPreloading === 0} />}
			</AnimatePresence>
			<AnimatePresence>
				{!loading && !changing && (
					<React.Fragment>
						{React.Children.map(children, (child) =>
							React.cloneElement(child as React.ReactElement, {}),
						)}
					</React.Fragment>
				)}
			</AnimatePresence>
		</AnimatePresence>
	);
}

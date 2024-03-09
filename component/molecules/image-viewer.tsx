"use client";
import dynamic from "next/dynamic";
import { StaticImageData } from "next/image";
import React from "react";
import { ImageDecorator } from "react-viewer/lib/ViewerProps";

const ReactViewer = dynamic(() => import("react-viewer"), { ssr: false });

interface ImageViewerProps extends React.HTMLAttributes<HTMLDivElement> {
	saus: ImageDecorator[];
	children: React.ReactNode[] | React.ReactNode;
}

export const ImageViewer = ({ children, saus, ...props }: ImageViewerProps) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(0);
	const handleChildClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number,
	) => {
		// Perform whatever action is needed when a child is clicked here
		setIsOpen(true);
		setActiveIndex(index);
		console.log(`Child ${index} clicked!`);
	};

	return (
		<div {...props}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child as React.ReactElement<any>, {
						onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
							handleChildClick(event, index),
					});
				}
				return child;
			})}
			<ReactViewer
				visible={isOpen}
				onClose={() => setIsOpen(false)}
				images={saus}
				showTotal
				activeIndex={activeIndex}
			/>
		</div>
	);
};

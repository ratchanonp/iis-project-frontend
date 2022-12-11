import { Navbar } from "@ui/components/navbar";
import React from "react";

interface Props {
	children: React.ReactNode;
}

const MainLayout = (props: Props) => {
	const { children } = props;
	return (
		<div className="relative">
			{children}
			<Navbar />
		</div>
	);
};

export { MainLayout };


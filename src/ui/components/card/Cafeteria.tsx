import React from "react";
interface Props {
	title: string;
}

const CafeteriaCard = (props: Props) => {
	const { title } = props;

	return (
		<div className="shadow-md rounded-2xl overflow-hidden w-full h-48 relative bg-[url('/cafe.jpg')]">
			<div className="bg-primary absolute w-full h-48 opacity-40"></div>
			<div className="absolute flex justify-center w-full bottom-2">
				<button className="bg-primary text-white font-Kanit w-[90%] rounded-full py-2">
					{title}
				</button>
			</div>
		</div>
	);
};

export { CafeteriaCard };


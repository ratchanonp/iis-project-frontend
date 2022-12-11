import React from "react";
interface Props {
	firstname: string;
}

const Greeting = (props: Props) => {
	const { firstname } = props;

	return (
		<div className="flex flex-col">
			<span className="text-5xl font-Kanit font-semibold text-primary">
				สวัสดี, {firstname}
			</span>
			<span className="text-3xl font-medium font-Kanit mt-1">
				วันนี้จะกินไฬดี
			</span>
		</div>
	);
};

export { Greeting };


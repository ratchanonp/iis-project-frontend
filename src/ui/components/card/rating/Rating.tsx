import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
	score: number;
}

const Rating = (props: Props) => {
	const { score } = props;

	const backgroundColor = (score: number) => {
		if (score >= 4) {
			return "bg-green-500";
		} else if (score >= 3) {
			return "bg-yellow-500";
		} else {
			return "bg-red-500";
		}
	};

	return (
		<div
			className={`${backgroundColor(
				score
			)} rounded-full inline-flex px-1 text-white text-xs items-center`}
		>
			<StarIcon className="text-white w-3 h-3 mr-0.5" />
			{score.toFixed(1)}
		</div>
	);
};

export default Rating;

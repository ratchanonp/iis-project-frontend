import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
	rating: number;
}

const RatingInfo = (props: Props) => {
	const { rating } = props;

	return (
		<div className="flex items-center justify-center">
			<StarIcon className="w-5 h-5 text-yellow-500" />
			<span className="font-Kanit font-light text-sm ml-1">
				เฉลี่ย {rating.toFixed(1)}
			</span>
		</div>
	);
};

export default RatingInfo;

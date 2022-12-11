import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { PriceRange } from "@utils/interfaces";
import React from "react";

interface Props {
	price: PriceRange;
}

const Price = (props: Props) => {
	const { price } = props;
	const { min } = price;
	const { max } = price;

	const backgroundColor = (price: number) => {
		if (price >= 100) {
			return "bg-red-500";
		} else if (price >= 80) {
			return "bg-yellow-500";
		} else {
			return "bg-green-500";
		}
	};

	return (
		<div
			className={`${backgroundColor(
				min
			)} rounded-full inline-flex px-1 text-white text-xs items-center`}
		>
			<CurrencyDollarIcon className="text-white w-3 h-3 mr-0.5" />
			{min.toFixed() + "-" + max.toFixed()}
		</div>
	);
};

export default Price;

import { Restaurant } from "@utils/interfaces";
import Image from "next/image";
import React from "react";
import Price from "./price/Price";
import Rating from "./rating/Rating";

interface Props {
	restaurant: Restaurant;
	className?: string;
}

const RestaurantCard = (props: Props) => {
	const { className, restaurant } = props;
	const { title, category, imageUrl } = restaurant;

	return (
		<div
			className={`shadow-md shrink-0 rounded-xl font-Kanit overflow-hidden ${className}`}
		>
			<div className="w-full h-32 relative">
				<Image src={imageUrl} alt={title} fill={true} />
			</div>
			<div className="p-4">
				<h1>{title}</h1>
				<div className="flex space-x-1">
					<Rating score={5} />
					<Price
						price={{
							min: 40,
							max: 100,
						}}
					/>
				</div>
				<div className="flex space-x-1">
					{category.map((item) => (
						<span className="text-xs text-gray-300" key={item}>
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;

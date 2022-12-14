import { Restaurant } from "lib/utils/interfaces";
import Link from "next/link";
import { Price, Rating } from ".";

interface Props {
	restaurant: Restaurant;
	className?: string;
}

const RestaurantCard = (props: Props) => {
	const { className, restaurant } = props;
	const { title, category, imageUrl, id } = restaurant;

	return (
		<Link
			href={`/restaurant/${id}`}
			className={`shadow-md shrink-0 rounded-xl font-Kanit overflow-hidden ${className}`}
		>
			<div className="w-full h-32 relative">
				<img src={imageUrl} alt={title} className="w-full h-32" />
			</div>
			<div className="p-4">
				<h1>{title}</h1>
				<div className="flex space-x-1 items-center mt-1">
					<Rating score={5} />
					<Price
						price={{
							min: 40,
							max: 100,
						}}
					/>
				</div>
			</div>
		</Link>
	);
};

export { RestaurantCard };


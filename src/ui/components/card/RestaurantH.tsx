import { Restaurant } from "lib/utils/interfaces/Restaurant.interface";
import Link from "next/link";
import { Price, Rating } from "./";

interface Props {
	restaurant: Restaurant;
}

const RestaurantHCard = (props: Props) => {
	const { title, category, imageUrl, Cafeteria, id } = props.restaurant;

	return (
		<Link href={`/restaurant/${id}`} className="flex font-Kanit rounded-xl overflow-hidden shadow shrink-0">
			<div className="relative w-1/3">
				<img
					src={imageUrl}
					alt={title}
					className=" object-fill w-full h-24"
				/>
			</div>
			<div className="flex flex-col px-5 py-2.5 h-full">
				<h3 className="text-lg leading-0">{title}</h3>
				<span className="text-xs text-primary font-light -mt-1">
					{Cafeteria.title}
				</span>
				<div className="space-x-1">
					<Rating score={4.5} />
					<Price
						price={{
							min: 40,
							max: 100,
						}}
					/>
				</div>
				<div className="flex space-x-2">

				</div>
			</div>
		</Link>
	);
};

export { RestaurantHCard };


import { Restaurant } from "@utils/interfaces/Restaurant";
import Image from "next/image";
import { Price, Rating } from "./";

interface Props {
	restaurant: Restaurant;
}

const RestaurantHCard = (props: Props) => {
	const { title, category, imageUrl } = props.restaurant;

	return (
		<div className="flex font-Kanit rounded-xl overflow-hidden shadow shrink-0">
			<div className="relative w-1/3">
				<Image
					src={imageUrl}
					alt={title}
					fill={true}
					className=" object-fill"
				/>
			</div>
			<div className="flex flex-col px-5 py-2.5 h-full">
				<h3 className="text-lg leading-0">{title}</h3>
				<span className="text-xs text-primary font-light -mt-1">
					อักษรศาสตร์
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
					{category.map((item) => (
						<span className="text-xs font-light text-gray-300" key={item}>
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export { RestaurantHCard };


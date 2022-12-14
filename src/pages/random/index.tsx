import { BackLayout, Container } from "@ui/layouts";
import { getRestaurants } from "lib/api/restaurant";
import { Restaurant } from "lib/utils/interfaces";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement, useState } from "react";
import Lottie from "react-lottie-player";
import { useQuery } from "react-query";

import dice from "./dice.json";

const RandomPage: NextPageWithLayout = () => {

	const restaurantData = useQuery("restaurant", getRestaurants);

	const [restaurant, setRestaurant] = useState<Restaurant | undefined>();

	if (restaurantData.isLoading || !restaurantData.data) return <div>Loading...</div>;
	if (restaurantData.isError) return <div>Error</div>;

	if (restaurantData.data?.length == 0) return <div>Empty</div>;

	const random = () => {
		const randomCafeteria = restaurantData.data[Math.floor(Math.random() * restaurantData.data?.length)];
		console.log(randomCafeteria);
		setRestaurant(randomCafeteria);
	};



	return (
		<div className="h-screen relative">
			{restaurant ? (
				<div className="flex font-Kanit items-center justify-center">
					<div>
						<img src={restaurant.imageUrl} alt="" className="h-96 w-full object-cover" />
						<div className="mt-2">
							<h1 className="text-3xl text-center">{restaurant.title}</h1>
							<h2 className="text-xl text-center text-primary">{restaurant.Cafeteria.title}</h2>
						</div>
					</div>
				</div>) : (
				<div>
					<Lottie animationData={dice} loop play />
				</div>
			)}
			<button className="btn-primary mt-20" onClick={random}>Random</button>
		</div>
	);
};

RandomPage.getLayout = (page: ReactElement) => (
	<BackLayout>
		<Container>
			{page}
		</Container>
	</BackLayout>
);
export default RandomPage;

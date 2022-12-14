import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { RestaurantHCard } from "@ui/components/card";
import { BackLayout, Container } from "@ui/layouts";
import { getRestaurants } from "lib/api/restaurant";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement, useState } from "react";
import { useQuery } from "react-query";


const RestaurantList: NextPageWithLayout = () => {

	const [search, setSearch] = useState<string>("");

	const restaurants = useQuery("restaurant", getRestaurants);

	if (restaurants.isLoading) return <div>Loading...</div>;
	if (restaurants.error) return <div>Error</div>;

	return (
		<>
			<h1 className="font-Kanit font-bold text-5xl">ร้านอาหาร</h1>
			<h2 className="font-Kanit text-primary font-bold text-xl">Restaurant</h2>
			<div className="mt-5">
				<label className="relative">
					<MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-400 top-1/2 transform -translate-y-1/2 left-2 placeholder:ml-20" />
					<input
						className="search pl-2"
						type="text"
						name="search"
						id="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="ค้นหาร้านอาหาร"
					/>
				</label>
			</div>
			<div className="flex flex-col space-y-3 mt-5 overflow-y-scroll h-full">
				{restaurants.data?.filter(
					(restaurant) => restaurant.title.toLowerCase().includes(search.toLowerCase()) || restaurant.Cafeteria.title.includes(search.toLowerCase())
				).map((restaurant, idx) => (
					<RestaurantHCard key={idx} restaurant={restaurant} />
				))}
			</div>
		</>
	);
};

RestaurantList.getLayout = (page: ReactElement) => (
	<BackLayout>
		<Container>{page}</Container>
	</BackLayout>
);

export default RestaurantList;

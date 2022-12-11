import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { RestaurantHCard } from "@ui/components/card";
import { Filter } from "@ui/components/search";
import { BackLayout, Container } from "@ui/layouts";
import { restaurants } from "@utils/constant/data";
import { NextPageWithLayout } from "pages/_app";
import React, { ReactElement } from "react";


const RestaurantList: NextPageWithLayout = () => {
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
						name=""
						id=""
						placeholder="ค้นหาร้านอาหาร"
					/>
				</label>
			</div>
			<Filter />
			<div className="flex flex-col space-y-3 mt-5 overflow-y-scroll h-full">
				{restaurants.map((restaurant, idx) => (
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

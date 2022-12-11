import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import InfoCard from "@ui/components/card/InfoCard/InfoCard";
import RestaurantCard from "@ui/components/card/Restaurant";
import RestaurantHCard from "@ui/components/card/RestaurantH";
import Filter from "@ui/components/search/Filter";
import BackLayout from "@ui/layouts/BackLayout";
import Container from "@ui/layouts/Container";
import { restaurants } from "@utils/constant/data";
import { NextPageWithLayout } from "pages/_app";
import React, { ReactElement } from "react";

const CafeteriaInfoPage: NextPageWithLayout = () => {
	return (
		<div>
			<h1 className="font-semibold font-Kanit text-7xl">วิศวกรรม ศาสตร์</h1>
			<h2 className="font-semibold font-Kanit text-primary text-2xl">
				Engineering Cafeteria
			</h2>
			<InfoCard />

			<div className="mt-5">
				<h3 className="font-Kanit text-2xl">ยอดนิยม</h3>
				<RestaurantHCard restaurant={restaurants[0]} />
			</div>

			<div>
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
			</div>

			<div className="grid grid-cols-2 mt-5 gap-4">
				{restaurants.map((restaurant, idx) => (
					<RestaurantCard
						className="w-full"
						key={idx}
						restaurant={restaurant}
					/>
				))}
			</div>
		</div>
	);
};

CafeteriaInfoPage.getLayout = (page: ReactElement) => (
	<BackLayout>
		<Container>{page}</Container>
	</BackLayout>
);

export default CafeteriaInfoPage;

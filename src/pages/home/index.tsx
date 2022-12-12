import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { CafeteriaCard, RestaurantCard } from "@ui/components/card";
import { Greeting } from "@ui/components/home";
import { Container, MainLayout } from "@ui/layouts";
import { restaurants } from "@utils/constant/data";
import { NextPageWithLayout } from "pages/_app";

const HomePage: NextPageWithLayout = () => {
	const firstname = "อาตา";

	return (
		<>
			<div className="flex justify-between ">
				<Greeting firstname={firstname} />
				<UserCircleIcon className="w-20 h-20" />
			</div>
			<div className="flex items-center justify-between mt-20">
				<div className="flex flex-col">
					<span className="text-4xl font-Kanit font-medium">โรงอาหาร</span>
					<span className="text-xl font-Kanit font-medium text-primary leading-none">
						Cafeteria
					</span>
				</div>
				<span className="font-Kanit font-light flex text-sm">
					ดูเพิ่มเติม <ChevronRightIcon className="w-5 h-5" />
				</span>
			</div>
			<div className="grid grid-cols-2 mt-2 gap-3">
				<CafeteriaCard title="หอพักนิสิต" />
				<CafeteriaCard title="อักษรศาสตร์" />
			</div>
			<div className="flex items-center justify-between mt-10">
				<div className="flex flex-col">
					<span className="text-4xl font-Kanit font-medium">ร้านอาหาร</span>
					<span className="text-xl font-Kanit font-medium text-primary leading-none">
						Restaurant
					</span>
				</div>
				<span className="font-Kanit font-light flex text-sm">
					ดูเพิ่มเติม <ChevronRightIcon className="w-5 h-5" />
				</span>
			</div>
			<div className="flex overflow-x-scroll mt-2 space-x-3 p-2">
				{restaurants.map((restaurant) => (
					<RestaurantCard restaurant={restaurant} key={restaurant.title} />
				))}
			</div>
		</>
	);
};

HomePage.getLayout = (page) => (
	<MainLayout>
		<Container>{page}</Container>
	</MainLayout>
);

export default HomePage;

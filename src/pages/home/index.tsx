import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { CafeteriaCard, RestaurantCard } from "@ui/components/card";
import { Greeting } from "@ui/components/home";
import { Container, MainLayout } from "@ui/layouts";
import { getCafeteria } from "lib/api/cafeteria";
import { getRestaurants } from "lib/api/restaurant";
import { Cafeteria } from "lib/utils/interfaces/Cafeteria.interface";
import Link from "next/link";
import { NextPageWithLayout } from "pages/_app";
import { useQuery } from "react-query";

const HomePage: NextPageWithLayout = () => {
	const cafeteria = useQuery("cafeteria", getCafeteria);
	const restaurant = useQuery("restaurant", getRestaurants);

	if (cafeteria.isLoading || restaurant.isLoading) return <div>Loading...</div>;
	if (cafeteria.isError || restaurant.isError) return <div>Error...</div>;

	if (!cafeteria.data || !restaurant.data) return <div>Not found</div>;

	return (
		<>
			<div className="flex justify-between ">
				<Greeting />
				<Link href="/user">
					<UserCircleIcon className="w-20 h-20" />
				</Link>
			</div>
			<div className="flex items-center justify-between mt-20">
				<div className="flex flex-col">
					<span className="text-4xl font-Kanit font-medium">โรงอาหาร</span>
					<span className="text-xl font-Kanit font-medium text-primary leading-none">
						Cafeteria
					</span>
				</div>
				<Link href={"/cafeteria"} className="font-Kanit font-light flex text-sm">
					ดูเพิ่มเติม <ChevronRightIcon className="w-5 h-5" />
				</Link>
			</div>
			<div className="grid grid-cols-2 mt-2 gap-3">
				{cafeteria.data?.slice(0, 2).map((cafeteria: Cafeteria) => (
					<CafeteriaCard cafeteria={cafeteria} key={cafeteria.title} />
				))}
			</div>
			<div className="flex items-center justify-between mt-10">
				<div className="flex flex-col">
					<span className="text-4xl font-Kanit font-medium">ร้านอาหาร</span>
					<span className="text-xl font-Kanit font-medium text-primary leading-none">
						Restaurant
					</span>
				</div>
				<Link href={"/restaurant"} className="font-Kanit font-light flex text-sm">
					ดูเพิ่มเติม <ChevronRightIcon className="w-5 h-5" />
				</Link>
			</div>
			<div className="flex overflow-x-scroll mt-2 space-x-3 p-2 mb-32">
				{restaurant.data?.slice(0, 10).map((restaurant) => (
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

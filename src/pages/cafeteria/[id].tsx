import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { InfoCard, RestaurantCard, RestaurantHCard } from "@ui/components/card";
import { BackLayout, Container } from "@ui/layouts";
import { getCafeteriaId } from "lib/api/cafeteria";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement, useState } from "react";
import { useQuery } from "react-query";

const CafeteriaInfoPage: NextPageWithLayout = () => {

	const router = useRouter();
	const { id } = router.query;

	const [search, setSearch] = useState<string>("");

	const cafeteria = useQuery("cafeteria_single", () => {
		return getCafeteriaId(id as string);
	});

	if (cafeteria.isLoading) return <div>Loading...</div>;
	if (cafeteria.error) return <div>Error</div>;

	console.log(cafeteria.data?.restaurant);


	return (
		<div>
			<h1 className="font-semibold font-Kanit text-7xl truncate leading-tight">{cafeteria.data?.title}</h1>
			<h2 className="font-semibold font-Kanit text-primary text-2xl">
				{cafeteria.data?.eng_title}
			</h2>
			<InfoCard openPeriod="" rating={5} map={cafeteria.data?.map || ""} />

			<div className="mt-5">
				<h3 className="font-Kanit text-2xl">ยอดนิยม</h3>
				{cafeteria.data?.restaurant && cafeteria.data?.restaurant.length > 0 && (
					<RestaurantHCard restaurant={cafeteria.data?.restaurant[0]} />)}
			</div>

			<div>
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
				{/*<Filter /> */}
			</div>

			<div className="grid grid-cols-2 mt-5 gap-4">
				{cafeteria.data?.restaurant && cafeteria.data?.restaurant.filter(
					(restaurant) => restaurant.title.includes(search)
				).map((restaurant, idx) => (
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

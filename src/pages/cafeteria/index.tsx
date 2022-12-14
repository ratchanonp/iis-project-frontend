import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { CafeteriaCard } from "@ui/components/card";
import { BackLayout, Container } from "@ui/layouts";
import { getCafeteria } from "lib/api/cafeteria";
import { Cafeteria } from "lib/utils/interfaces/Cafeteria.interface";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement, useState } from "react";
import { useQuery } from "react-query";


const CafeteriaPage: NextPageWithLayout = () => {
	const cafeteria = useQuery("cafeteria", getCafeteria);
	const [search, setSearch] = useState<string>("");

	return (
		<div>
			<h1 className="font-Kanit font-bold text-5xl">โรงอาหาร</h1>
			<h2 className="font-Kani text-primary font-bold text-xl">Cafeteria</h2>
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
						placeholder="ค้นหาโรงอาหาร"
					/>
				</label>
			</div>
			<div className="grid grid-cols-2 gap-3 mt-5">
				{cafeteria.data?.filter(
					(cafeteria: Cafeteria) =>
						cafeteria.title.toLowerCase().includes(search.toLowerCase())
				).map((cafeteria: Cafeteria, idx: number) => {
					return <CafeteriaCard key={idx} cafeteria={cafeteria} />;
				})}
			</div>
		</div>
	);
};

CafeteriaPage.getLayout = (page: ReactElement) => (
	<BackLayout>
		<Container>{page}</Container>
	</BackLayout>
);
export default CafeteriaPage;

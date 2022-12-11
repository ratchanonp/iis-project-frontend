import BackLayout from "@ui/layouts/BackLayout";
import Container from "@ui/layouts/Container";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import CafeteriaCard from "@ui/components/card/Cafeteria";
import Filter from "@ui/components/search/Filter";

interface Props {}

const CafeteriaPage: NextPageWithLayout = (props: Props) => {
  const cafeteriaList = [
    "โรงอาหาร 1",
    "โรงอาหาร 2",
    "โรงอาหาร 3",
    "โรงอาหาร 4",
    "โรงอาหาร 5",
    "โรงอาหาร 6",
  ];

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
            name=""
            id=""
            placeholder="ค้นหาโรงอาหาร"
          />
        </label>
      </div>
      <Filter />
      <div className="grid grid-cols-2 gap-3 mt-5">
        {cafeteriaList.map((cafeteria, idx) => {
          return <CafeteriaCard key={idx} title={cafeteria} />;
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

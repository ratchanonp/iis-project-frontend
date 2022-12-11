import React, { ReactElement } from "react";
import { ChevronLeftIcon, BuildingLibraryIcon} from "@heroicons/react/24/outline";
import { UserCircleIcon, PencilIcon } from "@heroicons/react/24/solid";
import { NextPageWithLayout } from "pages/_app";
import Container from "@ui/layouts/Container";
import ReviewCard from "@ui/components/card/review/ReviewCard";
type Props = {};

const UserPage: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <div className="flex ">
        <ChevronLeftIcon className=" text-black h-8 mt-1 mr-2" />
        <p className="font-bold text-4xl">Profile</p>
      </div>
      <div className="relative bg-gray-50 p-8 mt-5 rounded-3xl flex flex-col justify-center items-center font-Kanit">
        <PencilIcon className="absolute top-7 right-7 h-7 " />
        <UserCircleIcon className="h-48 " />
        <p className="text-2xl">Matcee Artapiyatham</p>
        <p className="text-gray-400">Matcee@gmail.com</p>
        <div className=" bg-white flex items-center rounded-xl w-full py-2">
          <BuildingLibraryIcon className="justify-self-start mx-8 h-7" />
          <p className="text-xl">Faculty of Science</p>
        </div>
      </div>
      <p className="font-Kanit text-bold text-3xl ml-5 mt-6">รีวิว</p>

      <div className="flex flex-col space-y-2 overflow-y-scroll">
        {[...Array(10)].map((_, idx) => (
          <ReviewCard key={idx} />
        ))}
      </div>
    </>
  );
};

UserPage.getLayout = (page: ReactElement) => <Container>{page}</Container>;
export default UserPage;

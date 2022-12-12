import { ChevronLeftIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { BuildingLibraryIcon, PencilIcon } from "@heroicons/react/24/outline";
import { ReviewCard } from "@ui/components/card";
import { Container } from "@ui/layouts";
import { reviewMock } from "@utils/constant/data";
import Link from "next/link";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement } from "react";

const UserPage: NextPageWithLayout = () => {
	return (
		<div>
			<div className="flex items-center">
				<ChevronLeftIcon className="w-12 h-12" />
				<h1 className="text-3xl font-Kanit">Profile</h1>
			</div>
			<div className="flex flex-col items-center bg-gray-100 rounded-2xl p-5 relative">
				<Link className="absolute right-5" href={"user/edit"}>
					<PencilIcon className="w-6 h-6" />
				</Link>
				<UserCircleIcon className="w-40 h-40" />
				<p className="text-2xl font-Kanit">Matcee Artapiyatham</p>
				<p className="text-gray-400 font-Kanit -mt-1 font-light">Matcee@gmail.com</p>
				<div className="flex justify-center items-center bg-white w-full px-5 py-1 rounded-xl mt-3">
					<BuildingLibraryIcon className="w-8 h-8 mr-3" />
					<p className="text-xl font-Kanit font-light">Faculty of Science</p>
				</div>
			</div>
			<div className="mt-5">
				<h3 className="text-3xl font-Kanit font-semibold">รีวิว</h3>
				<div className="flex flex-col space-y-2">{[...Array(10)].map((_, i) => <ReviewCard key={i} review={reviewMock} />)}</div>
			</div>
		</div>
	);
};

UserPage.getLayout = (page: ReactElement) => (
	<Container>{page}</Container>
); 

export default UserPage;
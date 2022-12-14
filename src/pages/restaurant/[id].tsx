import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { Rating } from "@ui/components/card";
import dayjs from "dayjs";
import { getRestaurantId } from "lib/api/restaurant";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useQuery } from "react-query";


const RestaurantInfo: NextPageWithLayout = () => {

	const router = useRouter();
	const { id } = router.query;

	const { data, isLoading, error } = useQuery("restaurant", () => {
		return getRestaurantId(id as string);
	});

	if (isLoading || !data) return <div>Loading...</div>;
	if (error) return <div>Error</div>;

	return (
		<div className="flex flex-col font-Kanit">
			<div className="w-full h-64 relative">
				<Image src="/onechu.jpg" fill={true} alt="test" />
				<button className="bg-gray-500 rounded-full p-1 absolute top-5 left-5"><ChevronLeftIcon className="w-8 h-8 text-white" onClick={() => router.back()} /></button>
			</div>
			<div className="p-5">
				<h1 className="text-3xl font-medium">{data?.title}</h1>
				<h2 className="text-primary">{data?.Cafeteria?.title}</h2>
				<div className="grid grid-cols-2 gap-2 text-white mt-2">
					<button className="bg-emerald-500 py-2 px-5 rounded-lg flex items-center space-x-2"><HandThumbUpIcon className="w-8 h-8 bg-white bg-opacity-30 rounded-full p-1" /> <span className="text-xl">แนะนำ</span></button>
					<button className="bg-red-500 py-2 px-5 rounded-lg flex items-center space-x-2"><HandThumbDownIcon className="w-8 h-8 bg-white bg-opacity-30 rounded-full p-1" /><span className="text-xl">ไม่แนะนำ</span></button>
				</div>
				<div className="mt-5">
					<h3 className="text-lg font-semibold">เกี่ยวกับ</h3>
					<div className="grid grid-cols-3 gap-1">
						<div className="font-medium text-gray-500">ความเป็นมา</div>
						<div className=" col-span-2 font-light">{data?.about}</div>
						<div className="font-medium text-gray-500">เวลาทำการ</div>
						<div className=" col-span-2 font-light">{data?.open}</div>
						<div className="font-medium text-gray-500">ติดต่อ</div>
						<div className=" col-span-2 font-light">{data?.tel}</div>
					</div>
				</div>
				<div className="mt-5">
					<h3>รีวิว</h3>
					<div className="flex flex-col space-y-3">
						{data?.Review?.map((item: any, idx) => (
							<div key={idx} className="font-Kanit font-light bg-gray-100 p-5 rounded-xl flex justify-between items-center">
								<div className="flex flex-col space-y-0.5">
									<div>
										<p className="text-xl">&ldquo;{item.comment}&rdquo;</p>
									</div>
									<div className="flex space-x-2 items-center">
										<Rating score={item.rating} />
										<p className="text-gray-400">{dayjs(item.createAt).fromNow()}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantInfo;

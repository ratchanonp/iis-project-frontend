import { Container } from "@ui/layouts";
import { restaurants } from "@utils/constant/data";
import Image from "next/image";
import { NextPageWithLayout } from "pages/_app";
import React from "react";


const RestaurantInfo: NextPageWithLayout = () => {
	const restaurant = restaurants[0];
	const { category } = restaurant;

	return (
		<div className="flex flex-col font-Kanit">
			<div className="w-full h-64 relative">
				<Image src="/onechu.jpg" fill={true} alt="test" />
			</div>
			<Container>
				<h1 className="text-5xl mt-5">ไก่ทอดอักษร</h1>
				<div className="flex space-x-2 text-sm text-gray-400">
					{category.map((item) => (
						<span key={item}>{item}</span>
					))}
				</div>
				<div className="grid grid-cols-2 gap-2 text-white mt-2">
					<button className="bg-emerald-500 py-2 rounded-lg">แนะนำ</button>
					<button className="bg-red-500 py-2 rounded-lg">ไม่แนะนำ</button>
				</div>
			</Container>
		</div>
	);
};

export default RestaurantInfo;

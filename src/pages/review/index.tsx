import { BackLayout } from "@ui/layouts";
import { getCafeteria } from "lib/api/cafeteria";
import { createReview } from "lib/api/review";
import { CreateReview } from "lib/utils/interfaces";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement, useState } from "react";
import { useQuery } from "react-query";

const Review: NextPageWithLayout = () => {

	const router = useRouter();

	const cafeteriaData = useQuery("cafeteria", getCafeteria);

	const [restaurantList, setRestaurantList] = useState([]);



	const [selectedCafeteria, setSelectedCafeteria] = useState("none");
	const [selectedRestaurant, setSelectedRestaurant] = useState("");
	const [foodName, setFoodName] = useState("");
	const [foodPrice, setFoodPrice] = useState("");
	const [foodReview, setFoodReview] = useState("");

	const handleCafeteriaChange = (e: any) => {
		setSelectedCafeteria(e.target.value);

		const cafeteria = cafeteriaData.data?.find((cafeteria: any) => cafeteria.id == e.target.value);
		setRestaurantList(cafeteria?.restaurant ?? [] as any);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();


		const data: CreateReview = {
			restaurantId: selectedRestaurant,
			menu: foodName,
			price: Number(foodPrice),
			comment: foodReview,
			rating: 5
		};

		await createReview(data);
		router.push(`/restaurant/${data.restaurantId}`);
	};

	if (cafeteriaData.isLoading) return <div>Loading...</div>;

	return (
		<div className="flex flex-col p-5 font-Poxppins">
			<h2 className="text font-bold text-3xl my-10">REVIEW</h2>

			<form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
				<select className="form-input" name="" id="" onChange={handleCafeteriaChange}>
					<option value="none" selected disabled>------- โรงอาหาร ------</option>
					{cafeteriaData.data?.map((cafeteria: any, key) => (
						<option key={key} value={cafeteria.id}>{cafeteria.title}</option>
					))}
				</select>
				<select className="form-input" name="" id="" disabled={selectedCafeteria == "none"} value={selectedRestaurant} onChange={
					(e) => setSelectedRestaurant(e.target.value)
				}>
					<option value="" selected disabled>------- ร้านอาหาร ------</option>
					{restaurantList.map((restaurant: any, key) => (
						<option key={key} value={restaurant.id}>{restaurant.title}</option>
					))}
				</select>
				<input className="form-input" type="text" placeholder="เมนูอาหาร" id="foodName" value={foodName} onChange={
					(e) => setFoodName(e.target.value)
				} />
				<input className="form-input" type="number" placeholder="ราคา ฿฿" id="foodPrice" value={foodPrice} onChange={
					(e) => setFoodPrice(e.target.value)
				} />
				<textarea className="border focus:outline-primary placeholder:text-xl w-full rounded-3xl p-5" name="" id="" cols={30} rows={10} placeholder="เขียนรีวิว" value={foodReview} onChange={
					(e) => setFoodReview(e.target.value)
				} />
				<button type="submit" className="btn-primary">Summit</button>
			</form>

		</div >
	);
};

Review.getLayout = (page: ReactElement) => (
	<BackLayout>
		{page}
	</BackLayout>
);

export default Review;

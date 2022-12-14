import { BackLayout } from "@ui/layouts";
import { updateReview } from "lib/api/review";
import { UpdateReview } from "lib/utils/interfaces";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";

const Review: NextPageWithLayout = () => {

	const router = useRouter();
	const id = router.query.id as string;

	const { data, isLoading, error } = useQuery("review", () => fetch(`http://localhost:3000/review/${id}`).then((res) => res.json()));

	useEffect(() => {
		if (!data) return;
		setFoodName(data.menu);
		setFoodPrice(data.price);
		setFoodReview(data.comment);
	}, [data]);

	const [selectedRestaurant, setSelectedRestaurant] = useState(id);
	const [foodName, setFoodName] = useState();
	const [foodPrice, setFoodPrice] = useState();
	const [foodReview, setFoodReview] = useState();

	const handleSubmit = async (e: any) => {
		e.preventDefault();


		const data: UpdateReview = {
			// restaurantId: id as string,
			menu: foodName || "",
			price: Number(foodPrice),
			comment: foodReview || "",
			rating: 5
		};

		await updateReview(id, data);
		router.push("/user");
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;


	return (
		<div className="flex flex-col p-5 font-Poxppins">
			<h2 className="text font-bold text-3xl my-10">REVIEW</h2>

			<form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
				<select className="form-input" disabled name="" id="">
					<option value={data.restaurant.id}>{data.restaurant.title}</option>
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

import { CreateReview } from "lib/utils/interfaces";
import service from "./config";

const createReview = async (review: CreateReview) => {

	const access_token = localStorage.getItem("access_token");

	try {
		await service.post<CreateReview>("review", review, {
			headers: {
				"Authorization": "Bearer " + access_token || ""
			}
		});
	} catch (error) {
		console.log(error);
	}
};

const updateReview = async (id: string, review: CreateReview) => {

	const access_token = localStorage.getItem("access_token");

	try {
		await service.patch<CreateReview>(`review/${id}`, review, {
			headers: {
				"Authorization": "Bearer " + access_token || ""
			}
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteReview = async (id: string) => {

	try {
		await service.delete(`review/${id}`);
	} catch (error) {
		console.log(error);
	}
};

export {
	createReview,
	deleteReview,
	updateReview
};


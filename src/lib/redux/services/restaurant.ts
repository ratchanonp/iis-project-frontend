import { IRestaurant, IRestaurantInfo } from "lib/interfaces";
import { api } from "./api";

export const restaurantApi = api.injectEndpoints({
	endpoints: (build) => ({
		getRestaurants: build.query<Array<IRestaurant>, null>({
			query: () => "restaurant"
		}),
		getRestaurantById: build.query<IRestaurantInfo, string>({
			query: (restaurantId) => `restaurant/${restaurantId}`
		}),
		getRestaurantsByCafeteria: build.query<Array<IRestaurant>, string>({
			query: (cafeteriaId) => `restaurant/?cafeteria=${cafeteriaId}`
		})
	})
});
import { Restaurant, RestaurantInfo } from "lib/utils/interfaces";
import service from "./config";

const getRestaurants = async () => {
    return (await service.get<Restaurant[]>("restaurant")).data;
};

const getRestaurantId = async (id: string) => {
    return (await service.get<RestaurantInfo>(`restaurant/${id}`)).data;
};

export {
    getRestaurants,
    getRestaurantId
};


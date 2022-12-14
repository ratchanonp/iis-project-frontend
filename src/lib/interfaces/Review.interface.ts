import { Restaurant } from "./Restaurant.interface";

export interface Review {
    id: string
    restaurant: Restaurant
    cafeteria: string
    comment: string
    rating: number
    createAt: string
    updateAt: string
}

export interface CreateReview {
    restaurantId: string;
    rating: number;
    comment: string;
    menu: string;
    price: number;
}


export interface UpdateReview {
    rating: number;
    comment: string;
    menu: string;
    price: number;
}
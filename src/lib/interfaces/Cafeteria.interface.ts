import { Restaurant } from "./Restaurant.interface";

export interface Cafeteria {
    id: string;
    title: string;
    eng_title: string;
    map: string;
    imageUrl: string;
}

export interface CafeteriaInfo {
    id: string;
    title: string;
    eng_title: string;
    map: string;
    imageUrl: string;
    restaurant: Restaurant[];
}

export interface ICafeteria {
    id: string;
    title: string;
    eng_title: string;
    map: string;
    imageUrl: string;
}
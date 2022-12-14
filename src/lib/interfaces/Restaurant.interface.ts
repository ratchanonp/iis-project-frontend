import { Cafeteria, ICafeteria } from "./Cafeteria.interface";
import { Review } from "./Review.interface";

export interface Restaurant {
  id: string;
  title: string;
  rating: number;
  price: PriceRange;
  category: string[];
  imageUrl: string;
  open: string;
  about: string;
  tel: string;
  Cafeteria: Cafeteria;
}

export interface RestaurantInfo extends Restaurant {
  Review: Review[];
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface Period {
  day: Day;
  open: string;
  close: string;
}

enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export interface IRestaurant {
  id: string;
  title: string;
  about: string;
  open: string;
  tel: string;
  imageUrl: string;
}

export interface IRestaurantInfo extends IRestaurant {
  cafeteria: ICafeteria;
}

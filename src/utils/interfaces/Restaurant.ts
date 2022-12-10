export interface Restaurant {
  title: string;
  rating: number;
  price: PriceRange;
  category: string[];
  imageUrl: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

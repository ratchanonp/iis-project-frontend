export interface Restaurant {
  title: string;
  rating: number;
  price: PriceRange;
  category: string[];
  imageUrl: string;
  openPeriod?: Period[];
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

import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Card from "@ui/components/card/Cafeteria";
import RestaurantCard from "@ui/components/card/Restaurant";
import { Restaurant } from "@utils/interfaces/Restaurant";
import Navbar from "@ui/components/navbar/Navbar";


export default function HomePage() {
  const firstname = "อาตา";

  const restaurants: Array<Restaurant> = [
    {
      title: "ไก่ทอดวิดวะ",
      category: ["ของทอด", "อาหารอีสาน", "ยำ"],
      rating: 5.0,
      imageUrl: "https://via.placeholder.com/95",
      price: {
        min: 40,
        max: 100,
      },
    },
  ];

  return (
    <div className="flex flex-col font-Poppins  space-y-10">
      <div className="m-10">
        <div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col">
              <span className="text-5xl font-Kanit font-semibold text-primary">
                สวัสดี, {firstname}
              </span>
              <span className="text-3xl font-medium font-Kanit">
                วันนี้จะกินไฬดี
              </span>
            </div>
            <UserCircleIcon className="w-20 h-20" />
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-Kanit font-medium">โรงอาหาร</span>
              <span className="text-md font-Kanit font-medium text-primary leading-none">
                Cafeteria
              </span>
            </div>
            <span className="font-Kanit font-light flex text-sm">
              ดูเพิ่มเติม <ChevronRightIcon className="w-5 h-5" />
            </span>
          </div>
          <div className="grid grid-cols-2 mt-2 space-x-5">
            <Card title="หอพักนิสิต" />
            <Card title="อักษรศาสตร์" />
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-Kanit font-medium">
                ร้านอาหารยอดนิยม
              </span>
              <span className="text-md p-3 font-Kanit font-medium text-primary leading-none">
                Restaurant
              </span>
            </div>
            <span className="font-Kanit font-light text-sm flex">
              ดูเพิ่มเติม
            </span>
          </div>
          <div className=" flex overflow-x-auto">
            <span className="flex mx-3 my-1">
              {restaurants.map((restaurant, idx) => (
                <RestaurantCard key={idx} restaurant={restaurant} />
              ))}
            </span>
            <span className="flex mr-3 my-1">
              {restaurants.map((restaurant, idx) => (
                <RestaurantCard key={idx} restaurant={restaurant} />
              ))}
            </span>
            <div className="flex mr-3 my-1">
              {restaurants.map((restaurant, idx) => (
                <RestaurantCard key={idx} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

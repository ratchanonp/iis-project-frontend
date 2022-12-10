import { Restaurant } from "@utils/interfaces/Restaurant";
import Image from "next/image";
import Price from "./price/Price";
import Rating from "./rating/Rating";

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard = (props: Props) => {
  const {} = props;
  const { title, category, imageUrl } = props.restaurant;

  return (
    <div className="shadow-md rounded-xl font-Kanit w-40 ">
      <Image src={imageUrl} alt="title" width={95} height={95} />
      <div className="p-4">
        <h1>{title}</h1>
        <div className="flex space-x-5">
          <Rating score={5} />
          <Rating score={5} />
        </div>
        <div className="flex space-x-1">
          {category.map((item) => (
            <span className="text-xs text-gray-300" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

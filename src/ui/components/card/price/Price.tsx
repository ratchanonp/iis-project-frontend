import { StarIcon } from "@heroicons/react/20/solid";
import { PriceRange } from "@utils/interfaces/Restaurant";

interface Props {
  price: PriceRange;
}

const Price = (props: Props) => {
  const { price } = props;
  const { min} = price

  const backgroundColor = (price: number) => {
    if (price >= 100) {
      return "bg-red-500";
    } else if (price >= 80) {
      return "bg-yellow-500";
    } else {
      return "bg-green-500";
    }
  };

  return (
    <div
      className={`${backgroundColor(
        price
      )} rounded-full inline-flex px-1 text-white text-xs items-center`}
    >
      <StarIcon className="text-white w-3 h-3 mr-0.5" />
      {price.toFixed(0)}
    </div>
  );
};

export default Price;

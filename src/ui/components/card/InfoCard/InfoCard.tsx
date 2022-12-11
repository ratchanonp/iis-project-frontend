import { MapPinIcon } from "@heroicons/react/20/solid";
import OpenInfo from "./OpenInfo";
import RatingInfo from "./RatingInfo";

interface Props {
  //   openPeriod: Period;
  //   rating: number;
  //   map: string;
}

const InfoCard = () => {
  return (
    <div className="grid grid-cols-3 bg-gray-100 px-3 py-1 rounded-md mt-2">
      <OpenInfo />
      <RatingInfo rating={5} />
      <div>
        <MapPinIcon className="w-6 h-6 text-gray-500" />
      </div>
    </div>
  );
};

export default InfoCard;

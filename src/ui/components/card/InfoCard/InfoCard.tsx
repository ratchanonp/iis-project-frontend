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
      <div className="flex items-center justify-center">
        <MapPinIcon className="w-5 h-5 text-gray-500 mr-1" />
        <a href="" className="font-Kanit font-light">
          Google Maps
        </a>
      </div>
    </div>
  );
};

export default InfoCard;

import { MapPinIcon } from "@heroicons/react/20/solid";
import { OpenInfo, RatingInfo } from ".";

interface Props {
	openPeriod: string;
	rating: number;
	map: string;
}

const InfoCard = (props: Props) => {

	const { openPeriod, rating, map } = props;

	return (
		<div className="grid grid-cols-3 bg-gray-100 px-3 py-1 rounded-md mt-2">
			<OpenInfo />
			<RatingInfo rating={rating} />
			<div className="flex items-center justify-center">
				<MapPinIcon className="w-5 h-5 text-gray-500 mr-1" />
				<a href={map} className="font-Kanit font-light">
					Google Maps
				</a>
			</div>
		</div>
	);
};

export { InfoCard };


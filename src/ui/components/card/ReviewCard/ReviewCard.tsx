import { PencilIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Review } from "@utils/interfaces";
import dayjs from "dayjs";
import "dayjs/locale/th";
import relativeTime from "dayjs/plugin/relativeTime";
import { Rating } from "../rating";

dayjs.locale("th");
dayjs.extend(relativeTime);

interface Props {
    review: Review;
}

const ReviewCard = (props: Props) => {
	const { review } = props;
	const { restaurant, cafeteria, comment, rating, create_at } = review;
	return (
		<div className="font-Kanit font-light bg-gray-100 p-5 rounded-xl flex justify-between items-center">
			<div className="flex flex-col space-y-0.5">
				<div className="flex space-x-3">
					<p>{restaurant}</p>
					<p className="text-primary">{cafeteria}</p>
				</div>
				<div>
					<p className="text-xl">&ldquo;{comment}&rdquo;</p>
				</div>
				<div className="flex space-x-2 items-center">
					<Rating score={rating} />
					<p className="text-gray-400">{dayjs(create_at).fromNow()}</p>
				</div>
			</div>
			<div className="flex space-x-2">
				<div className="flex p-4 text-white bg-red-500 rounded-full"><TrashIcon className="w-5 h-5" /></div>
				<div className="flex p-4 text-white bg-amber-500 rounded-full"><PencilIcon className="w-5 h-5" /></div>
			</div>
		</div>
	);
};

export { ReviewCard };

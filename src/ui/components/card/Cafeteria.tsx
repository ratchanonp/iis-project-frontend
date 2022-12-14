import { Cafeteria } from "lib/utils/interfaces/Cafeteria.interface";
import Link from "next/link";

interface Props {
	cafeteria: Cafeteria
}

const CafeteriaCard = (props: Props) => {
	const { cafeteria } = props;
	const { id, title, imageUrl } = cafeteria;

	return (
		<Link href={`/cafeteria/${id}`} className={"shadow-md rounded-2xl overflow-hidden w-full h-48 relative"}>
			<div className="bg-primary absolute w-full h-48 opacity-40 z-10"></div>
			<div className="relative w-full h-48 ">
				<img src={imageUrl} alt={title} className="object-cover w-full h-48" />
			</div>
			<div className="absolute flex justify-center w-full bottom-2 z-20">
				<button className="bg-primary text-white font-Kanit w-[90%] rounded-full py-2">
					{title}
				</button>
			</div>
		</Link>
	);
};

export { CafeteriaCard };


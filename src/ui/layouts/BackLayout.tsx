import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

interface Props {
	children: React.ReactNode;
}

const BackLayout = (props: Props) => {
	const { children } = props;
	const router = useRouter();
	return (
		<div>
			<button onClick={() => router.back()} className="ml-5 mt-5 bg-gray-300 p-1 rounded-full">
				<ChevronLeftIcon className="w-6 h-6 text-white" />
			</button>
			{children}
		</div>
	);
};

export { BackLayout };


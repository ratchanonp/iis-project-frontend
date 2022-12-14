import { getMe } from "lib/api/user";
import { useQuery } from "react-query";

const Greeting = () => {

	const { data, error, isLoading } = useQuery("user", getMe);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;

	return (
		<div className="flex flex-col">
			<span className="text-5xl font-Kanit font-semibold text-primary">
				สวัสดี, {isLoading ? "loading" : data.fName}
			</span>
			<span className="text-3xl font-medium font-Kanit mt-1">
				วันนี้จะกินไฬดี
			</span>
		</div>
	);
};

export { Greeting };


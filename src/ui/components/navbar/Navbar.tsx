import { CubeIcon, HomeIcon, PencilIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
	return (
		<div className="w-screen md:w-[410px]">
			<nav className="bg-primary py-2 rounded-t-3xl relative">
				<ul className="grid grid-cols-3 text-white">
					<li className="flex flex-col w-full items-center text-center">
						<HomeIcon className="w-10 h-10" />
						Home
					</li>
					<li className="flex justify-center items-end">Review</li>
					<li className="flex flex-col items-center w-full text-center">
						<CubeIcon className="w-10 h-10" />
						Random
					</li>
				</ul>
				<div className="absolute -top-10 right-1/2 transform translate-x-1/2 bg-white border-4 border-primary rounded-full p-4 shadow">
					<PencilIcon className="w-10 h-10 text-primary" />
				</div>
			</nav>
		</div>
	);
};

export { Navbar };

import { CubeIcon, HomeIcon, PencilIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="w-screen md:w-[410px]">
			<nav className="bg-primary py-2 rounded-t-3xl relative">
				<ul className="grid grid-cols-3 text-white">
					<li className="flex flex-col w-full items-center text-center">
						<Link href={"/home"} className="flex flex-col w-full items-center text-center">
							<HomeIcon className="w-10 h-10" />
							Home
						</Link>
					</li>
					<li className="flex justify-center items-end">Review</li>
					<li className="flex flex-col items-center w-full text-center">
						<Link href={"/random"} className="flex flex-col w-full items-center text-center">
							<CubeIcon className="w-10 h-10" />
							Random
						</Link>
					</li>
				</ul>
				<div className="absolute -top-10 right-1/2 transform translate-x-1/2 bg-white border-4 border-primary rounded-full p-4 shadow">
					<Link href={"review"}>
						<PencilIcon className="w-10 h-10 text-primary" />
					</Link>
				</div>
			</nav>
		</div>
	);
};

export { Navbar };

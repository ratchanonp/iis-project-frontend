import { Navbar } from "@ui/components/navbar";

interface Props {
	children: React.ReactNode;
}

const MainLayout = (props: Props) => {
	const { children } = props;
	return (
		<div className="md:relative">
			<div className="fixed z-20 bottom-0 transform md:absolute md:-bottom-14">
				<Navbar />
			</div>
			{children}
		</div>
	);
};

export { MainLayout };


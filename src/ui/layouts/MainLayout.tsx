import { Navbar } from "@ui/components/navbar";

interface Props {
	children: React.ReactNode;
}

const MainLayout = (props: Props) => {
	const { children } = props;
	return (
		<div className="static">
			<div className="absolute bottom-0 transform ">
				<Navbar />
			</div>
			{children}
		</div>
	);
};

export { MainLayout };


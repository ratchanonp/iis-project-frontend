import { Navbar } from "@ui/components/navbar";

interface Props {
	children: React.ReactNode;
}

const MainLayout = (props: Props) => {
	const { children } = props;
	return (
		<div>
			{children}
			<Navbar />
		</div>
	);
};

export { MainLayout };


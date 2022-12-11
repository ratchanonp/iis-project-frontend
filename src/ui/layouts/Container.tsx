interface Props {
	children: React.ReactNode;
}

const Container = (props: Props) => {
	const { children } = props;
	return <div className="flex flex-col mx-5 mt-16">{children}</div>;
};

export { Container };


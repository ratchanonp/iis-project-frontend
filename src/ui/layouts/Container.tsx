interface Props {
	children: React.ReactNode;
}

const Container = (props: Props) => {
	const { children } = props;
	return <div className="flex flex-col m-5">{children}</div>;
};

export { Container };


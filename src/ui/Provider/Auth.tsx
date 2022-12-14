import { RootState } from "lib/redux/store";
import Router from "next/router";
import { useSelector } from "react-redux";

interface Props {
	children: React.ReactNode;
	requiredAuth?: boolean;
}

const Auth = (props: Props) => {

	const { children, requiredAuth } = props;
	const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

	if (requiredAuth && !isAuth) Router.push("/auth/login");

	return <>
		{children}
	</>;
};

export default Auth;
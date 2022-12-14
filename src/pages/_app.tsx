import Auth from "@ui/Provider/Auth";
import { store } from "lib/redux/store";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import "../styles/form.css";
import "../styles/globals.css";


export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
	requiredAuth?: boolean;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {

	const getLayout = Component.getLayout ?? ((page) => page);


	return getLayout(
		<Provider store={store}>
			<Auth requiredAuth={Component.requiredAuth}>
				<Component {...pageProps} />
			</Auth>
		</Provider>
	);
}

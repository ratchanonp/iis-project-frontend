import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/form.css";
import "../styles/globals.css";



export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return getLayout(<Component {...pageProps} />);
}

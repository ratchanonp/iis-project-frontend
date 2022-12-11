import { Head, Html, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";

export default function Document() {

	const router = useRouter();
	
	return (
		<Html>
			<Head />
			<body className="h-screen w-screen flex justify-center items-center space-x-20">
				<div className="h-[932px] w-[430px] border-[0.75rem] border-neutral-800 rounded-[3rem] relative overflow-y-scroll overflow-x-hidden">
					<Main />
					<NextScript />
				</div>
				<div className="flex flex-col font-Kanit">
					<h1 className="text-9xl font-semibold text-primary">จะกินไฬดี</h1>
					<h2 className="text-5xl font-medium">Web Application</h2>
					
					<QRCode value={""} size={150} className="mt-20"/>
				</div>
			</body>
		</Html>
	);
}

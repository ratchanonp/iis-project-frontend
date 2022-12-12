import { Head, Html, Main, NextScript } from "next/document";
import QRCode from "react-qr-code";

export default function Document() {
	return (
		<Html>
			<Head />
			<body className="h-screen w-screen flex justify-center items-center space-x-20">
				<div className="h-[932px] w-[430px] border-[0.75rem] border-neutral-800 rounded-[3rem] relative overflow-y-scroll overflow-x-hidden">
					<Main />
					<NextScript />
				</div>
				<div className="flex flex-col font-Kanit">
					<h1 className="text-7xl font-semibold text-primary">จะกินไ<span className="text-9xl font-bold">ฬ</span>ดี</h1>
					<h2 className="text-5xl font-medium underline decoration-primary">Web Application</h2>

					<p className="mt-10 text-2xl leading-10">มาเรียนที่<span className="underline decoration-primary decoration-wavy mx-2">จุฬา</span>แล้วไม่รู้<span className="underline decoration-primary decoration-wavy mx-2">จะกินไรดี</span></p>
					<p className="text-2xl"><span className="text-primary">จะกินไฬดี</span> ช่วยได้</p>

					<QRCode value={"https://iis-project-frontend.vercel.app/"} size={200} className="mt-20" />
				</div>
			</body>
		</Html>
	);
}

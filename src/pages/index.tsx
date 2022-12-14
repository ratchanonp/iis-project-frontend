
export default function WelcomePage() {
	return (
		<div className="flex items-end h-[932px] w-full bg-no-repeat bg-cover bg-[url('/welcomeimage.png')] ">
			<div className="bg-gradient-to-t from-black via-black w-full h-fit text-white font-Kanit text-center flex flex-col items-center pb-20 px-5">
				<h1 className="text-7xl w-fit font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
					จะกินไฬดี
				</h1>
				<p className="mb-10 font-light mt-2">
					แอพที่จะช่วยคุณได้เห็นรีวิวโรงอาหารในรั้วจุฬาฯและ <br />{" "}
					ยังสามารถรีวิวร้านอาหารได้เองอีกด้วย
				</p>
				<a
					href="auth/login"
					className="bg-primary px-20 py-2 rounded-full text-2xl uppercase"
				>Get Start
				</a>
			</div>
		</div>
	);
}
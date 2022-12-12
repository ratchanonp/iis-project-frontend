import { BackLayout } from "@ui/layouts";
import { faculty } from "@utils/constant/data";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement } from "react";
const RegisterPage:NextPageWithLayout = () => {
	return (
		<div className="flex flex-col mx-5 font-Poppins">
			<h1 className="text-6xl text-center font-bold uppercase mt-20">
        Register
			</h1>
			<form action="" className="flex flex-col space-y-5 mt-20">
				<input
					className="form-input"
					type="email"
					placeholder="Email address"
				/>
				<input className="form-input" type="text" placeholder="Firstname" />
				<input className="form-input" type="text" placeholder="Lastname" />
				<select className="form-input" name="" id="" defaultValue="none">
					<option value="none" disabled>
            ------- Faculty ------
					</option>
					{faculty.map((faculty, idx) => (
						<option key={idx} value={faculty}>
							{faculty}
						</option>
					))}
				</select>
				<input className="form-input" type="password" name="" id="" />
				<button type="submit" className="btn-primary">
          Register
				</button>
			</form>
		</div>
	);
};

RegisterPage.getLayout = (page: ReactElement) => (
	<BackLayout>{page}</BackLayout>
);

export default RegisterPage;

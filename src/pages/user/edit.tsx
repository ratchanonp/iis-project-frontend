import { BackLayout, Container } from "@ui/layouts";
import { faculty } from "lib/constant/data";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement } from "react";

const UserEdit: NextPageWithLayout = () => {
	return (
		<div>
			<h1 className="text-5xl font-medium font-Kanit uppercase text-center">Edit Profile</h1>

			<form className="flex flex-col space-y-4 mt-10" action="">
				<input className="form-input" placeholder="Email Address" type="email" />
				<input className="form-input" placeholder="Firstname" type="text" />
				<input className="form-input" placeholder="Lastname" type="text" />
				<select className="form-input" name="" id="">
					{faculty.map((fac, idx) => (
						<option key={idx} value={fac}>{fac}</option>
					))}
				</select>
				<input className="form-input" placeholder="Password" type="password" />
				<button className="btn-primary">Save</button>
			</form>
		</div>
	);
};

UserEdit.getLayout = (page: ReactElement) => (
	<BackLayout>
		<Container>{page}</Container>
	</BackLayout>
);

export default UserEdit;
import { login } from "@utils/api/auth";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function LoginPage() {

	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		onSubmit: async (values) => {
			console.log("submit");
			const { email, password } = values;
			const isSuccess = await login(email, password);

			console.log(isSuccess);

			Swal.fire({
				icon: "success",
			});

			if (isSuccess) {
				router.push("/home");
			} else {
				console.log("error");
			}
		}
	});


	return (
		<div className="flex flex-col items-center p-5 font-Kanit text-center space-y-10 mt-20">
			<h1 className="text-7xl w-fit font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FFE3E3]">
				จะกินไฬดี
			</h1>
			<h2 className="text-center font-Kanit text-3xl font-semibold">LOGIN</h2>
			<form onSubmit={formik.handleSubmit} className="flex flex-col space-y-3 items-center w-full">
				<input
					className="form-input"
					type="email"
					name="email"
					id="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					placeholder="Email address"
				/>
				{formik.errors.email ? <div>{formik.errors.email}</div> : null}

				<input
					className="form-input"
					type="password"
					name="password"
					id="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					placeholder="Password"
				/>
				{formik.errors.password ? <div>{formik.errors.password}</div> : null}
				<button className="btn-primary" type="submit">
					login
				</button>
			</form>

			<div className="w-full h-[1px] bg-gradient-to-l from-[#EB4174] to-[#FFE3E3]" />

			<div className="w-full space-y-5">
				<p className="text-center text-primary font-light ">
					Don’t have an account yet?
				</p>
				<button className="uppercase border-primary text-primary py-5 font-bold border rounded-full w-full text-xl">
					register
				</button>
			</div>
		</div >
	);
}

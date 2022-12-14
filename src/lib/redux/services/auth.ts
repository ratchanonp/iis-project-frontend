import { ICredential, ILoginResonse, IRegister } from "lib/interfaces/Auth.interface";
import { IUser } from "lib/interfaces/User.interface";
import { api } from "./api";

export const authApi = api.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<ILoginResonse, ICredential>({
			query(credential) {
				return {
					url: "auth/login",
					method: "POST",
					body: credential
				};
			}
		}),
		register: build.mutation<IUser, IRegister>({
			query: (data) => ({
				url: "auth/register",
				method: "POST",
				body: data
			}),
		})
	})
});

export const {
	useLoginMutation,
	useRegisterMutation
} = authApi;

export const {
	endpoints: { login, register }
} = authApi;
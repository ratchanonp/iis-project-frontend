import { IUser } from "lib/interfaces/User.interface";
import { api } from "./api";

export const userApi = api.injectEndpoints({
	endpoints: (build) => ({
		getUser: build.query<IUser, null>({
			query: () => "user"
		}),
		updateUser: build.mutation<IUser, Partial<IUser>>({
			query(arg) {
				const { id, ...body } = arg;
				return {
					url: "user",
					method: "PATCH",
					body
				};
			},
		})
	})
});

export const {
	endpoints: { getUser, updateUser }
} = userApi;
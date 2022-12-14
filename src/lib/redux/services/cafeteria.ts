import { ICafeteria } from "lib/interfaces/Cafeteria.interface";
import { api } from "./api";

export const cafeteriaApi = api.injectEndpoints({
	endpoints: (build) => ({
		getCafeterias: build.query<Array<ICafeteria[]>, null>({
			query: () => "cafeteria"
		}),
		getCafeteriaById: build.query<ICafeteria, string>({
			query: (cafeteriaId) => `cafeteria/${cafeteriaId}`
		})
	})
});

export const {
	endpoints: { getCafeterias, getCafeteriaById }
} = cafeteriaApi;

export const {
	useGetCafeteriasQuery,
	useGetCafeteriaByIdQuery
} = cafeteriaApi;

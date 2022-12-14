import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3000",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.access_token;
		if (token) headers.set("authentication", `Bearer ${token}`);
		return headers;
	},
});

export const api = createApi({
	reducerPath: "splitApi",
	baseQuery: baseQuery,
	tagTypes: ["Auth"],
	endpoints: () => ({}),
});
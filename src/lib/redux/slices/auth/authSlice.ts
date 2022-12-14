import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "lib/interfaces/Auth.interface";
import { authApi } from "lib/redux/services/auth";
import { RootState } from "lib/redux/store";
import { getLocalStore } from "lib/utils/localStore";

const token = getLocalStore("access_token");

const initialState: IAuthState = {
	access_token: token,
	isAuthenticated: !!token
};

const slice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: () => initialState
	},
	extraReducers: (builder) => {
		builder.addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
			console.log("pending", action);
		}).addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
			console.log("fulfilled", action);
			state.isAuthenticated = true;
			state.access_token = action.payload.access_token;
		}).addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
			console.log("rejected", action);
		});
	},
});

export const { logout } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
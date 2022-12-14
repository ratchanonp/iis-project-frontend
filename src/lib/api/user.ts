import service from "./config";

const getMe = async () => {
	const access_token = localStorage.getItem("access_token");

	console.log("access_token", access_token);

	return await (await service.get("user/me", {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})).data;
};

const getProfile = async () => {
	const access_token = localStorage.getItem("access_token");

	return await (await service.get("user/profile",
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}
	)).data;
};

export {
	getMe,
	getProfile
};


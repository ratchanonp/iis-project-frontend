import service from "./config";

const login = async (username: string, password: string): Promise<boolean> => {
	try {
		const response = await service.post("auth/login", {
			username,
			password,
		});

		localStorage.setItem("access_token", response.data.access_token);

		return response.data;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export {
	login,
};


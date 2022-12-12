import service from "./config";

const login = async (username: string, password: string): Promise<boolean> => {
	try {
		const response = await service.post("/login", {
			username,
			password,
		});
		return response.data;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export {
	login,
};


const getCokkie = (name: string) => {
	if (typeof window === "undefined") return null;

	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()?.split(";").shift();

	return null;
};

const setCookie = (name: string, value: string, duration: number) => {
	if (typeof window === "undefined") return null;

	const expires = new Date(Date.now() + duration).toUTCString();
	document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const removeCookie = (name: string) => {
	if (typeof window === "undefined") return null;

	document.cookie = `${name}=; max-age=-99999999;`;
};

export { getCokkie, setCookie, removeCookie };

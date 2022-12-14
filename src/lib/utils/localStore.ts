const setLocalStore = (key: string, value: string) => {
	if (typeof window !== "undefined") {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

const getLocalStore = (key: string): string | null => {
	if (typeof window !== "undefined") {
		const value = localStorage.getItem(key);
		if (!value) return null;
		return value;

	} return null;
};

const removeLocalStore = (key: string) => {
	if (typeof window !== "undefined") {
		localStorage.removeItem(key);
	}
};

export { setLocalStore, getLocalStore, removeLocalStore };


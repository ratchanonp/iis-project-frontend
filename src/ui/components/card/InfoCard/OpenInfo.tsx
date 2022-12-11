
const OpenInfo = () => {
	const isOpen = true;

	return (
		<div className="flex items-center justify-center">
			<span
				className={`${isOpen ? "text-green-500" : "text-red-500"
				} font-bold font-Kanit`}
			>
				{isOpen ? "เปิด" : "ปิด"}
			</span>
			<span className="font-Kanit font-light text-sm ml-1">จนถึง 17:00 น.</span>
		</div>
	);
};

export { OpenInfo };


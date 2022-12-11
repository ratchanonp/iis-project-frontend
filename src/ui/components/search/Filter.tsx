import React from "react";

const Filter = () => {
	const filterList = ["อาหารจานหลัก", "เครื่องดื่ม", "ของหวาน"];

	return (
		<div className="flex space-x-2 mt-4">
			{filterList.map((filter, idx) => {
				return (
					<div key={idx} className="">
						<input
							type="checkbox"
							className="peer hidden"
							name=""
							id={filter}
						/>
						<label
							className=" peer-checked:bg-primary text-white bg-gray-300 px-4 py-1 rounded-full font-Kanit"
							htmlFor={filter}
						>
							{filter}
						</label>
					</div>
				);
			})}
		</div>
	);
};

export { Filter };


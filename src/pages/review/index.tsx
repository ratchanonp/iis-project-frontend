import { useState } from "react";
import ComboBoxInput from "ui/components/form/select/ComboBox";

export default function Review() {
  const restaurant: { name: String }[] = [
    { name: "ร้าน 1" },
    { name: "ร้าน 2" },
    { name: "ร้าน 3" },
    { name: "ร้าน 4" },
    { name: "ร้าน 5" },
  ];

  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurant[0]);

  return (
    <div className="flex flex-col p-5 font-Poxppins">
      <h2 className="text font-bold text-3xl my-10">REVIEW</h2>
      <div className="overflow-auto">
        <input
          className="px-20 py-5 m-5 border rounded-lg text-center text-xl"
          type="text"
          name=""
          id=""
          placeholder="--------โรงอาหาร--------"
        />
        <ComboBoxInput />
        <span>
          <input
            className="px-10 py-5 border mt-5 rounded-lg text text-xl"
            type="text"
            name=""
            id=""
            placeholder="ชื่อเมนูอาหาร"
          />
        </span>
        <span>
          <input
            className="px-10 py-5 border mt-5 rounded-lg text text-xl"
            type="text"
            name=""
            id=""
            placeholder="ราคา฿฿"
          />
        </span>
        <span>
          <textarea
            className="px-10 py-20 border mt-5 rounded-lg text text-xl"
            name=""
            id=""
            placeholder="เขียนรีวิว"
          />
        </span>
        <span>
          <input
            className="px-10 py-20 border mt-5 rounded text text-xl"
            type="text"
            name=""
            id=""
            placeholder="รูปภาพ"
          />
        </span>

        <button className="uppercase mt-5 bg-primary py-1 text-white font-bold rounded-full">
          choose file
        </button>
        <p className="text-center font-Kanit">
          ให้คะแนนร้านอาหารนี้
        </p>
        <button className="uppercase mt-10 bg-primary py-5 text-white font-bold rounded-full">
          done
        </button>

        <hr className="" />
      </div>
    </div>
  );
}

import { useState } from "react";
import ComboBox from "ui/components/form/select/ComboBox";

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
      <input
        className="px-10 py-5 border rounded-full text-center text-xl"
        type="text"
        name=""
        id=""
        placeholder="-----------โรงอาหาร-----------"
      />
      <ComboBox />
      <input
        className="px-10 py-5 border mt-5 rounded-full text text-xl"
        type="text"
        name=""
        id=""
        placeholder="ชื่อเมนูอาหาร"
      />
      <input
        className="px-10 py-5 border mt-5 rounded-full text text-xl"
        type="text"
        name=""
        id=""
        placeholder="ราคา฿฿"
      />
      <textarea
        className="px-10 py-20 border mt-5 rounded text text-xl"
        name=""
        id=""
        placeholder="เขียนรีวิว"
      />
      <input
        className="px-10 py-20 border mt-5 rounded text text-xl"
        type="text"
        name=""
        id=""
        placeholder="รูปภาพ"
      />
      <button className="uppercase mt-5 bg-primary py-1 text-white font-bold rounded-full">
        choose file
      </button>
      <p className="text-center text-primary font-light">
        ให้คะแนนร้านอาหารนี้
      </p>
      <button className="uppercase mt-10 bg-primary py-5 text-white font-bold rounded-full">
        done
      </button>

      <hr className="" />
    </div>
  );
}

import React from "react";
import Rating from "@ui/components/card/rating/Rating";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";

type Props = {};

const ReviewCard = (props: Props) => {
  return (
    <div className="bg-gray-50 p-4 rounded-2xl font-Kanit flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex">
          <p className="mr-4">ร้านป้าเบลอ</p>
          <p className="text-primary">อักษรศาสตร์</p>
        </div>
        <p className="text-xl">&ldquo;อร่อยมากเลยค่ะ&rdquo;</p>
        <div className="flex space-x-3">
          <Rating score={5} />
          <p className=" text-sm text-gray-500 font-light">5 วันก่อน</p>
        </div>
      </div>
      <div className="flex space-x-2 ">
        <div className="bg-red-500 rounded-full text-white p-2 ">
          <TrashIcon className="w-8 h-8" />
        </div>
        <div className="bg-amber-500 rounded-full text-white p-2 flex items-center">
          <PencilIcon className="w-8 h-6" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

import { HomeIcon } from "@heroicons/react/20/solid";
import {CubeIcon  } from "@heroicons/react/20/solid";
import { PencilIcon } from "@heroicons/react/20/solid";


export default function Navbar() {
    return (
      <div>
        
        <nav className=" static items-center  flex-wrap bg-primary  mb-0 rounded-t-3xl">
          <div className="w-full justify-around flex lg:flex lg:items-center lg:w-auto">
            <a
              href="#responsive-header"
              className="block mt-4   lg:inline-block lg:mt-0 font-Kanit text-xl text-white hover:text-gray-200 mr-4"
            >
              <HomeIcon className="w-10 h-10 " />
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-15  lg:inline-block lg:mt-0 font-Kanit text-xl text-white hover:text-gray-200 mr-4"
            >
              <div className=" absolute border-8  border-primary bg-white rounded-full w-20 h-20 bottom-10  ">
                <PencilIcon className="w-10 h-10 text-primary mx-3 my-3 " />
              </div>
              Review
            </a>
            <a
              href="#responsive-header"
              className="block mt-4  lg:inline-block lg:mt-0 font-Kanit text-xl text-white hover:text-gray-200 mr-4"
            >
              <CubeIcon className="w-10 h-10 " />
              Random
            </a>
          </div>
        </nav>
      </div>
    );
}

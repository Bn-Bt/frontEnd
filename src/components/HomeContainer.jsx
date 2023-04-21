import React from "react";
import Delivery from "../img/delivery.png";
import HeroBG from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-2 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Safe and Reliable
          </p>
          <div className="w-8 bg-white h-8 rounded-full p-[1.5px] overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain bg-white"
              alt="bike"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          #1 Hospital Equipments in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4.5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        To make medical equipment and supplies easily available & accessible in the rural areas and enabling healthcare providers to deliver the best patient care in most efficient and cost-effective way.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBG}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="beautiful-bg "
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((item) => (
              <div
                key={item.id}
                className="w-190 p-5 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={item.imageSrc}
                  className="w-40 h-52 -mt-20"
                  alt="icecream"
                />
                <p className="text-lg w-max font-semibold text-textColor mt-3">
                  {item.name}
                </p>
                <p className="text-sm w-max text-lighttextGray font-semibold my-1">
                  {item.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">₹</span> {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;

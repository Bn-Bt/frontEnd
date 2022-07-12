import React from "react";
import image1 from "../images/1.webp";
import image2 from "../images/Our-motto.png"
import image3 from "../images/bagofmoney.jpg"
import image4 from "../images/help.jpg"
function Hero() {
  return (
    <div>
    <div className="pt-4 xl:mx-40">
      <div className="flex flex-col lg:flex-row bg-starGreen border rounded-2xl">
        <div className="flex-none md:w-6/12 relative">
          <div className="absolute w-full h-full border rounded-2xl bg-[url('/src/images/help.jpg')] bg-contain lg:bg-cover lg:bg-center"></div>
        </div>
        <img src={image1} alt="coffee" className="lg:hidden" />
        <div className="p-10 sm:p-24 mx-12 text-center">
          <p className="text-[50px] font-black">
            Sahay 
          </p>
          <p className="text-[24px] py-2 mt-2">
            Request the equipments you need  , and we will connect you to the donors.
          </p>
          <button className="mt-3 border-solid border-black border-2 rounded-full px-5 py-1 text-center font-bold hover:bg-black hover:text-white transition hover:ease-in-out duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>

    <section class="">
  <div class="flex flex-wrap justify-center gap-10 mx-auto md:flex-nowrap p-12">

    <a href="">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={image2} alt="blog"/>
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class="">Out Moto</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ut iusto. Ducimus sed sapiente laudantium molestias suscipit? Dolore deserunt molestias, mollitia, saepe aliquam sint labore quibusdam consequatur nemo.
            </p>
          </div>
        </div>
      </div>
    </a>

    <a href="">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={image4} alt="blog" />
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class="">For Needed Hospitals</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolor id adipisci quis, minima ratione aliquid est quod ipsum odit alias eveniet repellendus nihil impedit qui quae laudantium quos maiores!</p>
          </div>
        </div>
      </div>
    </a>

    <a href="">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={image3} alt="blog" />
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class="">For Donors </span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit optio dicta consectetur, maxime vel ipsa! Modi officia omnis saepe aliquam dolorum repellendus, quod quaerat sint, iste, obcaecati laudantium labore.</p>
          </div>
        </div>
      </div>
    </a>

  </div>
</section>
    <div className="border my-8">
      </div>
    </div>
  );
}

export default Hero;

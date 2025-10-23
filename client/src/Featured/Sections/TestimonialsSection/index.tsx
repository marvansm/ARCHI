import HeadingText from "../../Components/Common/HeadingText";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container mx-auto max-w-[1336px] px-[60px] py-8 mt-20">
      <HeadingText title="Testimonials" desc="What People Are Saying" />
      <div className="my-[60px]">
        <Swiper
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
          navigation={{}}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-12 gap-[72px] ">
              <div className="col-span-5">
                <img
                  src="https://cdn.prod.website-files.com/68519fc02007af8091e4b3e4/6851a0992f09b6a190d6b286_user-img.webp"
                  alt=""
                  className="w-full h-[31.75em] object-cover rounded-[25px]"
                />
              </div>
              <div className="col-span-7 py-8">
                <div className="stars flex items-center justify-start mb-6">
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                </div>
                <h2 className="mb-6 text-start text-[36px] font-semibold leading-[110%] tracking-[-1px]">
                  "Amazing Products"
                </h2>
                <p className=" text-start text-[20px] text-[#667085] ">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nisi ipsum, porttitor ut massa sit amet, pharetra ultricies
                  tortor. Nam hendrerit aliquam nisl, at maximus enim rhoncus
                  ac. Fusce sed leo porttitor, finibus lacus sed, fringilla
                  nunc.”
                </p>
                <div className="w-full h-px bg-[#e4e7ec] my-[82px]"></div>
                <ul className="flex items-center justify-between">
                  <li>
                    <div className="text-start">
                      <h2 className="tracking-[-.5px] text-[1.875em] font-semibold leading-[100%] mb-2">
                        Brooklyn
                      </h2>
                      <h3 className="text-[18px] text-[#667085] leading-[140%] font-medium">
                        Lorem ipsum dolor sit.
                      </h3>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div
                      ref={prevRef}
                      className="swiper-button-prev-custom border w-14 h-14 rounded-full flex items-center justify-center border-[#d0d5dd] text-[16px] hover:bg-[#C0F377] hover:border-white transition-all duration-300"
                    >
                      <button>
                        <ChevronLeft />
                      </button>
                    </div>
                    <div
                      ref={nextRef}
                      className="swiper-button-next-custom border w-14 h-14 rounded-full flex items-center justify-center border-[#d0d5dd] text-[16px] hover:bg-[#C0F377] hover:border-white transition-all duration-300"
                    >
                      <button>
                        <ChevronRight />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-12 gap-[72px] ">
              <div className="col-span-5">
                <img
                  src="https://cdn.prod.website-files.com/68519fc02007af8091e4b3e4/6851a0992f09b6a190d6b286_user-img.webp"
                  alt=""
                  className="w-full h-[31.75em] object-cover rounded-[25px]"
                />
              </div>
              <div className="col-span-7 py-8">
                <div className="stars flex items-center justify-start mb-6">
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                </div>
                <h2 className="mb-6 text-start text-[36px] font-semibold leading-[110%] tracking-[-1px]">
                  "Amazing Products"
                </h2>
                <p className=" text-start text-[20px] text-[#667085] ">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nisi ipsum, porttitor ut massa sit amet, pharetra ultricies
                  tortor. Nam hendrerit aliquam nisl, at maximus enim rhoncus
                  ac. Fusce sed leo porttitor, finibus lacus sed, fringilla
                  nunc.”
                </p>
                <div className="w-full h-px bg-[#e4e7ec] my-[82px]"></div>
                <ul className="flex items-center justify-between">
                  <li>
                    <div className="text-start">
                      <h2 className="tracking-[-.5px] text-[1.875em] font-semibold leading-[100%] mb-2">
                        Brooklyn
                      </h2>
                      <h3 className="text-[18px] text-[#667085] leading-[140%] font-medium">
                        Lorem ipsum dolor sit.
                      </h3>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="border w-14 h-14 rounded-full flex items-center justify-center border-[#d0d5dd] text-[16px] hover:bg-[#C0F377] hover:border-white transition-all duration-300">
                      <button>
                        <ChevronLeft />
                      </button>
                    </div>
                    <div className="border w-14 h-14 rounded-full flex items-center justify-center border-[#d0d5dd] text-[16px] hover:bg-[#C0F377] hover:border-white transition-all duration-300">
                      <button>
                        <ChevronRight />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-12 gap-[72px] ">
              <div className="col-span-5">
                <img
                  src="https://cdn.prod.website-files.com/68519fc02007af8091e4b3e4/6851a0992f09b6a190d6b286_user-img.webp"
                  alt=""
                  className="w-full h-[31.75em] object-cover rounded-[25px]"
                />
              </div>
              <div className="col-span-7 py-8">
                <div className="stars flex items-center justify-start mb-6">
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                  <svg
                    width="2.4375em"
                    height="2.1325em"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6633 0.83667L24.0779 14.4237L38.3641 14.4237L26.8064 22.8209L31.221 36.4079L19.6633 28.0106L8.10549 36.4079L12.5202 22.8209L0.962389 14.4237L15.2486 14.4237L19.6633 0.83667Z"
                      fill="#C1F377"
                    ></path>
                  </svg>
                </div>
                <h2 className="mb-6 text-start text-[36px] font-semibold leading-[110%] tracking-[-1px]">
                  "Amazing Products"
                </h2>
                <p className=" text-start text-[20px] text-[#667085] ">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nisi ipsum, porttitor ut massa sit amet, pharetra ultricies
                  tortor. Nam hendrerit aliquam nisl, at maximus enim rhoncus
                  ac. Fusce sed leo porttitor, finibus lacus sed, fringilla
                  nunc.”
                </p>
                <div className="w-full h-px bg-[#e4e7ec] my-[82px]"></div>
                <ul className="flex items-center justify-between">
                  <li>
                    <div className="text-start">
                      <h2 className="tracking-[-.5px] text-[1.875em] font-semibold leading-[100%] mb-2">
                        Brooklyn
                      </h2>
                      <h3 className="text-[18px] text-[#667085] leading-[140%] font-medium">
                        Lorem ipsum dolor sit.
                      </h3>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="border w-14 h-14 rounded-full flex items-center justify-center border-[#d0d5dd] text-[16px] hover:bg-[#C0F377] hover:border-white transition-all duration-300">
                      <button>
                        <ChevronLeft />
                      </button>
                    </div>
                    <div className="border w-14 h-14 rounded-full flex items-center justify-center border-[#d0d5dd] text-[16px] hover:bg-[#C0F377] hover:border-white transition-all duration-300">
                      <button>
                        <ChevronRight />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;

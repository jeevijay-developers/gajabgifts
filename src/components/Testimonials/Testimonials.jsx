import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Abhishek Yadav",
    img: "/people/1.jpg",
    text: "Ordered a custom photo mug for my sister’s birthday—it turned out amazing! The print quality was sharp and the delivery was quick. She loved it!",
  },
  {
    name: "Vishal",
    img: "/people/2.jpg",
    text: "I gifted my friend a personalized cushion with our college photo on it. The fabric was super soft and the print looked really vibrant. Totally recommend it!",
  },
  {
    name: "Ajit Singh",
    img: "/people/3.jpg",
    text: "Got a customized T-shirt with my dog's face on it—it's my new favorite tee! Great fabric quality and the print hasn’t faded even after multiple washes.",
  },
  {
    name: "Keshav Kumar",
    img: "/people/4.jpg",
    text: "I was skeptical about how the photo would look on a magic mug, but it came out beautifully! The heat-reveal effect is super fun and everyone at work was impressed.",
  },
  {
    name: "Lakshay Saxena",
    img: "/people/5.jpg",
    text: "Bought a custom photo frame for my parents’ anniversary and they absolutely adored it. The finish was elegant and the quality exceeded expectations.",
  },
  {
    name: "George",
    img: "/people/6.jpg",
    text: "I keep coming back to this store for gifting. The keychains, mugs, frames—everything is customizable and well-made. Great service and packaging too!",
  }  
];

const Testimonials = () => {
  return (
    <div className="w-full bg-gradient-to-b from-neutral-50 to-slate-100 py-16 text-center">
      <div className="flex items-center justify-center gap-x-4 md:gap-x-7">
        {[...Array(5)].map((_, idx) => (
          <FaStar
            className="text-2xl md:text-3xl lg:text-5xl "
            key={idx}
            style={{ color: "#ffd319"}}
          />
        ))}
      </div>
      <div className="px-6 font-[lora] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] text-center">
        Testimonials
      </div>

      <div className="mt-10 px-4 md:px-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-7 text-left shadow-sm">
                <h4 className="mb-4 font-lexend font-normal leading-relaxed text-slate-600">
                  "{t.text}"
                </h4>
                <div className="mt-4 flex items-center space-x-3">
                  <figure className="h-10 w-10 overflow-hidden rounded-full">
                    <img src={t.img} className="h-full w-full object-cover" alt={t.name} />
                  </figure>
                  <p className="font-lexend text-xl font-medium text-blue-950">
                    {t.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

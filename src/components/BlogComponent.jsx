import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogComponent = () => {
  const blogPosts = [
    {
      id: 1,
      date: "July 10, 2024",
      title:
        "Settling into a new home: Strategies for an effortless movement, hassle free",
    },
    {
      id: 2,
      date: "July 12, 2024",
      title: "How to Pack Your Belongings Efficiently for a Long Distance Move",
    },
    {
      id: 3,
      date: "July 15, 2024",
      title:
        "Settling into a new home: Strategies for an effortless movement, hassle free",
    },
    {
      id: 4,
      date: "July 18, 2024",
      title:
        "Choosing the Right Movers: What You Need to Consider Before Hiring",
    },
  ];

  return (
    <section className="bg-[#282B2E] text-white py-12 lg:px-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">THE SMOOTH MOVE BLOG</h1>
        <p className="text-lg mt-2">
          Moving and Relocation Tips and Everything in Between
        </p>
        <p className="text-gray-400 mt-2">
          Check out our blog for helpful tips and guides on making your move as
          smooth as possible. Topics include packing tips, moving checklists,
          and more.
        </p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="max-w-screen-lg mx-auto"
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="max-w-lg  border-[1px] border-[##535558]  mx-4 md:mx-auto flex flex-col justify-center items-center text-center overflow-hidden">
              <img
                src="/truck.png"
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                <button className=" bg-[#FF3333] mt-6 hover:bg-red-400 text-white px-6 font-light text-xs py-2 rounded-xs  transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogComponent;

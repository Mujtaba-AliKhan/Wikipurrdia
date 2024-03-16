import React from "react";
import "./HomeApp.css";
import catsData from "../catsData.json";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LuArrowBigRightDash, LuArrowBigLeftDash } from "react-icons/lu";

function HomeApp() {
  const firstSlide = catsData.slice(0, 5);
  const secondSlide = catsData.slice(5, 10);
  const thirdSlide = catsData.slice(10, 15);
  const CustomPrevButton = () => (
    <div>
      <LuArrowBigLeftDash />
    </div>
  );
  const CustomNextButton = () => (
    <div>
      <LuArrowBigRightDash />
    </div>
  );

  return (
    <div className="sliderContainer">
      <h1>Wikipurrdia: An Insightful Look into the World of Cats !</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        rewind={true}
        pagination={{ clickable: true }}
        className="swiperEl"
      >
        <SwiperSlide>
          <div className="catcontainer">
            {firstSlide.map((cat) => (
              <div
                key={cat.id}
                className={cat.className}
                style={{
                  backgroundImage: `url("${cat.urlLink}")`,
                }}
              >
                <h1>{cat.name}</h1>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="catcontainer">
            {secondSlide.map((cat) => (
              <div
                key={cat.id}
                className={cat.className}
                style={{
                  backgroundImage: `url("${cat.urlLink}")`,
                }}
              >
                <h1>{cat.name}</h1>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="catcontainer">
            {thirdSlide.map((cat) => (
              <div
                key={cat.id}
                className={cat.className}
                style={{
                  backgroundImage: `url("${cat.urlLink}")`,
                }}
              >
                <h1>{cat.name}</h1>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        className="custom-prev-button arrowButtons"
        style={{ position: "absolute", top: "50%", left: "20px", zIndex: 10 }}
      >
        <CustomPrevButton />
      </div>
      <div
        className="custom-next-button arrowButtons"
        style={{ position: "absolute", top: "50%", right: "20px", zIndex: 10 }}
      >
        <CustomNextButton />
      </div>
    </div>
  );
}

export default HomeApp;

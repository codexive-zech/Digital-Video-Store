import { useEffect, useRef, useState } from "react";
import { getTrendingVideos } from "../utils/custonFetcth";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const screenWidth = window.innerWidth;

const SLIDE_INTERVAL = 10 * 1000;
const MAX_SLIDE_COUNT = 20;

const Slider = () => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [sliderData, setSliderData] = useState([]);
  const elementRef = useRef();

  const getSliderData = async () => {
    getTrendingVideos.then((resp) => {
      setSliderData(resp.data.results);
    });
  };
  useEffect(() => {
    getSliderData();
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  const intervalId = useRef(null);
  const [intervalClickCount, setIntervalClickCount] = useState(0);
  const [isSlideForward, setIsSlideForward] = useState(true);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (isSlideForward) {
        setIntervalClickCount((prev) => prev + 1);
        sliderRight(elementRef.current);
      } else {
        setIntervalClickCount((prev) => prev - 1);
        sliderLeft(elementRef.current);
      }
    }, SLIDE_INTERVAL);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [isSlideForward]);

  useEffect(() => {
    if (intervalClickCount === MAX_SLIDE_COUNT) {
      clearInterval(intervalId.current);
      setIsSlideForward(false);
    }

    if (intervalClickCount < 0) {
      clearInterval(intervalId.current);
      setIsSlideForward(true);
    }
  }, [intervalClickCount]);

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4
    scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {sliderData.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

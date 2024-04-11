import { CTAction, Footer, Header } from "../components";
import useSingleDetails from "../hooks/useSingleDetails";

const SingleDetails = () => {
  const {
    singleMovie: { data, isLoading },
  } = useSingleDetails();

  return (
    <>
      <Header />

      <div className="min-h-[50vh]">
        {isLoading && (
          <div className="mt-5 md:mt-8 p-2 px-6 md:px-12">
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#BE123C]"></div>
            </div>
          </div>
        )}
        {data && (
          <>
            <div
              className="flex items-center "
              style={{ borderRadius: "20px" }}
            >
              <img
                src={data.posterLargeImg}
                alt="Large poster"
                className="min-w-full rounded-2xl md:h-[335px] object-cover object-center"
              />
            </div>

            <div className="px-7 lg:px-14 pb-4 flex gap-10 min-h-[50vh]">
              <div className="min-w-[280px] w-full lg:w-[250px] lg:h-[370px] rounded-md hidden lg:flex mt-[-8%] ml-[8%] overflow-hidden">
                <img
                  src={data.posterImg}
                  alt={"Poster"}
                  className="w-full h-full rounded-md object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className=" font-semibold text-center text-sm md:text-base lg:text-left text-white ">
                  {data.name}
                </h1>

                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div
                    className={`${
                      data.featured
                        ? "bg-[#1812be] text-white"
                        : "bg-[#ec9fed] text-black"
                    }
                     inline-block px-3 py-1 rounded-md text-xs font-bold`}
                  >
                    {data.featured ? <span> 🌟 </span> : <span> 👎🏽 </span>}
                    {data.featured ? "Featured" : "NOT Featured"}
                  </div>
                  <div
                    className={`${
                      data.tvShow
                        ? "bg-[#BE123C] text-white"
                        : "bg-[#F59E0B] text-black"
                    } inline-block px-3 py-1 rounded-md text-xs font-bold`}
                  >
                    {data.tvShow ? <span> 📺 </span> : <span> 🎥 </span>}
                    {data.tvShow ? "TV SHOW" : "MOVIE"}
                  </div>
                </div>

                <p className=" font-medium pt-4 pb-12 text-xl leading-8 text-white">
                  {data.synopsis}
                </p>

                <div className=" flex items-center gap-6 justify-center lg:justify-start">
                  <button className=" text-sm md:text-lg text-white shadow-none border-none bg-[rgba(200,108,80)]">
                    Rent ${data.priceRent}
                  </button>
                  <button className=" text-sm md:text-lg text-white shadow-none border-none bg-[#BE123C]">
                    Purchase ${data.priceBuy}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <CTAction />
      <Footer />
    </>
  );
};

export default SingleDetails;

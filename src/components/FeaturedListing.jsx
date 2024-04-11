import { Link } from "react-router-dom";

const FeaturedListing = ({ listing, title }) => {
  const { data, isLoading } = listing;

  return (
    <>
      {isLoading && (
        <div className="mt-5 md:mt-8 p-2 px-6 md:px-12">
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#BE123C]"></div>
          </div>
        </div>
      )}

      {data && (
        <div className="mt-5 md:mt-8 p-2 px-6 md:px-12">
          <div className=" text-xl md:text-2xl lg:text-3xl text-white font-bold my-2 md:my-3 lg:my-5">
            {title}
          </div>
          <div className=" grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
            {data?.slice(0, 4).map((item) => {
              return (
                <Link to={`/${item.id}`} key={item.id} className="relative">
                  <div className="relative">
                    <div className="relative w-full h-[300px]">
                      <img
                        src={item.posterImg}
                        className="rounded-lg  hover:rounded-lg hover:border-[3px] border-gray-400 cursor-pointer w-full h-full object-cover object-center"
                        alt={item.name}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black  text-white text-center py-3">
                      {item.name}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedListing;

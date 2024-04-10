import { CTAction, Footer, Header, ItemsCard } from "../components";
import FormInput from "../components/FormInput";
import useSearch from "../hooks/useSearch";

function Search() {
  const { register, handleSubmit, isSubmitting, query, results } = useSearch();

  return (
    <div className=" ">
      <Header />

      <main
        className={`container mx-auto px-4 pt-5 pb-10 md:pb-20 md:px-8 lg:px-20 min-h-[50vh]`}
      >
        <form className="max-w-md mx-auto" onSubmit={handleSubmit()}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <FormInput
              type="search"
              placeholder="Search for movies & TV Shows"
              {...register("query", { required: "Search query is required" })}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            />

            <button
              type="submit"
              className="bg-[#be123dc0] text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2"
              disabled={isSubmitting}
            >
              Search
            </button>
          </div>
          ;
        </form>

        {isSubmitting && (
          <div className="mt-5 md:mt-8 p-2 px-6 md:px-12">
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#BE123C]"></div>
            </div>
          </div>
        )}

        {results.data && (
          <>
            <h2 className=" text-lg lg:text-2xl text-center my-5 text-white">
              Search results for &quot;{query}&quot;
            </h2>

            <p className=" text-base lg:text-xl text-center mb-5 text-white">
              Found <b>{results.data.length}</b> results
            </p>
          </>
        )}
        <ItemsCard listing={results} />
      </main>

      <CTAction />
      <Footer />
      <br />
    </div>
  );
}

export default Search;

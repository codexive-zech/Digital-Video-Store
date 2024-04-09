import getServiceCorePath from "../../utils/getServiceCorePath";
import http from "../../utils/http";

const handleData = (axiosData) => {
  const getData = (data) => ({
    id: data.id,
    name: data.name,
    synopsis: data.synopsis,
    priceRent: data.priceRent,
    priceBuy: data.priceBuy,
    posterImg: data.posterImg,
    posterLargeImg: data.posterLargeImg,
    tvShow: data.tvShow,
    featured: data.featured,
  });

  // This handles the REAL response from the API
  if (axiosData.data) {
    if (Array.isArray(axiosData.data)) {
      return axiosData.data.map(getData);
    }

    return getData(axiosData.data);
  }

  // This handles the FAKE response from Json Server
  if (Array.isArray(axiosData)) {
    return axiosData.map(getData);
  }

  return getData(axiosData);
};

const getAllMovies = async () => {
  const { data } = await http.get(
    getServiceCorePath("/movies", "/api/v1/movies")
  );

  return handleData(data);
};

const getMovieById = async (id) => {
  const { data } = await http.get(
    getServiceCorePath(`/movies/${id}`, `/api/v1/movies/${id}`)
  );

  return handleData(data);
};

const getAllTvShows = async () => {
  const { data } = await http.get(
    getServiceCorePath(
      "/movies?is_tv_show=true",
      "/api/v1/movies?is_tv_show=true"
    )
  );

  return handleData(data);
};

const searchMoviesByTitle = async (title) => {
  const { data } = await http.get(
    getServiceCorePath(
      `/movies?title=${title}`,
      `/api/v1/movies?title=${title}`
    )
  );

  return handleData(data);
};

const getAllFeaturedMovies = async () => {
  const { data } = await http.get(
    getServiceCorePath(
      "/movies?is_featured=true",
      "/api/v1/movies?is_featured=true"
    )
  );

  return handleData(data);
};

const getAllFeaturedTvShows = async () => {
  const { data } = await http.get(
    getServiceCorePath(
      "/movies?is_tv_show=true&is_featured=true",
      "/api/v1/movies?is_tv_show=true&is_featured=true"
    )
  );

  return handleData(data);
};

const getAllMoviesAndTvShows = async () => {
  const movies = await getAllMovies();
  const tvShows = await getAllTvShows();

  const handleShuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return handleShuffle([...movies, ...tvShows]);
};

export default {
  getAllMovies,
  getMovieById,
  getAllTvShows,
  searchMoviesByTitle,
  getAllFeaturedMovies,
  getAllFeaturedTvShows,
  getAllMoviesAndTvShows,
};

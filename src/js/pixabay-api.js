
import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "55061733-65c505187276814ecbed51f1a";
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
      params: {
      page: page,
      per_page: PER_PAGE,
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });

  return response.data;
}
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const form = document.querySelector(".form");
const loadMoreButton = document.querySelector(".load-more");
let page = 1;
let limit = 15;
let totalPages;
let query;



form.addEventListener("submit", async event => {
    event.preventDefault(); 
    hideLoadMoreButton();

    query = event.currentTarget.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      message: "Please fill in the search field!",
      position: "topRight",
    });
    return;
  }

  try {
    clearGallery();
    showLoader();

      const data = await getImagesByQuery(query, page);
      totalPages = Math.ceil(data.totalHits / limit);
      

    if (data.hits.length === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
        hideLoadMoreButton();
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Try again later.",
      position: "topRight",
    });
  } finally {
    hideLoader();
      form.reset();
    }
    if (page < totalPages)  {
        showLoadMoreButton();
    } else {
        hideLoadMoreButton();
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
        });
    }
    
});


loadMoreButton.addEventListener("click", async () => {
    hideLoadMoreButton();
    showLoader();
    page += 1;
    const data = await getImagesByQuery(query, page);
    totalPages = Math.ceil(data.totalHits / limit);
    createGallery(data.hits);
    scrolPage();
        if (page >= totalPages) {
            hideLoadMoreButton();
            iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
        });
        } else {
            showLoadMoreButton();
        }
    hideLoader();

});


function scrolPage() {
    const elem = document.querySelector(".gallery").firstElementChild;
    const height = elem.getBoundingClientRect().height;
    window.scrollBy({
        top: height * 2,
        behavior: "smooth",
    });
}
    
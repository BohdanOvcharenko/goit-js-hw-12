
import { createCategories,  getListCategories } from "./js/render-functions";




document.addEventListener("DOMContentLoaded", async event => { 
  const categories = await getListCategories();
  const updatedCategories = [
  {
    _id: "all",
    name: "Всі товари",
  },
  ...categories
];
  createCategories(updatedCategories);
  const categoryItem = document.querySelector(".list-categories__item");
   categoryItem.classList.add("active-item-category");
});

const categoriesContainer = document.querySelector(".list-categories");

categoriesContainer.addEventListener("click", (event) => {
  
  const categoryItem = event.target.closest(".list-categories__item");
  if (!categoryItem) return;

  const items = document.querySelectorAll(".list-categories__item");
  items.forEach(item => item.classList.remove("active-item-category"));
  categoryItem.classList.add("active-item-category");

  const categoryId = categoryItem.dataset.categoryId;
  if (categoryId === "all") {
  console.log("Показати всі товари");
} else {
  console.log(`Показати товари категорії: ${categoryId}`);
  }
  

});


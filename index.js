import{a as q,S as M,i}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const R="https://pixabay.com/api/",B="55061733-65c505187276814ecbed51f1a",E=15;async function g(r,t){return(await q.get(R,{params:{page:t,per_page:E,key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".loader"),b=document.querySelector(".load-more"),$=new M(".gallery-link",{captionsData:"alt",captionDelay:250});function L(r){const t=r.map(({webformatURL:l,largeImageURL:c,tags:e,likes:o,views:s,comments:v,downloads:P})=>`
      
      <li class="gallery-item">
  <a class="gallery-link" href="${c}">
    <img
      class="gallery-image"
      src="${l}"
      alt="${e}"
      loading="lazy"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${o}</p>
    <p class="info-item"><b>Views</b> ${s}</p>
    <p class="info-item"><b>Comments</b> ${v}</p>
    <p class="info-item"><b>Downloads</b> ${P}</p>
  </div>
</li>
      `).join("");p.insertAdjacentHTML("beforeend",t),$.refresh()}function O(){p.innerHTML=""}function w(){y.classList.remove("is-hidden")}function f(){y.classList.add("is-hidden")}function m(){b.classList.remove("is-hidden")}function a(){b.classList.add("is-hidden")}const h=document.querySelector(".form"),T=document.querySelector(".load-more");let n=1,S=15,u,d;h.addEventListener("submit",async r=>{if(r.preventDefault(),a(),d=r.currentTarget.elements["search-text"].value.trim(),!d){i.warning({message:"Please fill in the search field!",position:"topRight"});return}try{O(),w();const t=await g(d,n=1);if(u=Math.ceil(t.totalHits/S),t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a();return}L(t.hits),n<u?m():(a(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{f(),h.reset()}});T.addEventListener("click",async()=>{a(),w(),n+=1;try{const r=await g(d,n);u=Math.ceil(r.totalHits/S),L(r.hits),x(),n>=u?(a(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):m()}catch{f(),m(),i.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{f()}});function x(){const t=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

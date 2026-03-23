import{a as q,S as M,i as s}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const B="https://pixabay.com/api/",E="55061733-65c505187276814ecbed51f1a",R=15;async function m(r,t){return(await q.get(B,{params:{page:t,per_page:R,key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".load-more"),$=new M(".gallery-link",{captionsData:"alt",captionDelay:250});function y(r){const t=r.map(({webformatURL:l,largeImageURL:c,tags:e,likes:o,views:i,comments:S,downloads:P})=>`
      
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
    <p class="info-item"><b>Views</b> ${i}</p>
    <p class="info-item"><b>Comments</b> ${S}</p>
    <p class="info-item"><b>Downloads</b> ${P}</p>
  </div>
</li>
      `).join("");h.insertAdjacentHTML("beforeend",t),$.refresh()}function O(){h.innerHTML=""}function b(){p.classList.remove("is-hidden")}function L(){p.classList.add("is-hidden")}function w(){g.classList.remove("is-hidden")}function a(){g.classList.add("is-hidden")}const f=document.querySelector(".form"),x=document.querySelector(".load-more");let n=1,v=15,u,d;f.addEventListener("submit",async r=>{if(r.preventDefault(),a(),d=r.currentTarget.elements["search-text"].value.trim(),!d){s.warning({message:"Please fill in the search field!",position:"topRight"});return}try{O(),b();const t=await m(d,n);if(u=Math.ceil(t.totalHits/v),t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a();return}y(t.hits)}catch{s.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{L(),f.reset()}n<u?w():(a(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))});x.addEventListener("click",async()=>{a(),b(),n+=1;const r=await m(d,n);u=Math.ceil(r.totalHits/v),y(r.hits),A(),n>=u?(a(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w(),L()});function A(){const t=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

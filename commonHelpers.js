/* empty css                      */import{S as d}from"./assets/vendor-dc05894a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const s=document.querySelector(".header-menu"),r=document.querySelector(".open-menu"),i=document.querySelector(".close-btn");document.querySelector(".header-list-link");r.addEventListener("click",function(){s.classList.toggle("is-open"),r.style.display="none",i.style.display="inline-block"});i.addEventListener("click",function(){s.classList.toggle("is-open"),i.style.display="none",r.style.display="inline-block"});const a=document.querySelectorAll(".header-list-link");a.forEach(n=>{n.addEventListener("click",()=>{s.classList.remove("is-open"),i.style.display="none",r.style.display="inline-block",a.forEach(o=>o.style.color=""),n.style.color="orange"})});window.matchMedia("(min-width: 1200px)").addEventListener("change",n=>{n.matches&&(s.classList.remove("is-open"),i.style.display="none",r.style.display="inline-block",backdrop.classList.remove("active"))});const p=document.querySelector(".swiper-button-prev"),y=document.querySelector(".swiper-button-next");new d(".mySwiper",{direction:"horizontal",loop:!0,spaceBetween:25,slidesPerView:1,navigation:{nextEl:y,prevEl:p},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0}});new d(".gallery-swiper",{direction:"horizontal",loop:!0,spaceBetween:40,slidesPerView:1,centeredSlides:!0,pagination:{el:".swiper-pagination.gallery",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0}});
//# sourceMappingURL=commonHelpers.js.map

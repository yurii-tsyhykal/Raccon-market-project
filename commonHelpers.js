/* empty css                      */import{S as w}from"./assets/vendor-7d212bb0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const d=document.querySelector(".header-menu"),m=document.querySelector(".open-menu"),p=document.querySelectorAll(".header-list-item"),l=document.getElementById("backdrop");function u(){d.classList.remove("is-open"),l.classList.remove("active"),m.classList.remove("hidden"),p.forEach(t=>t.classList.remove("active")),document.body.classList.remove("no-scroll")}m.addEventListener("click",function(){const t=d.classList.contains("is-open");d.classList.toggle("is-open",!t),document.body.classList.add("no-scroll"),l.classList.toggle("active",!t)});p.forEach(t=>{t.addEventListener("click",()=>{u(),t.classList.add("active")})});l.addEventListener("click",u);window.matchMedia("(min-width: 1200px)").addEventListener("change",t=>{t.matches&&u()});document.querySelectorAll('.header-list-link[href^="#"]').forEach(t=>{t.addEventListener("click",function(i){i.preventDefault();const s=document.querySelector(this.getAttribute("href").split("#")[1]);if(!s)return;const r=document.querySelector(".header").offsetHeight,e=s.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:e-r,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("falling-images"),i="./img/",r=["image1.png","image2.png"].map(o=>`${i}${o}`),e=[`${i}image1.png`],n=window.innerWidth<=1200?e:r,c=window.innerWidth<=1200?5:30;function g(){const o=document.createElement("img");o.src=n[Math.floor(Math.random()*n.length)],o.classList.add("falling-image");const h=window.innerWidth<1200?55:Math.random()*50+30;o.style.width=`${h}px`,o.style.left=Math.random()*100+"vw",o.style.top=Math.random()*-100-50+"px",o.style.animationDuration=Math.random()*3+2+"s",o.style.animationDelay=Math.random()*5+"s",t.appendChild(o)}for(let o=0;o<c;o++)g();document.addEventListener("click",()=>{t.innerHTML=""})});document.addEventListener("DOMContentLoaded",f);window.addEventListener("resize",f);let a;const y=()=>{a=new w(".review-swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",spaceBetween:60,centeredSlides:!0,pagination:{clickable:!0,el:".swiper-pagination"},navigation:{nextEl:".review-custom-next",prevEl:".review-custom-prev"}})};function f(){const t=window.innerWidth;if(t<1200&&!a)y();else if(t>=1200&&a){a.destroy(!0,!0),a=null;const i=document.querySelector(".swiper-pagination"),s=document.querySelector(".review-custom-prev"),r=document.querySelector(".review-custom-next");i&&(i.style.display="none"),s&&(s.style.display="none"),r&&(r.style.display="none")}}
//# sourceMappingURL=commonHelpers.js.map

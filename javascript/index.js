"use strict";

const ratio = 0.1;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const callback = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("onscroll-left");
      console.log("visible");
      // observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("onscroll-left");
    }
  });
};

const observer = new IntersectionObserver(callback, options);
document.querySelectorAll(".main-content").forEach(function (s) {
  observer.observe(s);
});

document
  .querySelectorAll(
    'a[href^="#link-main"], a[href^="#link-header"], a[href^="#link-footer"]'
  )
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

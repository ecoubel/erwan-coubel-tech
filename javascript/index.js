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

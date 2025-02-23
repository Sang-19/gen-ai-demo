document.querySelector(".scroll-down").addEventListener("click", function() {
  window.scrollTo({
      top: document.querySelector(".pricing").offsetTop,
      behavior: "smooth"
  });
});

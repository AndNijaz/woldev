document
  .querySelectorAll(".icon-mobile-nav")
  .forEach((el) =>
    el.addEventListener("click", () =>
      document.querySelector(".navigation-header").classList.toggle("nav-open")
    )
  );

window.addEventListener("scroll", setScrollVar);
window.addEventListener("scroll", setColor);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;

  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;

  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  );

  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
}

function setColor() {
  const htmlElement = document.documentElement;
  if (htmlElement.style.getPropertyValue("--scroll") > 10) {
    document.getElementById("title").classList.add("dark");
  } else {
    document.getElementById("title").classList.remove("dark");
  }
}

setScrollVar();

setColor();

const observer = new IntersectionObserver((entries) => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];
    if (entry.isIntersecting) {
      document.querySelectorAll("[data-img").forEach((img) => {
        img.classList.remove("show");
      });
      const img = document.querySelector(entry.target.dataset.imgToShow);
      img?.classList.add("show");
      break;
    }
  }
});

document.querySelectorAll("[data-img-to-show").forEach((section) => {
  observer.observe(section);
});

const slideBlock = $("#slides");
const help = $("#help");

const openButtonClick = (isOpen) => {
  if (isOpen) {
    help.classList.add("show");
  } else {
    help.classList.remove("show");
  }
};

const animationSlide = (ele, index) => {
  if (index % 2 === 0) {
    ele.style.left = "-100%";
  } else {
    ele.style.left = "100%";
  }
};

const createSlideItem = (linkImg) => {
  const d = document.createElement("div");
  const i = document.createElement("img");
  d.classList.add("slide-item");
  i.setAttribute("src", linkImg);
  d.append(i);
  return d;
};

const initSlides = () => {
  IMAGES_SLIDE.forEach((i, index) => {
    const e = createSlideItem(i);

    if (index !== IMAGES_SLIDE.length - 1) {
      e.onclick = () => animationSlide(e, index);
    } else {
      e.onclick = () => {
        animationSlide(e, index);
        setTimeout(() => {
          message.classList.add("show");
        }, 2000);
      };
    }
    slideBlock.append(e);
  });
  slideBlock.classList.add("show");
  openButtonClick(true);
  setTimeout(() => {
    openButtonClick(false);
  }, 2000);
};

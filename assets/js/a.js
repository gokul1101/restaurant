// List of images
const images = [
    "assets/images/slide_01.jpg",
    "assets/images/slide_02.jpg",
    "assets/images/slide_03.jpg",
    "assets/images/slide_04.jpg",
    "assets/images/slide_05.jpg"
  ];
  const lines = document.querySelectorAll(".line-select");
  const arrows = document.querySelectorAll(".arrow");
  let img = document.querySelector(".container-fluid");
  let curImg,
    curPos = 0;
  
  // Initialize Slide Events
  const slideEventInit = () => {
    //Initial Slide Load
    img.style.backgroundImage = `url(${images[0]})`;
    // init for lines
    lines.forEach((line, index) => {
      line.addEventListener("click", () => {
        curPos = index;
        img.style.backgroundImage = `url(${images[index]})`;
        setActiveClass(curPos);
      });
    });
    // init for arrows
    arrows.forEach((arrow, index) => {
      arrow.addEventListener("click", () => {
        // left arrow initialize
        if (index === 0) {
          curImg = img.style.backgroundImage
            .replace('url("', "")
            .replace('")', "");
          curPos =
            (images.indexOf(curImg) - 1) % images.length > -1
              ? (images.indexOf(curImg) - 1) % images.length
              : ((images.indexOf(curImg) - 1) % images.length) + images.length;
          img.style.backgroundImage = `url(${images[curPos]})`;
        } else {
          // right arrow initialize
          curImg = img.style.backgroundImage
            .replace('url("', "")
            .replace('")', "");
          curPos = (images.indexOf(curImg) + 1) % images.length;
          img.style.backgroundImage = `url(${images[curPos]})`;
        }
        setActiveClass(curPos);
      });
    });
  };
  
  const autoSlide = () => {
    curPos = ++curPos % images.length;
    img.style.backgroundImage = `url(${images[curPos]})`;
    setActiveClass(curPos);
  };
  
  const setActiveClass = curPos => {
    lines.forEach(line => {
      line.classList.remove("active");
    });
    lines[curPos].classList.add("active");
  };
  
  slideEventInit();
  setInterval(autoSlide, 5000);
  
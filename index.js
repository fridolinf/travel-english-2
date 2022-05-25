const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");

function lefts() {
  const checkSlider1 = slider1.classList.contains("slider-active");
  const checkSlider2 = slider2.classList.contains("slider-active");
  if (checkSlider1 === true || checkSlider2 === false) {
    slider1.classList.remove("slider-active")
    slider1.classList.add("slider-not-active")
    slider2.classList.remove("slider-not-active")
    slider2.classList.add("slider-active")
  } else if(checkSlider1 === false || checkSlider2 === true) {
    slider2.classList.remove("slider-active")
    slider2.classList.add("slider-not-active")
    slider1.classList.remove("slider-not-active")
    slider1.classList.add("slider-active")
  }
};

function rights() {
  const checkSlider1 = slider1.classList.contains("slider-active");
  const checkSlider2 = slider2.classList.contains("slider-active");
  if (checkSlider1 === true || checkSlider2 === false) {
    slider1.classList.remove("slider-active")
    slider1.classList.add("slider-not-active")
    slider2.classList.remove("slider-not-active")
    slider2.classList.add("slider-active")
  } else if(checkSlider1 === false || checkSlider2 === true) {
    slider2.classList.remove("slider-active")
    slider2.classList.add("slider-not-active")
    slider1.classList.remove("slider-not-active")
    slider1.classList.add("slider-active")

  }
}


const btnScrollDown = document.querySelector('#mouse-indicator');
function scrollDown() {
  var windowCoords = document.documentElement.clientHeight;
  (function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
      btnScrollDown2.classList.remove("deletes")
      btnScrollDown.classList.add("deletes")
    }
  })();
}

btnScrollDown.addEventListener('click', scrollDown);

const btnScrollDown2 = document.querySelector('#mouse-indicator-2');
function scrollDown2() {
  (function scroll() {
    if (window.pageYOffset < 2000) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
      btnScrollDown3.classList.remove("deletes")
      btnScrollDown2.classList.add("deletes")
    }
  })();
}

btnScrollDown2.addEventListener('click', scrollDown2);


const btnScrollDown3 = document.querySelector('#mouse-indicator-3');
function scrollDown3() {
  (function scroll() {
    if (window.pageYOffset < 3300) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
      btnScrollDown6.classList.remove("deletes")
      btnScrollDown3.classList.add("deletes")
    }
  })();
}

btnScrollDown3.addEventListener('click', scrollDown3);

const btnScrollDown6 = document.querySelector('#mouse-indicator-6');
function scrollDown6() {
      window.scrollTo({behavior: "smooth", top})
      btnScrollDown.classList.remove("deletes")
      btnScrollDown3.classList.add("deletes")
      btnScrollDown6.classList.add("deletes")
}

btnScrollDown6.addEventListener('click', scrollDown6);
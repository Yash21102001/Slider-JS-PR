const slider_items = document.querySelectorAll(".slider-item");
const prev_button = document.querySelector("#slider-prev");
const next_button = document.querySelector("#slider-next");

var slider = {
  len: slider_items.length,
  index: 0,

  prev: function (n = this.index) {
    let prev = n - 1;
    return (prev < 0) ? (this.len - 1) : (prev);
  },

  next: function (n = this.index) {
    let next = n + 1;
    return (next > this.len - 1) ? (0) : (next);
  },

  display: function () {
    console.log(`prev-prev: ${slider.prev(slider.prev())}, prev: ${slider.prev()}, i: ${slider.index}, next: ${slider.next()}, next-next: ${slider.next(slider.next())}`);
  },

  slidePrevious: function () {
    slider.index = slider.prev();
    slider.display();
    setIndex();
  },

  slideNext: function () {
    slider.index = slider.next();
    slider.display();
    setIndex();
  }
}

prev_button.addEventListener("click", slider.slidePrevious);
next_button.addEventListener("click", slider.slideNext);

function setIndex() {
  slider_items.forEach((slide, i) => {
    slide.classList.toggle("prev-prev", i == slider.prev(slider.prev()));
    slide.classList.toggle("prev", i == slider.prev());
    slide.classList.toggle("active", i == slider.index);
    slide.classList.toggle("next", i == slider.next());
    slide.classList.toggle("next-next", i == slider.next(slider.next()));
  })
}

slider.display();
setIndex();
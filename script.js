var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mouseWheel: {
        invert: false,
    },
    // autoHeight: true
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});
// responsive number
const counters = document.querySelectorAll(".counter");
const speed = 2; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / target*20;

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc;
      // Call function every ms
      setTimeout(updateCount, 5);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

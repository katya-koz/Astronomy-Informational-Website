//https://medium.com/@harrybeckwith/slide-in-on-scroll-4328897945a4

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll('.time-card');

function checkSlide() {

  // loop over every image 
  // figure out where it needs to be shown
  // at least 50% of its height
  
  sliderImages.forEach(sliderImage => {
    //half way through images
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.clientHeight/2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight;
    // half way in the images
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    
    const isNoScrolledPast = window.scrollY < imageBottom;
    
    if(isHalfShown && isNoScrolledPast) {
          sliderImage.classList.add('in-view');
       } else {
          sliderImage.classList.remove('in-view');
       }
  })
  
  
}
debounce(checkSlide());
var marsMarker = document.getElementById("mars-marker");
window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener("scroll", function() {
  marsMarker.style.transform = "rotate(" + window.pageYOffset * 0.1 + "deg)";
});
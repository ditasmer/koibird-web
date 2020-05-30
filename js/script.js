//Javascript document

var swiper;
swiper = new Swiper('.swiper-container', {
  slidesPerView: 4.2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*script responsive menu*/

    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "nav-main") {
        x.className += " responsive";
      } else {
        x.className = "nav-main";
      }
    }
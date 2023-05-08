new Swiper('.main-swiper',{
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  centeredSlidesBounds: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
});

let buttonHide = document.querySelector(".button-hide-full-read");
let buttonOpen = document.querySelector(".button-full-read");
let partnerLaptop = document.querySelectorAll(".hide768px");
let partnerPC = document.querySelectorAll(".hide1120px");


buttonHide.addEventListener("click", function(evt){
  evt.preventDefault();
  if(document.documentElement.clientWidth < 1120) {
    for (var i = 0; i < partnerLaptop.length; i++){
     partnerLaptop[i].classList.toggle('hide');
    }
  }
  for (var i = 0; i < partnerPC.length; i++){
    partnerPC[i].classList.toggle('hide');
  }
  buttonHide.classList.toggle("hide");
  buttonOpen.classList.toggle("hide");
});
buttonOpen.addEventListener("click", function(evt){
  evt.preventDefault();
  if(document.documentElement.clientWidth < 1120) {
    for (var i = 0; i < partnerLaptop.length; i++){
     partnerLaptop[i].classList.toggle('hide');
    }
  }
  for (var i = 0; i < partnerPC.length; i++){
    partnerPC[i].classList.toggle('hide');
  }
    buttonHide.classList.toggle("hide");
  buttonOpen.classList.toggle("hide");
});






const imgs = document.querySelectorAll(".img-select .img-item img");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImg();
  });
});

function slideImg() {
  const displayWidth = document.querySelector(".img-showcase img:first-child")
    .clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

// Window.addEventListener("resize", slideImg);

console.log("hai");

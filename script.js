const btnMobile = document.querySelector("#btn-mobile");

const toggleMenu = () => {
  const nav = document.querySelector("nav");
  let state = nav.classList.toggle("active");
  if (state) {
    btnMobile.setAttribute("src", "./images/cancel-bar.svg");
  } else {
    btnMobile.setAttribute("src", "./images/menu-bar.svg");
  }
};

btnMobile.addEventListener("click", toggleMenu);

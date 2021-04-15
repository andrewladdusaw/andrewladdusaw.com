const dropContainer1 = document.getElementById("drop-container1");
const dropContainer2 = document.getElementById("drop-container2");
const dropContainer3 = document.getElementById("drop-container3");
const drop1 = document.querySelectorAll(".drop1");
const drop2 = document.querySelectorAll(".drop2");
const drop3 = document.querySelectorAll(".drop3");
const nav = document.querySelector("nav");
const dropdown1 = function () {
  drop1.forEach((element) => {
    element.classList.toggle("drop-text");
  });
  // nav.style.backgroundColor = "transparent";
};
const dropdown2 = function () {
  drop2.forEach((element) => {
    element.classList.toggle("drop-text");
  });
  // nav.style.backgroundColor = "transparent";
};
const dropdown3 = function () {
  drop3.forEach((element) => {
    element.classList.toggle("drop-text");
  });
  // nav.style.backgroundColor = "transparent";
};
dropContainer1.addEventListener("mouseover", dropdown1);
dropContainer1.addEventListener("mouseout", dropdown1);
dropContainer1.addEventListener("click", dropdown1);
dropContainer2.addEventListener("mouseover", dropdown2);
dropContainer2.addEventListener("mouseout", dropdown2);
dropContainer2.addEventListener("click", dropdown2);
dropContainer3.addEventListener("mouseover", dropdown3);
dropContainer3.addEventListener("mouseout", dropdown3);
dropContainer3.addEventListener("click", dropdown3);


const menuBars = document.getElementById('menu-bars');
const menuFunction = function () {
    nav.style.display = "flex";
    dropContainer1.removeEventListener("mouseover", dropdown1);
    dropContainer1.removeEventListener("mouseout", dropdown1);
    dropContainer2.removeEventListener("mouseover", dropdown2);
    dropContainer2.removeEventListener("mouseout", dropdown2);
    dropContainer3.removeEventListener("mouseover", dropdown3);
    dropContainer3.removeEventListener("mouseout", dropdown3);
    menuBars.removeEventListener("click", menuFunction);
    menuBars.addEventListener("click", closeFunction);

}
menuBars.addEventListener("click", menuFunction);

const closeFunction = function () {
    nav.style.display = "none";
    dropContainer1.addEventListener("mouseover", dropdown1);
    dropContainer1.addEventListener("mouseout", dropdown1);
    dropContainer2.addEventListener("mouseover", dropdown2);
    dropContainer2.addEventListener("mouseout", dropdown2);
    dropContainer3.addEventListener("mouseover", dropdown3);
    dropContainer3.addEventListener("mouseout", dropdown3);
    menuBars.addEventListener("click", menuFunction);
    menuBars.removeEventListener("click", closeFunction);
}

const expandButton = document.querySelector('.expand-button');
const expandPage = document.querySelector('.expansion');
const expandFunction = function () {
    expandPage.classList.toggle("expand-page");
}
expandButton.addEventListener('click', expandFunction);
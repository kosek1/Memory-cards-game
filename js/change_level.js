const button = document.querySelector(".button-level");
const levelList = document.querySelector(".level-list");


button.addEventListener("click", ()=> {
   levelList.classList.toggle("active-flex")
})

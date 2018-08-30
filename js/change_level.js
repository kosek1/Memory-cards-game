const button = [...document.querySelectorAll(".my-topbar-buttons")];
const levelList = document.querySelector(".level-list");

const word = [...document.querySelectorAll(".my-topbar-buttons span")];

let toggled = false;


button.forEach( (e)=> {
    e.addEventListener("click", ()=> {
       levelList.classList.toggle("active-flex");
       toggled = !toggled;

       if(toggled == true) {
          word.forEach((e)=> {
              if(window.innerWidth >= 768) {e.textContent = "Ukryj";}
              else {e.classList = "fa fa-times"}
          }) }
        else {
            word.forEach((e)=> {
              if(window.innerWidth >= 768) {e.textContent = "Level";}
              else {e.classList = "fa fa-bars"}
            }) }
    });
});

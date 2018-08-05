const button = document.querySelector(".choose-level");
const windowLevels = document.querySelector(".window-levels-off");

const level = [...document.querySelectorAll(".level-button")];

button.addEventListener("click", function()
{
       windowLevels.classList.remove("window-levels-off")
        windowLevels.classList.toggle("window-levels-on");

        level.forEach(function(e)
      {
          e.classList.toggle("level-button-on");
      })
});

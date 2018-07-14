const button = document.querySelector(".choose-level");
const windowLevels = document.querySelector(".window-levels-off");

let level = document.querySelectorAll(".level-button");
level = [... level];

button.addEventListener("click", function()
{
       windowLevels.classList.remove("window-levels-off")
        windowLevels.classList.toggle("window-levels-on");

        level.forEach(function(e)
      {
          e.classList.toggle("level-button-on");
      })
});

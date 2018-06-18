const button = document.querySelector(".choose-level");
const windowLevels = document.querySelector(".window-levels-off");

button.addEventListener("click", function()
{
    windowLevels.classList.remove("window-levels-off")
    windowLevels.classList.toggle("window-levels-on");
});

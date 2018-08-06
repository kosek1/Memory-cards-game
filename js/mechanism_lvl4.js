const cardsTab = ["cat", "cat-word", "dog", "dog-word", "cow", "cow-word", "tiger", "tiger-word" , "lion", "lion-word", "panda", "panda-word", "fox", "fox-word", "elephant", "elephant-word"];

const  cards = [...document.querySelectorAll(".flash-card div")];

let activeCard = "";
const activeCards = [];

 const cardPairs = 8;
 let gameLength = 0;

 const currentTime = Date.now();

 const timer = document.querySelector(".timer");
 let second = 0;

 const count = () =>
 {
    timer.textContent = second;
    second++;
 }

   setTimeout( () =>
   {
      timer.style.border = "1px solid black";
      timer.style.animation = "1s opacity linear";

         setInterval( () =>
         {
              if (gameLength == cardPairs)
              {
                 return;
              }
               count();
         }, 1000)
   }, 4000)


const clickedCard = function()
{
    activeCard = this;
    if(activeCards[0] == activeCard) return;
    activeCard.classList.remove("hidden");

    if(activeCards.length === 0)
    {
       activeCards[0] = activeCard;
    }

    else
    {
           activeCards[1] = activeCard;
           cards.forEach( e => e.removeEventListener("click", clickedCard) );

           setTimeout( () =>
             {
                   if(activeCards[0].className === "cat" && activeCards[1].className === "cat-word" || activeCards[0].className === "cat-word" && activeCards[1].className === "cat" ||
                       activeCards[0].className === "dog" && activeCards[1].className === "dog-word" || activeCards[0].className === "dog-word" && activeCards[1].className === "dog" ||
                       activeCards[0].className === "cow" && activeCards[1].className === "cow-word" || activeCards[0].className === "cow-word" && activeCards[1].className === "cow" ||
                       activeCards[0].className === "tiger" && activeCards[1].className === "tiger-word" || activeCards[0].className === "tiger-word" && activeCards[1].className === "tiger" ||
                       activeCards[0].className === "lion" && activeCards[1].className === "lion-word" || activeCards[0].className === "lion-word" && activeCards[1].className === "lion" ||
                       activeCards[0].className === "panda" && activeCards[1].className === "panda-word" || activeCards[0].className === "panda-word" && activeCards[1].className === "panda" ||
                       activeCards[0].className === "fox" && activeCards[1].className === "fox-word" || activeCards[0].className === "fox-word" && activeCards[1].className === "fox" ||
                       activeCards[0].className === "elephant" && activeCards[1].className === "elephant-word" || activeCards[0].className === "elephant-word" && activeCards[1].className === "elephant")
                         {
                             activeCards.forEach( e => e.classList.add("off"));
                             gameLength++;

                                   if(gameLength == cardPairs)
                                   {
                                               const playTime = ( Date.now() - `${currentTime}` - 5000) / 1000;
                                               timer.textContent = Math.floor( playTime );
                                               const playTimeRound = Math.round( playTime * 100) /100;
                                               document.querySelector(".flash-card").style.border = "0";
                                               cards.forEach( e =>  e.style.border = "0")

                                               setTimeout( () =>
                                             {
                                                   if (window.innerWidth < window.innerHeight)   document.querySelector(".game-time").textContent = "Czas: "+ ` ${playTimeRound}` + " sekund";
                                                   else  document.querySelector(".game-time").textContent = "Twój czas: "+ ` ${playTimeRound}` + " sekund";
                                                   document.querySelector(".container-level-four").style.display = "none";
                                                   document.querySelector(".summary-level-four").style.display = "flex";
                                                   document.querySelector("body").style.backgroundColor = "black";
                                                   document.querySelector(".previous").addEventListener("click", () => location.href = "level3.html");
                                                   document.querySelector(".again").addEventListener("click", () => location.reload() );
                                                   document.querySelector(".next").addEventListener("click", () => location.href= "level5.html");
                                             }, 250)
                                     }
                         }

                    else
                          {
                            activeCards.forEach( e => e.classList.add("hidden"));
                          }

                    activeCard = "";
                    activeCards.length = 0;
                    cards.forEach( e => e.addEventListener("click", clickedCard))
             }, 500)
      }



}

const randomCards = () =>
{
     cards.forEach(e =>
     {
         const individualPosition = Math.floor(Math.random() * cardsTab.length);
         e.classList.add(cardsTab[individualPosition]);
         cardsTab.splice(individualPosition, 1);
     })

          setTimeout( () =>
          {
             cards.forEach(e => e.classList.add("hidden"));
             cards.forEach(e => e.addEventListener("click", clickedCard));
          }, 5000)
}

randomCards();

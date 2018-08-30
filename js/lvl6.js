const cardsTab = ["cat", "cat-word", "dog", "dog-word", "cow", "cow-word", "tiger", "tiger-word" , "lion", "lion-word", "panda", "panda-word", "fox", "fox-word", "elephant",
                                 "elephant-word", "fish", "fish-word", "ladybird", "ladybird-word", "crocodile", "crocodile-word", "giraffe", "giraffe-word", "kangaroo", "kangaroo-word",
                                  "monkey", "monkey-word", "parrot", "parrot-word", "pig", "pig-word", "squirrel", "squirrel-word", "turtle", "turtle-word"];

const  cards = [...document.querySelectorAll(".flash-card div")];

let activeCard = "";
const activeCards = [];

 const cardPairs = 18;
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
   }, 9000)


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
                       activeCards[0].className === "elephant" && activeCards[1].className === "elephant-word" || activeCards[0].className === "elephant-word" && activeCards[1].className === "elephant" ||
                       activeCards[0].className === "fish" && activeCards[1].className === "fish-word" || activeCards[0].className === "fish-word" && activeCards[1].className === "fish" ||
                       activeCards[0].className === "ladybird" && activeCards[1].className === "ladybird-word" || activeCards[0].className === "ladybird-word" && activeCards[1].className === "ladybird" ||
                       activeCards[0].className === "crocodile" && activeCards[1].className === "crocodile-word" || activeCards[0].className === "crocodile-word" && activeCards[1].className === "crocodile" ||
                       activeCards[0].className === "giraffe" && activeCards[1].className === "giraffe-word" || activeCards[0].className === "giraffe-word" && activeCards[1].className === "giraffe" ||
                       activeCards[0].className === "kangaroo" && activeCards[1].className === "kangaroo-word" || activeCards[0].className === "kangaroo-word" && activeCards[1].className === "kangaroo" ||
                       activeCards[0].className === "monkey" && activeCards[1].className === "monkey-word" || activeCards[0].className === "monkey-word" && activeCards[1].className === "monkey" ||
                       activeCards[0].className === "parrot" && activeCards[1].className === "parrot-word" || activeCards[0].className === "parrot-word" && activeCards[1].className === "parrot" ||
                       activeCards[0].className === "pig" && activeCards[1].className === "pig-word" || activeCards[0].className === "pig-word" && activeCards[1].className === "pig" ||
                       activeCards[0].className === "squirrel" && activeCards[1].className === "squirrel-word" || activeCards[0].className === "squirrel-word" && activeCards[1].className === "squirrel" ||
                       activeCards[0].className === "turtle" && activeCards[1].className === "turtle-word" || activeCards[0].className === "turtle-word" && activeCards[1].className === "turtle")
                         {
                             activeCards.forEach( e => e.classList.add("off"));
                             gameLength++;

                                   if(gameLength == cardPairs)
                                   {
                                               const playTime = ( Date.now() - `${currentTime}` - 10000) / 1000;
                                               timer.textContent = Math.floor( playTime );
                                               const playTimeRound = Math.round( playTime * 100) /100;
                                               document.querySelector(".flash-card").style.border = "0";
                                               cards.forEach( e =>  e.style.border = "0")

                                               setTimeout( () =>
                                             {
                                                   if (window.innerWidth < window.innerHeight)   document.querySelector(".game-time").textContent = "Czas: "+ ` ${playTimeRound}` + " sekund";
                                                   else  document.querySelector(".game-time").textContent = "Twój czas: "+ ` ${playTimeRound}` + " sekund";
                                                   document.querySelector(".container-level-six").style.display = "none";
                                                   document.querySelector(".summary-level-six").style.display = "flex";
                                                   document.querySelector("body").style.backgroundColor = "black";
                                                   document.querySelector(".previous").addEventListener("click", () => location.href = "level5.html");
                                                   document.querySelector(".again").addEventListener("click", () => location.reload() );
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
          }, 10000)
}

randomCards();

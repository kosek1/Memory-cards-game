const cardTab = ["cat" , "cat-word" , "dog" , "dog-word"];

const cards = [...document.querySelectorAll(".flash-card div")];

let activeCard = "";
const activeCards = [];

const cardPairs = cards.length / 2;
gameLength = 0;

const currentTime = new Date().getTime();


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
  }, 0)



const clickedCard = function()
{
        activeCard = this;

        if (activeCards[0] == activeCard)
        {
          return;
        }

        activeCard.classList.remove("hidden");

        if (activeCards.length === 0) //pierwsze klikniecie
        {
            activeCards[0] = activeCard;
            return;
        }

       else //drugie klikniecie
        {
                cards.forEach( aCard =>
              {
                   aCard.removeEventListener("click" , clickedCard);
              })

                activeCards[1] = activeCard;


                   setTimeout( () =>
                    {
                          if(activeCards[0].className === "cat" && activeCards[1].className === "cat-word" || activeCards[0].className === "cat-word" && activeCards[1].className === "cat" ||
                              activeCards[0].className === "dog" && activeCards[1].className === "dog-word" || activeCards[0].className === "dog-word" && activeCards[1].className === "dog")
                          {
                             activeCards.forEach( aCard =>
                             {
                                  aCard.classList.remove("hidden");
                                  aCard.classList.add("off");
                              })
                                gameLength++;

                                    if (gameLength == cardPairs)
                                    {
                                                const playTime = (new Date().getTime() - `${currentTime}` - 1000) / 1000;
                                                timer.textContent = Math.floor( playTime );
                                                const playTimeRound = Math.round( playTime * 100) /100;
                                                document.querySelector(".flash-card").style.border = "0";
                                                cards.forEach( e =>
                                                  {
                                                      e.style.border = "0";
                                                  })

                                                setTimeout( () =>
                                              {
                                                    if (window.innerWidth < window.innerHeight)   document.querySelector(".game-time").textContent = "Czas: "+ ` ${playTimeRound}` + " sekund";
                                                    else  document.querySelector(".game-time").textContent = "Twój czas: "+ ` ${playTimeRound}` + " sekund";
                                                    document.querySelector(".summary-level-one").style.display = "flex";
                                                    document.querySelector(".flash-card").style.display = "none";
                                                    document.querySelector("body").style.backgroundColor = "black";
                                                    document.querySelector(".again").addEventListener("click", () => location.reload() )
                                                    document.querySelector(".next").addEventListener("click", () => location.href= "level2.html")
                                              }, 250)
                                    }
                          }

                        else
                        {
                                 activeCards.forEach(aCard =>
                               {
                                  aCard.classList.add("hidden");
                               })
                        }

                      activeCard = "";
                      activeCards.length = 0;
                      cards.forEach( aCard =>
                        {
                           aCard.addEventListener("click" , clickedCard);
                        })
                   }, 500)
        }
}


const randomCards = () =>
{
    cards.forEach( aCard =>
    {
        const individualPosition = Math.floor(Math.random() * cardTab.length);
        aCard.classList.add(cardTab[individualPosition]);
        cardTab.splice(individualPosition, 1);
    });

     setTimeout( () =>
     {
             cards.forEach( aCard =>
           {
                aCard.classList.add("hidden");
                aCard.addEventListener("click", clickedCard);
           })
     }, 750);
}

randomCards();

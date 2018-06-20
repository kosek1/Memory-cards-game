const cardTab = ["cat" , "cat-word" , "dog" , "dog-word"];

let cards = document.querySelectorAll(".flash-card div");
cards = [...cards];

let activeCard = "";
const activeCards = [];

const cardPairs = cards.length / 2;
gameLength = 0;




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
                cards.forEach(function(aCard)
              {
                   aCard.removeEventListener("click" , clickedCard);
              })

                activeCards[1] = activeCard;


                   setTimeout(function()
                    {
                          if(activeCards[0].className === "cat" && activeCards[1].className === "cat-word" || activeCards[0].className === "cat-word" && activeCards[1].className === "cat" ||
                              activeCards[0].className === "dog" && activeCards[1].className === "dog-word" || activeCards[0].className === "dog-word" && activeCards[1].className === "dog")
                          {
                             activeCards.forEach(function(aCard)
                             {
                                  aCard.classList.remove("hidden");
                                  aCard.classList.add("off");
                              })
                                gameLength++;

                                    if (gameLength == cardPairs)
                                    {
                                                document.querySelector(".flash-card").style.border = "0";
                                                cards.forEach(function(e)
                                                  {
                                                      e.style.border = "0";
                                                  })

                                                setTimeout(function()
                                              {
                                                    document.querySelector(".summary").style.display = "flex";
                                                    document.querySelector(".flash-card").style.display = "none";
                                                    document.querySelector("body").style.backgroundColor = "black";
                                                    document.querySelector(".again").addEventListener("click", () => location.reload() )
                                                    document.querySelector(".next").addEventListener("click", () => location.href= "level2.html")
                                              }, 250)
                                    }
                          }

                        else
                        {
                                 activeCards.forEach(function(aCard)
                               {
                                  aCard.classList.add("hidden");
                               })
                        }

                      activeCard = "";
                      activeCards.length = 0;
                      cards.forEach(function(aCard)
                        {
                           aCard.addEventListener("click" , clickedCard);
                        })
                   }, 500)
        }
}


const randomCards = function()
{
    cards.forEach(function(aCard)
    {
        const individualPosition = Math.floor(Math.random() * cardTab.length);
        aCard.classList.add(cardTab[individualPosition]);
        cardTab.splice(individualPosition, 1);
    });

     setTimeout(function()
     {
             cards.forEach(function(aCard)
           {
                aCard.classList.add("hidden");
                aCard.addEventListener("click", clickedCard);
           })
     }, 2000);
}

randomCards();

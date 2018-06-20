const cardTab = ["dog", "dog-word", "cat", "cat-word", "cow", "cow-word"]

let cards = document.querySelectorAll(".flash-card div");
cards = [... cards];

let activeCard = "";
const activeCards = [];

const cardPairs = 3;
let  gameLength = 0;


const clickedCard = function()
{
    activeCard = this;

    if(activeCards[0] == activeCard) return;
    activeCard.classList.remove("hidden");


    if(activeCards.length === 0)
    {
       activeCards[0] = activeCard;
       return;
    }

    else
    {
          cards.forEach( card =>  card.removeEventListener("click", clickedCard))
          activeCards[1] = activeCard;


           setTimeout( () =>
         {
                    if(activeCards[0].className === "cat" && activeCards[1].className === "cat-word" || activeCards[0].className === "cat-word" && activeCards[1].className === "cat" ||
                        activeCards[0].className === "dog" && activeCards[1].className === "dog-word" || activeCards[0].className === "dog-word" && activeCards[1].className === "dog" ||
                        activeCards[0].className === "cow" && activeCards[1].className === "cow-word" || activeCards[0].className === "cow-word" && activeCards[1].className === "cow")
                          {
                                  activeCards.forEach( card =>
                                  {
                                      card.classList.remove("hidden");
                                      card.classList.add("off");
                                  });
                                   gameLength++;


                                  if(gameLength == cardPairs)
                                  {
                                              document.querySelector(".flash-card").style.border = "0";
                                              cards.forEach( e =>
                                                {
                                                    e.style.border = "0";
                                                })

                                              setTimeout( () =>
                                            {
                                                  document.querySelector(".summary-level-two").style.display = "flex";
                                                  document.querySelector(".flash-card").style.display = "none";
                                                  document.querySelector("body").style.backgroundColor = "black";
                                                  document.querySelector(".previous").addEventListener("click", () => location.href = "index.html");
                                                  document.querySelector(".again").addEventListener("click", () => location.reload() )
                                                  document.querySelector(".next").addEventListener("click", () => location.href= "level3.html")
                                            }, 250)
                                  }
                          }

                          else
                          {
                                activeCards.forEach( card => card.classList.add("hidden"));
                          }

                          activeCard = "";
                          activeCards.length = 0;
                          cards.forEach( card => card.addEventListener("click", clickedCard) );
           }, 500)
    }
}


const randomCards = () =>
  {
      cards.forEach(card =>
        {
             const individualPosition = Math.floor(Math.random() * cardTab.length);
             card.classList.add(cardTab[individualPosition])
             cardTab.splice(individualPosition, 1)
        })

        setTimeout( () =>
        {
             cards.forEach(card =>
               {
                   card.classList.add("hidden");
                   card.addEventListener("click", clickedCard)
               })
        }, 2000)
  }

  randomCards();

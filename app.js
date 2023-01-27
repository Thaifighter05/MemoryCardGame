let counter = 0;
let firstSelection = "";
let secondSelection = "";



function generateGameBoard() {

  let allCards = [
    {
      name: "Duck",
      url: "./Images/Duck.webp",
      placedCount: 0
    },
    {
      name: "Goose",
      url: "./Images/Goose.webp",
      placedCount: 0
    },
    {
      name: "Ronaldo",
      url: "./Images/Ronaldo.jpg",
      placedCount: 0
    },
    {
      name: "Cat",
      url: "./Images/Cat.jpg",
      placedCount: 0
    },
    {
      name: "Kratos",
      url: "./Images/Kratos.jpg", 
      placedCount: 0
    },
    {
      name: "Messi",
      url: "./Images/Messi.jpg",
      placedCount: 0
    },
    {
      name: "Panther",
      url: "./Images/Panther.webp",
      placedCount: 0
    },
    {
      name: "Wolf",
      url: "./Images/Wolf.webp",
      placedCount: 0
    },
    {
      
    }
  ];

  for (let i = 0; i < 16; i++) {
    let placedCard = false;
    while (placedCard == false) {
      let randomCard = Math.floor(Math.random() * allCards.length);
      if (allCards[randomCard].placedCount < 2) {
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.setAttribute("gameCard", allCards[randomCard].name);

        let newImg = document.createElement("img");
        newImg.src = allCards[randomCard].url;
        newCard.append(newImg);

        document.querySelector(".cards").append(newCard);

        allCards[randomCard].placedCount++;
        placedCard = true;
      }
    }
  };

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("clicked");

      if (counter === 0) {
        firstSelection = card.getAttribute("gameCard");
        counter++;
      } else {
        secondSelection = card.getAttribute("gameCard");
        counter = 0;

        if (firstSelection === secondSelection) {
          const correctCards = document.querySelectorAll(
            ".card[gameCard='" + firstSelection + "']"
          );

          correctCards[0].classList.add("checked");
          correctCards[0].classList.remove("clicked");
          correctCards[1].classList.add("checked");
          correctCards[1].classList.remove("clicked");
        } else {
          const incorrectCards = document.querySelectorAll(".card.clicked");

          incorrectCards[0].classList.add("shake");
          incorrectCards[1].classList.add("shake");

          setTimeout(() => {
            incorrectCards[0].classList.remove("shake");
            incorrectCards[0].classList.remove("clicked");
            incorrectCards[1].classList.remove("shake");
            incorrectCards[1].classList.remove("clicked");
          }, 800);
        }
      }
    });
  });

}

generateGameBoard();
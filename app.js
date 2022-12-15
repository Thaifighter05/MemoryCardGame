const section = document.querySelector("section")
const playerLivesCount = document.querySelector("span")
const playerLives= 6;

playerLivesCount.textContent = playerLives;

const getData = () => [{}]

const data = getData(); 


const randomize = () => {

  const cardata = getData();
  cardata.sort(() => Math.random()- 0,5);
  console.log(cardata);
};

randomize();
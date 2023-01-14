"use strict";
const btnEL = document.querySelector("#btn");
const jokeEL=document.querySelector("#joke")
const apiKey = "Qwl5+75I9DXtOQFKazelyQ==UcQ3BFwo90tS46lP";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function joke() {
  const response = await fetch(apiURL, options);
  const data = await response.json();
  const joke=data[0].joke
 jokeEL.innerHTML=`"${joke}"`
}

btnEL.addEventListener("click", joke);

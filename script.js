"use strict";
const btnEL = document.querySelector("#btn");
const jokeEL = document.querySelector("#joke");
const apiKey = "Qwl5+75I9DXtOQFKazelyQ==UcQ3BFwo90tS46lP";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function joke() {
  try {
    jokeEL.innerText = "Updating...";
    btnEL.innerText = "loading...";
    btnEL.disabled = true;
    const response = await fetch(apiURL, options);
    const data = await response.json();
    const joke = data[0].joke;
    btnEL.innerText = "TELL ME A JOKE";
    jokeEL.innerHTML = `"${joke}"`;
    btnEL.disabled = false;
  } catch (error) {
    jokeEL.innerHTML = `An error happened,try again 😕`;
    btnEL.innerText = "TELL ME A JOKE";
  }
}

btnEL.addEventListener("click", joke);

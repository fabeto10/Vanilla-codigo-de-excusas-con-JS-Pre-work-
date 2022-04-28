/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!" + randomNumber);
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possesion = ["homework", "toe", "car", "shoe"];
  let where = ["on the streets", "in my house", "in my driveway"];

  let pronIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possesionIndx = Math.floor(Math.random() * possesion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    possesion[possesionIndx] +
    " " +
    where[whereIndx]
  );
};

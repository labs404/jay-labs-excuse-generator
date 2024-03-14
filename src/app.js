/* eslint-disable */
import "bootstrap";
import "./style.css";

let excuse;
let who = [
  "Steve Buscemi",
  "Ronald McDonald",
  "An angry frog",
  "The actual void lord itself",
  "The person that invented envelope adhesive",
  "Death metal zombie Princess Diana",
  "Abraham Lincoln's moustache",
  "Chuck Norris"
];
let action = [
  "de-materialized",
  "created a wonderful puree using only",
  "forced self-awareness on",
  "falcon punched",
  "performed a 'divide by zero' on",
  "awkwardly caressed"
];
let what = [
  "my favorite underwear",
  "the enter keys from all my keyboards",
  "an innocent kitten",
  "my second favorite Backstreet Boys poster",
  "a heavily soiled urinal cake",
  "a battle tested nerf gun"
];
let when = [
  "on Christmas Eve",
  "while a hot pocket was being microwaved",
  "during the vocal peak in Hanson's breakaway hit MmmBop",
  "while I was in the bathroom",
  "while I was completing my excuse generator project",
  "during a barbershop quartet rendition of a Skrillex dubstep song"
];

function generateExcuse() {
  excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    ".";

  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;
}

window.onload = function() {
  generateExcuse();
  document.getElementById("myBtn").addEventListener("click", generateExcuse);
};

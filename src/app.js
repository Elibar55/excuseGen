/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let first = "A ";
  let adj = [
    "two headed ",
    "nuclear ",
    "angry ",
    "lonely ",
    "crazy ",
    "glowing ",
    "smelly ",
    "slow ",
    "old "
  ];
  let noun = [
    "jogger ",
    "racoon ",
    "dog ",
    "merchant ",
    "driver ",
    "comedian ",
    "pinecone "
  ];
  let action = [
    "took my ",
    "threw my ",
    "yelled at my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my "
  ];
  let possession = [
    "toe ",
    "car ",
    "watch ",
    "shoe ",
    "wallet ",
    "shirt ",
    "keys ",
    "computer ",
    "phone ",
    "sandwich "
  ];
  let where = [
    "on the street",
    "in my house",
    "in my driveway",
    "in front of the office",
    "near the mall",
    "near the toilet",
    "at the bus station"
  ];

  const getRandomNum = arr => {
    return Math.floor(Math.random() * arr.length);
  };

  let rdm1 = getRandomNum(adj);
  let rdm2 = getRandomNum(noun);
  let rdm3 = getRandomNum(action);
  let rdm4 = getRandomNum(possession);
  let rdm5 = getRandomNum(where);

  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possession[rdm4] +
    where[rdm5];
};

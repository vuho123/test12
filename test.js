let $video = document.getElementById("newVideo");
let $video1 = document.getElementById("newVideo1");
let $video2 = document.getElementById("newVideo2");
let $video3 = document.getElementById("newVideo3");
let $video4 = document.getElementById("newVideo4");
let $keyButton = document.getElementById("keyButton");
let $name = document.getElementById("name");
let $skillDescription = document.getElementById("skillDescription");

function Passive() {
  $keyButton.innerHTML = "Passive";
  $name.innerHTML = "TRIUMPHANT ROAR";
  $skillDescription.innerHTML =
    "Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.";
  $video.innerHTML = `<source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_P1.webm" type= "video/mp4"></source>`;
}

function FirstSkill() {
  keyButton.innerHTML = "Q";
  $name.innerHTML = "PULVERIZE";
  $skillDescription.innerHTML =
    "Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air";
  $video1.innerHTML = `<source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.webm" type= "video/mp4"></source>`;
}
function SecondSkill() {
  keyButton.innerHTML = "W";
  $name.innerHTML = "HEADBUTT";
  $skillDescription.innerHTML =
    "Alistar rams a target with his head, dealing damage and knocking the target back.    ";
  $video2.innerHTML = `<source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_W1.webm" type= "video/mp4"></source>`;
}
function ThirdSkill() {
  keyButton.innerHTML = "E";
  $name.innerHTML = "TRAMPLE";
  $skillDescription.innerHTML =
    "Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.    ";
  $video3.innerHTML = `<source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_E1.webm" type= "video/mp4"></source>`;
}
function FourthSkill() {
  keyButton.innerHTML = "R";
  $name.innerHTML = "Unbreakable Will	";
  $skillDescription.innerHTML =
    "Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.";
  $video4.innerHTML = `<source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_R1.webm" type= "video/mp4"></source>`;
}

//image

function myFunction(imgs) {
  let expandImg = document.getElementById("expandedImg");

  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
  expandImg.parentElement.style.animation = "fadeIn 5s";
}

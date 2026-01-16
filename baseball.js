//create XHLHttpRequest Object!
const xhr = new XMLHttpRequest();

// onload is an EVENT... like a click event :)
xhr.onload = function () {
  if(xhr.status === 200){
    const data = JSON.parse(xhr.responseText);
container = document.getElementById("cards");
const card = document.createElement("div");  
const players = data.players;

let statsHTML = ""
let teamsHTMl = ""
let awardsHTML = ""

.forEach(element =>  {
  const card;
  //EMPTY VARIABLES

  // for loop goes here
}

)
for(;team < players.team.length ; ;)

}
};

xhr.open("GET", "player.json");
xhr.send();


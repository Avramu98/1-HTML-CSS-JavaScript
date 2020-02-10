var game = new Game();
game.getAll().then(function(data) {
  console.log(data);
  displayGamesListHtml(data);
});
function displayGamesListHtml(data) {
  var listElement = document.getElementById("list-games");
  for (var i = 0; i < data.length; i++) {
    var game = data[i];
    var template = document.getElementById("template");
    var clonedElement = template.cloneNode(true);


    var linkElement = clonedElement.querySelector("a");
    linkElement.href = "gameDetails.html?id=" + game._id;


    var titleElement = clonedElement.querySelector("h3");
    titleElement.innerText = game.title;
    var bodyElement = clonedElement.querySelector("img");
    bodyElement.setAttribute("src" , game.imageUrl);
    clonedElement.id = game._id;
    var removeBtn = clonedElement.querySelector("#remove");
    removeBtn.addEventListener("click", removeGames);
    var editBtn = clonedElement.querySelector("#edit");
    editBtn.addEventListener("click" , editGames);
    listElement.appendChild(clonedElement);
  }
}

function removeGames(event) {
  var grandparentElement = event.target.parentElement.parentElement;
  gameId = grandparentElement.id;
  game.remove().then(function(data) {
    console.log("deleted", data);
    grandparentElement.remove();
  });
}

function editGames(event) {
  console.log("edit event", event);
  var grandparentElement = event.target.parentElement.parentElement;
  var gameId = grandparentElement.id;
  var editBtn = event.target;
  this.disabled = true;
  var inputLabelContainer = document.createElement("div");
  inputLabelContainer.setAttribute("class" , "input-label-container");

  var inputsContainer = document.createElement("div");
  inputsContainer.setAttribute("class" ,"inputs-container");

  var labelsContainer = document.createElement("div");
  labelsContainer.setAttribute("class" ,"labels-container");

  var titleElement = document.createElement("input");
  var titleLabelElement = document.createElement("label");
  titleLabelElement.innerHTML = "Title: ";
  grandparentElement.appendChild(inputsContainer);
  grandparentElement.appendChild(labelsContainer);
  grandparentElement.appendChild(inputLabelContainer);
  inputsContainer.appendChild(titleElement);
  labelsContainer.appendChild(titleLabelElement);


  var imageElement = document.createElement("input");
  var imageLabelElement = document.createElement("label");
  imageLabelElement.innerHTML = "Image: ";
  inputsContainer.appendChild(imageElement);
  labelsContainer.appendChild(imageLabelElement);

  inputLabelContainer.appendChild(inputsContainer);
  inputLabelContainer.appendChild(labelsContainer);

  var saveElement = document.createElement("button");
  saveElement.innerHTML = "Save";
  saveElement.setAttribute("class" , "same-buttons save-btn");
  inputLabelContainer.appendChild(saveElement);
  saveElement.addEventListener("click", function(clickSaveEvent) {
    var imageValue = imageElement.value;
    var titleValue = titleElement.value;
    game.edit(gameId, titleValue , imageValue).then(function(data) {
      console.log("edited", data);
      grandparentElement.querySelector("h3").innerHTML = data.title;
      grandparentElement.querySelector("img").innerHTML = data.imageUrl;
      location.reload();
    });
  });
}

var regenerateGames = document.querySelector(".regenerate");
regenerateGames.addEventListener("click", function regenerate() {
game.regenerate().then(function(data) {
    console.log("regenerated");
    location.reload();
  });
});

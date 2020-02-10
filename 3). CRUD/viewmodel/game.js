var gameId = getQueryValue("id");
console.log("Game ID ", gameId);

var game = new Game({ id: gameId });
game.get().then(function(data) {
    console.log(data);
    displayGameHtml(data);
  })
  .catch(function(error) {
    document.title.innerText = "Invalid post ID";
  });
  var details = new Details();
  details.getAll(gameId).then(function(data) {
    console.log(data);
    displayGameListHtml(data);
  });

  function displayGameHtml(data) {
    var h1 = document.querySelector("h1");
    var bodyElement = document.querySelector("img");
    bodyElement.setAttribute("src" , data.imageUrl);
    h1.innerText = data.title;
    bodyElement = data.imageUrl;

  }

  function displayGameListHtml(data) {
    var listElement = document.getElementById("list-games");
      var template = document.getElementById("template");
      var clonedElement = template.cloneNode(true);
      var section = document.querySelector("section");

      var descriptionLabel = document.createElement("label");
      descriptionLabel.innerText = "Description:::::::::::::::::::::::::::::";
      var description = clonedElement.querySelector("p");
      description.innerHTML = data.description;
    descriptionLabel.before(description);

      var genreLabel = document.createElement("label");
      genreLabel.innerHTML = "Genre";
      listElement.appendChild(genreLabel);
      var genre = clonedElement.querySelector("#genre");
      genre.innerHTML = data.genre;

      var releaseLabel = document.createElement("label");
      releaseLabel.innerHTML = "Release";
      listElement.appendChild(releaseLabel);
      var releaseDate = clonedElement.querySelector("#release-date");
      releaseDate.innerHTML = data.releaseDate;

      var publisherLabel = document.createElement("label");
      publisherLabel.innerHTML = "Publisher";
      listElement.appendChild(publisherLabel);
      var publisher = clonedElement.querySelector("#publisher");
      publisher.innerHTML = data.publisher;

      listElement.appendChild(clonedElement);

  }

function getQueryValue(key) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === key) {
      return pair[1];
    }
  }
  return false;
}

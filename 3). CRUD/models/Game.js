var baseUrl = "https://games-api-siit.herokuapp.com";
Game = function Game(options ={}) {
  this.id = options.id;
};
Game.prototype.getAll = function() {
  return fetch(baseUrl + "/games").then(function(response) {
    console.log("response", response);
    if (response.ok) {
      return response.json();
    }
    throw new Error("A network error occured", response.status);
  });
  };

Game.prototype.remove = function removeGamesFromApi(gameid) {
  var url = baseUrl + "/games/" + gameId;
  return fetch(url, {
    method: "DELETE"
  }).then(function(response) {
  return response.text()
  });
};
Game.prototype.edit = function editGamesFromApi(gameId, titleValue , imageValue) {
  var url = baseUrl + "/games/" + gameId;
  var data = {
    title: titleValue ,
    imageUrl: imageValue
  };

  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(function(response) {
    return response.json();
  });
};

Game.prototype.regenerate = function regenerateGamesInApi() {
  var url = baseUrl + "/regenerate-games";
  return fetch(url , {
    method: "GET"
  }).then(function(response) {
  return response.text()
  });
};
Game.prototype.get = function() {
  return fetch(baseUrl + "/games/" + gameId).then(function(response) {
    console.log("response", response);

    if (response.ok) {
      return response.json();
    }

    throw new Error("A network error occured", response.status);
  });
};

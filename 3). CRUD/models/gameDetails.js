var baseUrl = "https://games-api-siit.herokuapp.com";

window.Details = function moreDetails() {};

Details.prototype.getAll = function(gameId) {
  return fetch(baseUrl + "/games/" + gameId).then(function(
    response
  ) {
    return response.json();
  });
};

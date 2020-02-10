var centerBtn = document.getElementById("center-btn");
var frontEndBtn = document.querySelector("#front-end-btn");
var htmlBtn = document.getElementById("html-btn");
var cssBtn = document.getElementById("css-btn");
var jsBtn = document.getElementById("js-btn");
var softwareBtn = document.getElementById("software-btn");
var photoshopBtn = document.getElementById("photoshop-btn");
var abilitiesBtn = document.getElementById("abilities-btn");
var selfStarterBtn = document.getElementById("self-starter-btn");
var resultsDrivenBtn = document.getElementById("results-driven-btn");
var attentionToDetailsBtn = document.getElementById("attention-to-details-btn");


centerBtn.addEventListener("click" , centerBtnFunction);
frontEndBtn.addEventListener("click" , frontEndBtnFunction);
abilitiesBtn.addEventListener("click" , abilitiesBtnFunction);
softwareBtn.addEventListener("click" , softwareBtnFunction);

function centerBtnFunction() {
  var centerCircle=document.querySelector(".center-btn-circle");
  centerCircle.style.opacity="1";
  centerCircle.style.transition="1s";
  setTimeout(function() {
    var circleElements = document.querySelectorAll(".front-end-btn-circle , .abilities-btn-circle , .software-btn-circle");
    for(var i = 0 ; i < circleElements.length ; i++) {
    circleElements[i].style.opacity="1"
      circleElements[i].style.transition="4s";
    }
  }, 800);
  var brenchElements = document.querySelectorAll(".center-brench-to-front-end , .center-brench-to-software , .center-brench-to-abilities");
  for(var i = 0 ; i < brenchElements.length ; i++) {
  brenchElements[i].style.display="block";
  }
  setTimeout(function() {
    frontEndBtn.style.opacity="1";
    softwareBtn.style.opacity="1";
    abilitiesBtn.style.opacity="1";
    frontEndBtn.style.transition="4s";
    softwareBtn.style.transition="4s";
    abilitiesBtn.style.transition="4s";
  }, 2000);

}

function frontEndBtnFunction() {
  var brenchElements = document.querySelectorAll(".front-end-brench-to-css , .front-end-brench-to-html , .front-end-brench-to-js");
  for(var i = 0 ; i < brenchElements.length ; i++) {
  brenchElements[i].style.display="block";
  }
  setTimeout(function() {
    var circleElements = document.querySelectorAll(".html-circle , .css-circle , .js-btn-circle");
    for(var i = 0 ; i < circleElements.length ; i++) {
    circleElements[i].style.opacity="1"
      circleElements[i].style.transition="4s";
    }
  }, 800);
  setTimeout(function() {

      htmlBtn.style.opacity="1";
      cssBtn.style.opacity="1";
      jsBtn.style.opacity="1";
      htmlBtn.style.transition="4s";
      cssBtn.style.transition="4s";
      jsBtn.style.transition="4s";
  }, 2000);

  }

  function abilitiesBtnFunction() {
    var brenchElements = document.querySelectorAll(".abilities-brench-to-self-starter , .abilities-brench-to-results-driven , .abilities-brench-to-attention-to-details");
    for(var i = 0 ; i < brenchElements.length ; i++) {
    brenchElements[i].style.display="block";
    }
    setTimeout(function() {
      var circleElements = document.querySelectorAll(".results-driven-btn-circle , .attention-to-details-btn-circle , .self-starter-btn-circle");
      for(var i = 0 ; i < circleElements.length ; i++) {
      circleElements[i].style.opacity="1"
        circleElements[i].style.transition="4s";
      }
    }, 800);
    setTimeout(function() {
      resultsDrivenBtn.style.opacity="1";
      selfStarterBtn.style.opacity="1";
      attentionToDetailsBtn.style.opacity="1";
      resultsDrivenBtn.style.transition="4s";
      selfStarterBtn.style.transition="4s";
      attentionToDetailsBtn.style.transition="4s";
    }, 2000);
    }

    function softwareBtnFunction() {

      document.querySelector(".software-brench-to-photoshop").style.display="block";
      setTimeout(function() {
          document.querySelector(".photoshop-btn-circle").style.opacity="1";
          document.querySelector(".photoshop-btn-circle").style.transition="4s";

      }, 800);
setTimeout(function() {
      photoshopBtn.style.opacity="1";
      photoshopBtn.style.transition="4s";
      }, 2000);
    }
// EXPERIENCE //
var boxBtn=document.getElementById("box-btn");
//BULB//
var switchBtn=document.getElementById("switch-light");
//----//



boxBtn.addEventListener("click" , clickBox);
switchBtn.addEventListener("click", switchLight);








function switchLight () {
  for ( var i =0 ; i < 3 ; i++) {
    var wires = document.getElementsByClassName("wires");
    wires[i].style.opacity="1";
    wires[i].style.transition="2s";
  }
  setTimeout(function() {
    for ( var i =0 ; i < 3 ; i++) {
    var bulbs = document.getElementsByClassName("bulb-same-container");
    bulbs[i].style.opacity="1";
    bulbs[i].style.transition="2s";
    }
  }, 1000);

  setTimeout(function() {

    var backgroundEducation =document.querySelector(".education-container");
    backgroundEducation.style.background= "linear-gradient(to top, #8597C5, #0082c8)";
    backgroundEducation.style.transition="3s";

  }, 2000);
}


function clickBox () {
  var close= document.querySelector(".close-box-image");
  var open=document.querySelector(".open-box-image");
  var smoke=document.querySelector(".smoke-image");
  var fromTheBox=document.querySelector(".from-the-box");
  var pressMe = document.querySelector(".press-me");
  close.style.opacity="0";
  open.style.transition="3s";
  pressMe.style.opacity="0";
  open.style.opacity="1";
  smoke.style.transition="4s";
  smoke.style.opacity="1";
  boxBtn.style.display="none";
  setTimeout(function() {
  fromTheBox.style.display="block";
}, 1100);

}

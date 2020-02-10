console.log("DOM=", document);
var submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", submitForm);
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var male = document.getElementById('male');
var male1 = document.getElementsByTagName('span')[0];
var female1 = document.getElementsByTagName('span')[1];
var female = document.getElementById('female');
var textarea = document.getElementById('textarea');
var text = textarea.value;
var closeBannerGood = document.getElementById('banner-btn');
var closeBannerBad = document.getElementById('banner-btn-bad');
closeBannerBad.addEventListener("click", closeTheBannerBad);
closeBannerGood.addEventListener("click", closeTheBannerGood);

function submitForm(event) {
  event.preventDefault();
  if (isNaN(firstName.value) && isNaN(lastName.value) && ((male.checked) || (female.checked)) && (text.length < 1)) {
    upperCase();
    firstName.style.border = "2px solid 	#00D947";
    lastName.style.border = "2px solid 	#00D947";
    gender();
    textarea.style.border = "2px solid #00D947";
    var strong = document.getElementsByTagName('strong')[0];
    var strongTwo = document.getElementsByTagName('strong')[1];
    var bannerGood = document.getElementById("bannerGood");
    bannerGood.style.opacity = "1";
    bannerGood.style.transition = "all 2s";
    strongTwo.innerHTML = upperCaseLast;
    strong.innerHTML = upperCaseFirst;
    clear();
    comments();
    console.log("First Name : " + upperCaseFirst + "|" + "Last Name: " + upperCaseFirst);
  } else {
    firstName.style.border = "2px solid #D60000";
    lastName.style.border = "2px solid #D60000";
    male1.style.border = "2px solid #D60000";
    female1.style.border = "2px solid #D60000";
    textarea.style.border = "2px solid #D60000";
    console.log("First name :nevalabil" + "|" + "Last name : nevalabil");
    var bannerBad = document.getElementById("bannerBad");
    bannerBad.style.opacity = "1";
    bannerBad.style.transition = "all 2s";
    clear();
  }

}
function upperCase() {
  upperCaseFirst = firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1);
  upperCaseLast = lastName.value.charAt(0).toUpperCase() + lastName.value.slice(1);
}

function closeTheBannerGood() {
  bannerGood.style.opacity = "0";
}

function closeTheBannerBad() {
  bannerBad.style.opacity = "0";
}

function gender() {
  if (male.checked) {
    male1.style.border = "2px solid #00D947";
  } else {
    female1.style.border = "2px solid #00D947";
  }
}

function clear() {
  setTimeout(function clear() {
    firstName.value = "";
    lastName.value = "";
    textarea.value = "";
    if (((male1.style.border = "2px solid #D60000") && (female1.style.border = "2px solid #D60000") && (firstName.style.border = "2px solid #D60000") && (lastName.style.border = "2px solid #D60000") && (textarea.style.border = "2px solid #D60000")) || ((male1.style.border = "2px solid #00D947") && (female1.style.border = "2px solid #00D947") && (firstName.style.border = "2px solid #00D947") && (lastName.style.border = "2px solid #00D947") && (textarea.style.border = "2px solid #00D947"))) {
      male1.style.border = "2px solid black";
      female1.style.border = "2px solid black";
      firstName.style.border = "2px solid black";
      lastName.style.border = "2px solid black";
      textarea.style.border = "2px solid black";
      bannerBad.style.opacity = "0";
      bannerGood.style.opacity= "0";
    }
    if (male.checked = true) {
      male.checked = false;
    } else {
      female.checked = false;
    }

  }, 3000);
}



function comments() {
  upperCase();
  var section = document.createElement('section');
  section.setAttribute("id" , "comment-col");
  var commentsList= document.getElementById('comments-list');
  if (male.checked) {
    section.innerHTML = "<p>" + ' " ' + textarea.value + ' " ' + "</p>" +
                        "<strong>" +  'by ' + upperCaseFirst + ' ' + upperCaseLast + " , " + male.value      +"</strong>" ;

  } else {
    section.innerHTML = "<p>" + ' " ' + textarea.value + ' " ' + "</p>" +
                        "<strong>" +  'by ' + upperCaseFirst + ' ' + upperCaseLast + " , " + female.value      +"</strong>" ;

  }

  commentsList.appendChild(section);
}

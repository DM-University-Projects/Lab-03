(function(){

  let myName = document.getElementById("my-name");
  let userName = document.getElementById("user-name");
  let getName = document.getElementById("get-name");
  let myHeader = document.getElementById("my-header");
  let userGreeting = document.getElementById("user-greeting");

  function PerformGreeting() {
    myName.innerHTML = userName.value;
    event.preventDefault();
    return fales;
  }

  if (typeof event === "undefined") {
  getName.onsubmit = PerformGreeting; //Firefox
  } else {

  getName.addEventListener("submit", PerformGreeting);
  }

}());

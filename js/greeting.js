(function(){

  let myName = document.getElementById("my-name");
  let userName = document.getElementById("user-name");
  let getName = document.getElementById("get-name");
  let myHeader = document.getElementById("my-header");
  let userGreeting = document.getElementById("user-greeting");

  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
    ev.preventDefault();
  }

  getName.addEventListener("submit", PerformGreeting);

}());

"use strict";

console.log("JS kører");

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  document
    .querySelector("#grid-container")
        .addEventListener("submit", clickSubmit);
    
    document.querySelector("#accept").addEventListener("click", clickAccept);
}

function clickAccept(event) {
    console.log("accept changed");
    console.log(event.target.checked);
    if (event.target.checked === true) {

    }
    else (
        document.querySelector("#btn-submit").disabled = true;
)

    document.querySelector("#btn_submit")
    
}


function clickSubmit(event) {
  event.preventDefault();
  console.log("a");
  console.log(event.target);
  console.log(event.currentTarget);
  console.log("click submit");
  event.preventDefault();
  console.log(event.fullname);

  console.log();

  const elements = document.querySelector("#grid-container").elements;

  const signup = {
    fullname: elements.namedItem("full_name").value,
    payment: elements.namedItem("payment").value,
    username: elements.namedItem("username").value,
    password: elements.namedItem("password").value,
    email: elements.namedItem("email").value
  };

    // for (const prop in signup) {
        // signup.prop = elements.namedItem(prop).value;
        // if(signup[prop] === "true")
    // }
    
  console.log(signup);
}

// document.querySelector("form").elements
// HTMLFormControlsCollection(14) [input#full_name, input#email, input#username, input#password, input#password_repeat, input#free, input#cheap, input#fair, input#overpriced, select#patment_method, input#newsletter, input#spam, input#submit, input, full_name: input#full_name, email: input#email, username: input#username, password: input#password, password_repeat: input#password_repeat, …]

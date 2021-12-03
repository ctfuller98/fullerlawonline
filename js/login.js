import {qs} from "./utils.js"

console.log("login.js should exsits")

async function login(email, password) {
    // I built the login method with a callback: next. This makes it much more flexible...
    // there could be many different things the user wants to do after logging in...
    // this allows us that flexibility without having to write a bunch of login methods
    console.log(email, password)

    let data = await fetch("../json/users.json")
    .then(response => response.json());

    console.log(data)
    //Compare user array to eamil and password
    data.Users.forEach(element => {
        if (element.email == email && element.password == password)
        console.log("successful log in")
        window.location.replace("../user_portal/index.html")
    });


  }



function showLogin() {
      // now that it is in the DOM we can add a listener for the login button
      document.querySelector('#loginButton').addEventListener('click', (e) => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        login(email, password);
      });
  }

showLogin()
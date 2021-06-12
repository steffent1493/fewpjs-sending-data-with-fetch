// Add your code here
const userUrl = "http://localhost:3000/users";

let bodyData = {
    name: "Steve",
    email: "steve@steve.com"
};

let objStuff = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
};

function submitData () {
 return fetch(userUrl, objStuff)
    .then(response => response.json())
    .then(getID)
    .catch(errorFunc)
}

const bodyTag = document.querySelector(`body`)

function getID(object) {
    document.body.innerHTML = object.id
}

function errorFunc(error) {
    document.body.innerHTML = error.message
}
    
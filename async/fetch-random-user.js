const btn = document.querySelector('#btn');
const avatarDisc = document.querySelector('#avatar');
const fullnameDisc = document.querySelector('#fullname');
const usernameDisc = document.querySelector('#username');
const emailDisc = document.querySelector('#email');
const cityDisc = document.querySelector('#city');

const arr = [fullnameDisc, usernameDisc, emailDisc, cityDisc];

function handleError(response) {
  // if response fail, throw error
  if (!response.ok) {
    throw Error(response.status);
  }

  // otherwise proceed and pass down success promise object
  return response;
  // return response.json(); // if return res.json() so we have data ready in next .then()
}

function parseJSON(res) {
  // chaining .then() then inside a .then()
  // exposes [[promiseValue]] of Promise object, then we can do things with it
  // return res.results[0];
  return res.json().then(data => {
    return data.results[0]; // if run .json() twice, returns Typeerror: 'already read'
  });
}

function updateProfile(data) {
  console.log(data);
  const { email } = data;
  const { username } = data.login;
  const { first, last } = data.name;
  const { city } = data.location;
  const avatar = data.picture.medium;

  fullname = first + ' ' + last;

  fullnameDisc.innerText = fullname;
  usernameDisc.innerText = username;
  emailDisc.innerText = email;
  cityDisc.innerText = city;
  avatarDisc.src = avatar;
}

function printErrorHTML(error) {
  arr.forEach(property => {
    property.innerText = error;
    property.style.color = 'red';
  });
  console.log(error);
}

btn.onclick = () => {
  const url = 'https://randomuser.me/api/';

  fetch(url)
    .then(handleError) // handles error, returns the promise object
    .then(parseJSON) // parse object using res.json().then(), then return data we need
    .then(updateProfile) // updates profile information
    .catch(printErrorHTML); // executes error code
};

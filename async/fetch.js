// Fetch API supports data streaming
// whereas xhr must wait for all data to come in altogether

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// fetch(url)
//   .then(res => {
//     console.log(res);
//     console.log(res.status); // 200
//   })
//   .catch(error => {
//     console.log(error);
//   })

fetch(url)
  .then(res => {
    // we get back a Response object, which contains all information
    // res.json() returns a promise object
    console.log('Response object is:', res);
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

// passing options to .fetch(url, {options})
fetch(url, {
  method: 'POST', // default method is 'GET'
  body: JSON.stringify({
    // send data along the way of making requests
    name: 'blue',
    login: 'bluecat'
  })
})
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
  });

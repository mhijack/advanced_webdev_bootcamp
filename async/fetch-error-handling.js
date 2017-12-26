// ======== fetch error handling ========
const btna = document.querySelector('#a');
const btnb = document.querySelector('#b');

btna.onclick = () => {
  const url = 'https://api.github.com/users/colterror';

  fetch(url)
    .then(res => {
      if (!res.ok) {
        // res.ok gives whether the response has an error or not
        // throw an error
        throw new Error('server responded with an error');
      }
      console.log('Request is successful:', res);
      console.log(res.status); // gives status code: 404(error) or 200(success)
    })
    .catch(error => {
      // .catch() will run if there's a problem with the request itself.
      // ex/ connection problem
      // if the server returns an error, it's still a response from a successful request
      console.log('An error occured:', error);
    });
};

// ======================== refactor =========================
// put error checking in its own .then()
// return response then proceed if everything's fine
btnb.onclick = () => {
  const url = 'https://api.github.com/users/colterror';
  // const url = 'https://api.github.com/users/colt';
  // const url = 'https://api.coindesk.com/v1/bpi/currentprice/ad.json';

  fetch(url)
    .then(handleError)
    .then(res => {
      console.log('ok');
    })
    .catch(error => {
      // after !res.ok throws an error, all the code in between will be skipped and go straight to .catch, with error passed as argument
      console.log(error); // prints 'res.status', which we got from throw new Error
    });
};

function handleError(res) {
  // if 404, throw error and don't proceed
  if (!res.ok) {
    throw Error(res.status);
  }

  // if everything's good, proceed with the return success promise object
  return res;
}

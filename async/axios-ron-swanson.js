const xhrbtn = document.querySelector('#xhr');
const fetchbtn = document.querySelector('#fetch');
// const jquerybtn = document.querySelector('#jquery');
const axiosbtn = document.querySelector('#axios');
const quote = document.querySelector('#quote');

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

// ======= XHR =======
xhrbtn.onclick = () => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      quote.innerText = JSON.parse(xhr.responseText)[0];
    } else {
      console.log('error in XHR request');
    }
  };

  xhr.open('GET', url);

  xhr.send();
};

// ======= fetch =======
fetchbtn.onclick = () => {
  function handleError(res) {
    if (!res.ok) {
      throw Error('error occured in fetch');
    }

    return res;
  }

  function parseJSON(res) {
    // return res.json().then(data => {
    //   return data;
    // })
    return res.json();
  }

  function writeQuote(data) {
    quote.innerText = data[0];
  }

  fetch(url)
    .then(handleError)
    .then(parseJSON)
    .then(writeQuote)
    .catch(error => {
      console.log(error);
    });
};

// ======= jQuery =======
$('#jquery').click(() => {
  $.ajax({
    method: 'GET',
    url,
    dataType: 'json'
  })
    .done(res => {
      $('#quote').text(res[0]);
    })
    .fail(error => {
      console.log(error);
    });
});

// ======= Axios =======
axiosbtn.onclick = () => {
  function handleError(error) {
    if (error.request) {
      console.log('REQUEST error:', error.request);
    } else if (error.response) {
      console.log('RESPONSE error:', error.response);
    } else {
      console.log('Other error:', error);
    }
  }

  axios
    .get(url)
    .then(res => {
      quote.innerText = res.data[0];
    })
    .catch(handleError);
};

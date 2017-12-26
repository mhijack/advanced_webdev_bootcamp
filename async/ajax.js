// AJAX = Asynchronous Javascript and XML
// with AJAX, websites can send and request data from a server in the background without disturbing the current page --> single page Apps

// 4 steps for xmlhttprequest:
// 1. create instance
// 2. .onreadystatechange
// 3. .open()
// 4. .send()

// ====== XMLHttpRequest ======
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  // code block will run whenever the readystate changes

  // readystate 4 === request is done
  if (xhr.readyState === 4) {
    // statusCode 200 === request is successful
    if (xhr.status === 200) {
      // the data sent back is stored in xhr.responseText
      console.log(xhr.responseText);
    } else {
      console.log('err');
    }
  }
};

// .open('type', 'url')
xhr.open('GET', 'https://api.github.com/zen'); // defines type of request
xhr.send(); // initiates the request

// https://api.github.com/zen

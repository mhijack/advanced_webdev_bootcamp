// ======= axios basic syntax =======
const url = 'https://jsonplaceholder.typicode.com/comments';
const btn = document.querySelector('button');
const commentEle = document.querySelector('#comments');

function addComments(comments) {
  comments.forEach(comment => {
    appendComment(comment);
  });
}

function appendComment(comment) {
  // creates new p element
  const p = document.createElement('p');

  // write text into p
  p.innerText = comment.email;

  // append p to comment section
  commentEle.appendChild(p);
}

function passData(data) {
  return data.data;
}

function handleError(err) {
  // err.response -> error with the response
  // err.request -> error with the request
  if (err.response) {
    console.log('A problem with RESPONSE', err.response.status);
  } else if (err.request) {
    console.log('A problem with REQUEST', err.request);
  } else {
    console.log('Error', err.message);
  }
}

btn.onclick = () => {
  axios
    .get(url, {
      params: {
        // 2nd argument of .get() can dynamically specify url parameters
        postId: 1
      }
    })
    .then(passData)
    .then(addComments)
    .catch(handleError);
};

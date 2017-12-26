const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  getPic();
});

function getPic() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // JSON.parse() && JSON.stringify()
      const response = JSON.parse(xhr.responseText);
      const url = response.message;
      console.log(url);

      setAttribute('#dog', 'src', url);
    }
  };

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');

  xhr.send();
}

function setAttribute(selector, property, attribute) {
  document.querySelector(selector)[property] = attribute;
}

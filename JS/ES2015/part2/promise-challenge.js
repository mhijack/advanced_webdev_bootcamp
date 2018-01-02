// ===============================================================
// 1. Write a function called hasMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. The function should return a string which displays the username who has the most followers.

function hasMostFollowers(...users) {
  // AJAX to Github User API
  // set url
  let url = 'https://api.github.com/users/';

  // loop through users array and form request url
  const promises = users.map(user => {
    return axios({
      method: 'GET',
      url: url.concat(user)
    });
  });
  // get name & number of followers

  return (
    Promise.all(promises)
      .then(users => {
        return users.map(user => user.data).reduce((cur, next) => {
          if (cur.followers > next.followers) {
            return cur;
          } else {
            return next;
          }
        });
      })
      // return the user with most followers
      .then(
        user =>
          `User with most followers is ${user.login} with ${
            user.followers
          } followers`
      )
      .catch()
  );
}

// because .then() returns a promise, we have to attach another .then() and operate on data inside .then()
hasMostFollowers('mhijack', 'colt', 'tritan').then(data => console.log(data)); // 'user with the most follower is colt'

// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

hasMostFollowers('elie', 'tigarcia', 'colt').then(function(data) {
  console.log(data);
}); // "Colt has the most followers with 424"

// =================================================================================
// 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.

function starWarsString(number) {
  // get from url: https://swapi.co/

  let baseUrl = 'https://swapi.co/api/people/';
  let str = '';

  return axios({
    method: 'GET',
    url: baseUrl.concat(number.toString())
  })
    .then(data => {
      const firstFilmUrl = data.data.films[0];
      str = str.concat(`${data.data.name} is featured in `);

      return axios({
        method: 'GET',
        url: firstFilmUrl
      });
    })
    .then(data => {
      str = str.concat(`${data.data.title}, directed by ${data.data.director} which takes place on `);
      const planetUrl = data.data.planets[0];

      return axios({
        method: 'GET',
        url: planetUrl
      });
    })
    .then(data => {
      str = str.concat(`${data.data.name}.`);

      return str;
    })
    .catch();
}

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"

starWarsString(1).then(function(data) {
  console.log(data);
});

// "Luke Skywalker"
// Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in

// starWarsString(1).then(function(data){
//     console.log(data)
// })

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
// Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet.

// starWarsString(1).then(function(data){
//     console.log(data)
// })

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"

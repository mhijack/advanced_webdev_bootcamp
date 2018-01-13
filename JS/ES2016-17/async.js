/*

'Await'

1. can only be used within async functions
2. await pauses the execution of the async function and is followed by a Promise.
3. waits for the promise to resolve, and then resumes the async function's execution and returns the resolved value

*/

async function first() {
  return 'We did it!';
}

first(); // returns a promise
first().then(val => console.log(val)); // 'We did it!'

// movieData demo
async function getMovieData() {
  console.log('starting');
  const movieData = await $.getJSON(
    'http://omdbapi.com/t=titanic&apikey=thewdb'
  );
  console.log('all done');
  console.log(movieData);
}

getMovieData(); // 1. starting 2. all done 3. movieData

// Object async - putting async functions as methods of objects
const movie = {
  data: 'titanic',
  async getMovie() {
    const response = await $.getJSON(
      'http://omdbapi.com/t=titanic&apikey=thewdb'
    );
    console.log(response);
  }
};

movieCollector.getMovie();

// error handling
async function getUser(user) {
  try {
    const response = await $.getJSON(`https://api.github.com/users/${user}`);
    console.log(response.name);
  } catch (error) {
    console.log(error);
  }
}

// instance methods with Class
class MovieData {
  constructor(name) {
    this.name = name;
  }

  async getMovie() {
    const response = await $.getJSON(
      'http://omdbapi.com/t=titanic&apikey=thewdb'
    );
    console.log(response);
  }
}

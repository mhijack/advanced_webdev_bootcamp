// thinking about HTTP Requests
async function getMovieData() {
  const responseOne = await $.getJSON(
    `http://omdbapi.com/t=titanic&apikey=thewdb`
  );
  const responseTwo = await $.getJSON(
    `http://omdbapi.com/t=shrek&apikey=thewdb`
  );

  // responseTwo will not begin until responseOne has been resolved
  // hence: Sequential
  console.log(responseOne);
  console.log(responseTwo);
}

// if making lots of HTTP requests using async & await, refactor to make them parallel, instead of sequential.
async function getMovieData2() {
  const titanicPromise = $.getJSON(
    `http://omdbapi.com/t=titanic&apikey=thewdb`
  );
  const shrekPromise = $.getJSON(`http://omdbapi.com/t=shrek&apikey=thewdb`);

  // parallel execution, tremendous performance improvement than sequential execution
  const titanicData = await shrekPromise;
  const shrekData = await shrekPromise;
}

// using async with Promise.all([promise1, promise2])
async function getMovie(first, second) {
  // await all promises in Promise.all()
  const movieData = await Promise.all([
    $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
    $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
  ]);

  movieData.forEach(movie => console.log(movie.year));
}

// ================================================
// 'await' simplifies management and readability of asynchronous code
// position of 'await' determines
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');

  // this line will run, when it resolves, code after will be ran
  // thus the time 'haha' will be logged differ depending on where it is placed
  var result = await resolveAfter2Seconds();

  console.log(result);
      console.log('haha')

  // expected output: "resolved"
}

asyncCall();

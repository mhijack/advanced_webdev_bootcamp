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

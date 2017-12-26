// ======= axios basic syntax =======
const url = 'https://opentdb.com/api.php?amount=1';

axios
  .get(url)
  .then(res => {
    // data we need are wrapped in res.data.results
    console.log(res.data.results);
  })
  .catch(error => {
    console.log(error);
  });

// all 4 methods accepts optional 2nd argument: option.
// dataType: 'json' [Intelligent Guess]
// method: 'GET', 'POST'
// url: 'String'

// jQuery .ajax() method
$('#btna').click(() => {
  $.ajax({
    method: 'GET',
    url: 'https://baconipsum.com/api/?type=meat-and-filler',
    // option dataType -> default is Intelligent Guess which automatically modify data
    dataType: 'json'
  })
    .done(addP)
    .fail(error => {
      console.log(typeof error);
    });
});

function addP(data) {
  $('p').text(data[0]);
}

// jQuery .get() method
$('#btnb').click(() => {
  // this is equivalent to $.ajax({method:'GET', url:''})
  $.get('https://api.github.com/zen')
    .done(res => {
      $('p').text(res);
    })
    .fail(() => {
      console.log('error');
    });
});

// jQuery .post() method
$('#btnc').click(() => {
  // 2nd optional parameter: data we wanna send with the post request
  $.post('https://api.github.com/zen', {
    name: 'jack'
  })
    .done(res => {
      console.log(res);
    })
    .fail(error => {
      console.log(error); // error.status is 404
    });
});

// jQuery .getJSON() method
// returned data will be in JSON format
$('#btnd').click(() => {
  // $.getJSON('https://api.github.com/zen')
  $.getJSON('https://baconipsum.com/api/?type=meat-and-filler')
    .done(res => {
      $('p').text(res);
      console.log(res);
    })
    .fail(error => {
      // .fail() will be fired if server responds with invalid JSON, even if status is 200
      console.log('error');
      console.log(error);
    });
});

// when button clicked, send get request to 'https://random.cat/meow'
// update image src attribute

// $.ajax()
$('#btna').click(() => {
  $.ajax({
    method: 'GET',
    url: 'https://random.cat/meow',
    dataType: 'json'
  })
    .done(res => {
      $('#img').attr('src', res.file);
    })
    .fail(error => {
      console.log('error');
      console.log(error);
    });
});

// $.get()
$('#btnb').click(() => {
  $.get('https://random.cat/meow')
    .done(res => {
      $('#img').attr('src', res.file);
    })
    .fail(error => {
      console.log('error');
      console.log(error);
    })
})

// $.getJSON()
$('#btnc').click(() => {
  $.getJSON('https://random.cat/meow')
    .done(res => {
      $('#img').attr('src', res.file);
    })
    .fail(error => {
      console.log('error');
      console.log(error);
    })
})

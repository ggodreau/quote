$(document).ready(function() {
  
  var quote;
                  
  function getNewQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        $('#quote').text(response.quoteText);
        if (response.quoteAuthor) {
          $('#author').text('~' + response.quoteAuthor);
        } else {
          $('#author').text('~ unknown');
        }
      }
    });
  }
  
getNewQuote();

$('.get-quote').on('click', function(e) {
  e.preventDefault();
  getNewQuote();
});
});

//How to get started
//https://forum.freecodecamp.org/t/what-to-know-before-beginning-random-quote-machine/9815

//How to prepare environment - add Bootstrap and Google Fonts
//https://forum.freecodecamp.org/t/set-up-for-front-end-development-codepen/125966

//How to call API w JS
//https://stackoverflow.com/questions/36975619/how-to-call-a-rest-web-service-api-from-javascript-button-handler

//...a more helpful API vid specific to this project
//https://www.youtube.com/watch?v=5xeDQ1-ZfcQ

//...and github repo associated with the vid
//https://github.com/freecodecampbusan/random_quote_generator

//CSS shape generator
//http://bennettfeely.com/clippy/
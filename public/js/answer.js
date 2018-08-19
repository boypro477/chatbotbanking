// Get audio form gg
$("#text_form").on("submit", event => {
  event.preventDefault();
  $.ajax({
    url: "/tuvan/api/answer",
    type: "post",
    data: $("#text_form").serialize()
  })
    .then(answer => {
      document.getElementById('output').innerHTML += '<div class="guest">' + '<p>' + '<b>' + 'Guest: ' + '</b>' + document.getElementById('Textarea').value + '</br' + '</p>' + "</div>";
      document.getElementById("output").innerHTML += '<div class="bot">' + '<p>' + '<b>' + 'BOT: ' + '</b>' + answer.answer + '</br>' + '</p>' + '</div>';
      document.getElementById('Textarea').value = '';
      var url1 = "http://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=" + answer.answer + "&tl=vi&total=1&idx=0&textlen=3";
      $('audio').attr('src', url1).get(0).play(0);



   
    })
    .fail(err => {
      alert("An error occured, please try again later");
      console.error(err);
    });
});
// function getSound (a){



// }
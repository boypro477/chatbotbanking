$("#text_form").on("submit", event => {
  event.preventDefault();
  $.ajax({
    url: "/tuvan/api/answer",
    type: "post",
    data: $("#text_form").serialize()
  })
    .then(answer => {
      console.log(answer);
      // var result=answer;
      $("#resultTextArea").text(answer.answer);
      var text= answer.answer;
      text = encodeURIComponent(text);
      var url = "http://translate.google.com.vn/translate_tts?ie=UTF-8&q="+text+"&tl=vi&client=tw-ob";
      $('audio').attr('src',url).get(0).play();
    })
    .fail(err => {
      alert("An error occured, please try again later");
      console.error(err);
    });
});

$("#text_form").on("submit", event => {
  event.preventDefault();
  $.ajax({
    url: "/",
    type: "post",
    data: $("#text_form").serialize()
  })
    .then(answer => {
      var text= document.getElementById("resultTextArea");
      text = encodeURIComponent(text);
      var url = "http://translate.google.com.vn/translate_tts?ie=UTF-8&q="+text+"&tl=vi&client=tw-ob";
      $('audio').attr('src',url).get(0).play();
    })
    .fail(err => {
      alert("An error occured, please try again later");
      console.error(err);
    });
});

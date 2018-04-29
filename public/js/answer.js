$("#text_form").on("submit", event => {
  event.preventDefault();
  $.ajax({
    url: "/tuvan/api/answer",
    type: "post",
    data: $("#text_form").serialize()
  })
    .then(answer => {
      // console.log(answer);
      // var result=answer;
      // $("#feedback").text(answer.answer);
      document.getElementById('output').innerHTML+='<div class="guest">'+'<p>'+'<b>'+'Guest: '+'</b>'+document.getElementById('Textarea').value+'</br'+'</p>'+"</div>";      
      document.getElementById("output").innerHTML+='<div class="bot">'+'<p>'+'<b>'+'BOT: '+'</b>'+answer.answer+'</br>'+'</p>'+'</div>';
      document.getElementById('Textarea').value='';
      var text= answer.answer;
      text = encodeURIComponent(text);
      var url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q="+text+"&tl=vi&total=1&idx=0&textlen=3";
      // $('audio').attr('src',url).get(0).play();
      $('#audio').html('<audio autoplay><source src="'+url+'"></audio>');
    })
    .fail(err => {
      alert("An error occured, please try again later");
      console.error(err);
    });
});
// button.addEventListener
// function resetText (){
//   setTimeout(function() {
//       document.getElementById("Textarea").value = null;

//    }, 100);

// }
// document.getElementById("send").addEventListener("mouseup",resetText);
// document.getElementById("microphone").addEventListener("click", resetText);
// <script src="/js/answer.js"></script>

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
// function checkTextLength(){
//   var input = document.getElementById('Textarea').value;
//   if(input.length<=1)
//   {
//     // $("#send").removeClass("btn-primary").addClass("btn-Secondary");
//     document.getElementById("send").disabled = true;
//   }
//   else {
//     document.getElementById("send").disabled = false;
//     // $("#send").removeClass("btn-Secondary").addClass("btn-primary");
//
//   }
// }
// const textarea = document.getElementById("Textarea");
// textarea.addEventListener("change", checkTextLength);
// textarea.addEventListener("keyup", checkTextLength);
// textarea.addEventListener("paste", checkTextLength);

function resetText (){
  setTimeout(function() {
      document.getElementById("Textarea").value = null;

   }, 100);

}
document.getElementById("send").addEventListener("mouseup",resetText);
// document.getElementById("microphone").addEventListener("click", resetText);
// <script src="/js/answer.js"></script>

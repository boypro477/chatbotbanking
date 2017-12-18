
			var speechRecognizer = new webkitSpeechRecognition();
			var recognizing=false;
			function startConverting ()
			{
				recognizing=-recognizing;
				if (recognizing == false )
					{
						speechRecognizer.stop();
					}

				if('webkitSpeechRecognition' in window)
				{
					speechRecognizer.continuous = true;
					speechRecognizer.interimResults = true;
					speechRecognizer.lang = 'vi-VN';
					speechRecognizer.start();

					var finalTranscripts = '';
					var text;
					speechRecognizer.onresult = function(event)
					{
						var interimTranscripts = '';
						for(var i = event.resultIndex; i < event.results.length; i++)
						{
							var transcript = event.results[i][0].transcript;
							transcript.replace("\n", "<br>");
							if(event.results[i].isFinal)
							{
								finalTranscripts += transcript;
							}
							else
							{
								interimTranscripts += transcript;
							}
						}
						text = finalTranscripts + interimTranscripts;
						var url = "http://translate.google.com.vn/translate_tts?ie=UTF-8&q="+text+"&tl=vi&client=tw-ob";

						document.getElementById('Textarea').innerHTML = finalTranscripts  + interimTranscripts ;
						$('audio').attr('src',url).get(0).play();
						// document.getElementById('Test').innerHTML = finalTranscripts  + interimTranscripts ;

					};
				}
				else
				{
					document.getElementById('Textarea').innerHTML = 'Bạn cần cập nhật trình duyệt hoặc sử dụng cốc cốc và google chorme để sử dụng tính năng này !!!~~~';
				}
			}

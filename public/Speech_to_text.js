
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
						document.getElementById('Textarea').innerHTML = finalTranscripts  + interimTranscripts ;
			
						// document.getElementById('Test').innerHTML = finalTranscripts  + interimTranscripts ;

					};
				}
				else
				{
					document.getElementById('Textarea').innerHTML = 'Bạn cần cập nhật trình duyệt hoặc sử dụng cốc cốc và google chorme để sử dụng tính năng này !!!~~~';
				}
			}

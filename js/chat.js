jQuery(document).ready(function($){
	// 0 - No input yet
	// 1 - Chat window opened
	// 2 - First user input
	// 3 - First computer repsonse
	// 4 - Second user input
	// 5 - Second computer response
	// 6 - Final user input
	// 7 - Final computer response
	// 8 - Chat terminated

	var chat_state = 0;
	var first_response = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
	var second_response = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
	var third_response = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";	
	
	$('#orca_chat').click(function(){
		$('.chat-window').removeClass("display_none");
		$(this).addClass('display_none');
		chat_state = 1;
	});
	$('#chat_form').submit(function(){
		addYourText($('#chat_input').val());
		$('#chat_input').val("")
		return false;
	});
	
	
	function addYourText(string){
	switch(chat_state){
		case 1:
			chat_state = 2;
			break;
		case 3: 
			chat_state = 4;
			break;	
		case 5:
			chat_state = 6;
			break;			
		default:
			break;
	}
		$('#text_window').append('<p class="you">'+string+'</p>');
		$('#text_open')[0].play();
		scrollToBottom();
		checkForResponse();
	}
	
	function scrollToBottom(){
		$('#text_window')[0].scrollTop = $('#text_window')[0].scrollHeight;
	}
	
	function checkForResponse(){
		switch(chat_state){
			case 2:
				chat_state = 3;
				setTimeout(function(){
					$('#text_window').append('<p class="typing">Orca is typing...</p>');
					scrollToBottom();
					setTimeout(function(){
						$('.typing').remove();
						setTimeout(function(){
							$('#text_close')[0].play();
							$('#text_window').append('<p class="them">' + first_response + '</p>');
							scrollToBottom();
						}, 600);
					}, 1500);
				}, 400);
				break;
			case 4:
				chat_state = 5;
				setTimeout(function(){
					$('#text_window').append('<p class="typing">Orca is typing...</p>');
					scrollToBottom();
					setTimeout(function(){
						$('.typing').remove();
						setTimeout(function(){
							$('#text_close')[0].play();
							$('#text_window').append('<p class="them">' + second_response + '</p>');
							scrollToBottom();
						}, 600);
					}, 1500);
				}, 400);
				break;
			case 6:
				chat_state = 7;
				setTimeout(function(){
					$('#text_window').append('<p class="typing">Orca is typing...</p>');
					scrollToBottom();
					setTimeout(function(){
						$('.typing').remove();
						setTimeout(function(){
							$('#text_close')[0].play();
							$('#text_window').append('<p class="them">' + third_response + '</p>');
							scrollToBottom();
						}, 600)
					}, 1500);
				}, 400);
				break;
			default:
				break;
		}
	}	
});
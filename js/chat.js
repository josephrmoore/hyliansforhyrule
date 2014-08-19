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
	var first_response = "Hello. You are one of the elite. One of the few to have been chosen. You are here because you are a True Hylian at heart, ready to fight and die for the good of Hyrule. Is Do I have you figured out right?";
	var second_response = "Great. Then on to the real work. The reason you're here is because we need your help. One of the largest Terminal terror cells in Hyrule has been using this site, freetermina.com as a base to recruit and further their terrorist activites. We need someone to sneak in and find their member list. Find out who these people are and we can finally put a stop to their evil. Will you do this for the good of Hyrule?";
	var third_response = "It's settled. You are a true Hylian Hero. We've prepared a download for you to get you started. Good luck, and may the Three Goddesses light your path with wisdom, courage, and power.";	
	
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
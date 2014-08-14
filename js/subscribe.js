jQuery(document).ready(function($){
	
	var site = "";
	
	if(window.location.href.indexOf("hyrule") > -1){
		site = "hyrule";
	} else if(window.location.href.indexOf("termina") > -1){
		site = "termina";
	}
	
	$('#subscribe_to_newsletter').click(function(){
		$('#modal').removeClass('display_none');
		return false;
	});
	
	$('#modal').click(function(){
		$('#modal').addClass('display_none');
		return false;
	});
	
	$('#modal_content').click(function(e){
		e.stopPropagation();
		return false;
	});
	
	$('#sign_up_form').submit(function(){
		var email = $('#newsletter_email').val();
		$.post( 
             "mailinglist.php",
             { "email": email, "site": site, "narrative": "first"},
             function(data) {
                $('#modal_content').html(data);
             }

        );
        return false;
	});
	
	function successMessage(){
		
	}
	
	function failureMessage(){
		
	}
	

	
});
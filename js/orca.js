jQuery(document).ready(function($){
	$('.ad.orca .triangle-power').click(function(e){
		current_roll.push(1);
		checkLength();
	});
	$('.ad.orca .triangle-wisdom').click(function(e){
		e.stopPropagation();
		current_roll.push(2);
		checkLength();
	});
	$('.ad.orca .triangle-courage').click(function(e){
		e.stopPropagation();
		current_roll.push(3);
		checkLength();
	});
	
	var current_roll = [0,0,0,0];
	
	function checkLength(){
		if(current_roll.length>4){
			current_roll.shift();
			checkLength();
		} else {
			if(current_roll[0]==3 && current_roll[1]==1 && current_roll[2]==2 && current_roll[3]==1){
				openSecretDoor();
				current_roll = [0,0,0,0];
			}	
		}
		return false;
	}
	function openSecretDoor(){
		// play secret sound
		$('#sfx')[0].play();
		// add "door" you can enter
		import_html("#wrapper", "inside_orca.html");
//		alert("you found ORCA's secret base.");
	}
	function import_html(tag, file){
		var obj = $(tag);
		if(obj.length==0){
			var emptyTag = '<div class="empty-tag"></div>';
			$('body').append(emptyTag);
			var newobj = $('.empty-tag');
			if(newobj.length>0){
				obj = $(newobj[newobj.length-1]);	
			}
		}
		obj.load(file, function (response, status, xhr) {
			if (status == "error") {
				var msg = "Error: ";
				alert(msg + xhr.status + " " + xhr.statusText);
			}
		});
	}
	
});
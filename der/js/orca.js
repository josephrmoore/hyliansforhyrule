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
				alert("you found ORCA's secret base.");
			}	
		}
		return false;
	}
	function openSecretDoor();
});
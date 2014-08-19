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
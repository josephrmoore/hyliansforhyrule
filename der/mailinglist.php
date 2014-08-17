<?php 
	$site = $_POST['site']?$_POST['site']:"error";
	$email = $_POST['email']?$_POST['email']:"error";
	$narrative = $_POST['narrative']?$_POST['narrative']:"error";
	
	$host="mysql.josephrogermoore.com";
	$username="joemoore";
	$password="gabi1979";
	$database="hyruletermina";
		
	mysql_connect($host,$username,$password);
	@mysql_select_db($database) or die( "Unable to select database");
	$query = "INSERT INTO newsletter (email, site, narrative) VALUES ('$email', '$site', '$narrative')";
	$result = mysql_query($query);
	if($result){
    	echo("Success. Your name has been added to our mailing list.");
    } else{
   		echo("Argh! Something went wrong. Contact us at hero@hyruleforhylians.com");
   	}
	mysql_close();
?>
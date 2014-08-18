<?php

   	include_once('db/open.php');

	$query = "INSERT INTO newsletter (email, site, narrative) VALUES ('$email', '$site', '$narrative')";
	$result = mysql_query($query);
	if($result){
    	echo("Success. Your name has been added to our mailing list.");
    } else{
   		echo("Argh! Something went wrong. Contact us at hero@hyruleforhylians.com");
   	}

   	include_once('db/close.php');

?>
<?php $narrative_step = 0; ?>

<!DOCTYPE html>
<html>
	<head>
		<title>Hyrule is for the Hylians</title>
<?php include_once('global/head.php'); ?>
	</head>
	<body>
	  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
	       chromium.org/developers/how-tos/chrome-frame-getting-started -->
	  <!--[if lte IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
        
        <div id="wrapper" class="wrapper clearfix">
          
<?php include_once('global/header.php'); ?>

<?php 
	if($narrative_step==0){
		include_once('stage1/main.php');
	} else if ($narrative_step==1){
	    include_once('stage2/main_atatcked.php');
	} else if ($narrative_step==2){
	    include_once('stage3/main_final.php');		
	}
?>
    
<?php include_once('stage1/rail.php'); ?>

<?php include_once('global/footer.php'); ?>
          
          
        </div>
        
<?php include_once('global/scripts.php'); ?>
	</body>
	<!--Copyright (c) 2014 . All rights reserved.-->
</html>
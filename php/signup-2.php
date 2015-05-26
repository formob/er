<?php
	//------------------- Edit here --------------------//
	$sendy_url = 'http://mailer.abbyy-ls.com';
	$list = 'Azp08CAAgE5UoI2r892eNizA';
	//------------------ /Edit here --------------------//

	//--------------------------------------------------//
	//POST variables
	$name = $_POST['name'];
	$email = $_POST['email'];
	$date = $_POST['date'];
	$phone = $_POST['phone'];
	$webinardate = $_POST['webinardate'];
	$webinarname = $_POST['webinarname'];
	//subscribe
	$postdata = http_build_query(
	    array(
	    'name' => $name,
	    'email' => $email,
	    'list' => $list,
	    'boolean' => 'true'
	    )
	);
	$opts = array('http' => array('method'  => 'POST', 'header'  => 'Content-type: application/x-www-form-urlencoded', 'content' => $postdata));
	$context  = stream_context_create($opts);
	$result = file_get_contents($sendy_url.'/subscribe', false, $context);
	//--------------------------------------------------//
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= 'From: SmartCAT.Pro <info@smartcat.pro>' . "\r\n";
	$message = "E-mail: ".$email."\r\n";
	$subject = "SmartCAT. Подписка с лэндинга.";
	echo $result;
	if ($name || $email) {
		mail('i.sokolov@abbyy-ls.com', $subject, $message, $headers);
		//mail('support@smartcat.pro', $subject, $message, $headers);
	}
?>

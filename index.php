<?php

$page = 'start';
if(array_key_exists('path', $_GET) && file_exists($_GET['path'].'.html')) {
	$page = $_GET['path'];
}

include 'template.php';
<?php
//Globals
define('SERVER', 'localhost');
define('USER', 'root');
define('PASSWORD', '');

$con=mysql_connect(SERVER, USER, PASSWORD);
mysql_select_db("mycars");

?>
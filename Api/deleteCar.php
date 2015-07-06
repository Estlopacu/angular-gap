<?php
include 'Global.php';
if (isset($_GET["id"])) {
	//url Parameters
	$Id = $_GET["id"];

	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }
	else{
		$q =  mysql_query('Delete from vehiculo where id = '. $Id ,$con) ;
		echo "Delete Success";
	}
}else{
	echo "No data";
}
?>
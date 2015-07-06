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
		mysql_select_db("mycars");
		$q =  mysql_query('select * from vehiculo where id like "'. $Id .'"' ,$con) ;

		$res = mysql_fetch_array($q);

		echo json_encode($res);
	}
}else{
	echo "No data";
}
?>
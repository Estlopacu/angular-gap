<?php
include 'Global.php';
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
else{
	$q =  mysql_query("select * from vehiculo;",$con) ;

	$res = array();

	$cou = null;
	while($row = mysql_fetch_array($q)) {
	   array_push($res, $row);
	}

	echo json_encode($res);
}
?>
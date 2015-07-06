<?php
include 'Global.php';
if (isset($_GET["brand"]) || isset($_GET["price"]) || isset($_GET["model"]) ) {
	//url Parameters
	$Id = $_GET["id"];
	$price = $_GET["price"];
	$brand = $_GET["brand"];
	$model = $_GET["model"];
	$year = $_GET["year"];
	$color = $_GET["color"];
	$deal = $_GET["deal"];
	$imgUrl = $_GET["imgUrl"];

	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }
	else{
		$q =  mysql_query('
			Update vehiculo set price='.$price.',brand="'.$brand.'",model="'.$model.'",year='.$year.',color="'.$color.'",deal='.$deal.',imgUrl="'.$imgUrl.'" where id='.$Id,$con) ;
		echo "Car Updated";
	}
}else{
	echo "No data";
}
?>
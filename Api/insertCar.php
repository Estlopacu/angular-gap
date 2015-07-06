<?php
include 'Global.php';
if (isset($_GET["brand"]) || isset($_GET["price"]) || isset($_GET["model"]) ) {
	//url Parameters
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
			Insert into vehiculo (price,brand,model,year,color,deal,imgUrl)
			values('.$price.',"'.$brand.'","'.$model.'",'.$year.',"'.$color.'",'.$deal.',"'.$imgUrl.'");' ,$con) ;
		var_dump($q);
	}
}else{
	echo "No data";
}
?>
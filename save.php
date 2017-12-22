<?php 

include_once 'connection.php';

$name = $_POST['name'];

$sql = "INSERT INTO names VALUES (NULL,'$name')";
$query = mysqli_query($db,$sql);

if ($query) {
	echo "200";
}else{
	echo "502";
}
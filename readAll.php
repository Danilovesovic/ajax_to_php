<?php 

require_once 'connection.php';

$sql = "SELECT * FROM names";

$query = mysqli_query($db,$sql);

$arr = [];

while ($row = mysqli_fetch_assoc($query)) {
	$name = $row['name'];
	$id = $row['id'];
	$arr[] = [
		'name' => $name,
		'id' => $id
	];
}
echo json_encode($arr);

<?php


require_once '../config/connect.php';


$userAdmin = $_POST["userAdmin"];
$priceAdmin = $_POST["priceAdmin"];

var_dump($userAdmin);
var_dump($priceAdmin);


$query = "UPDATE `price` SET userAdmin='$userAdmin',userPrice='$priceAdmin' WHERE id='362'";


$result = mysqli_query($connect, $query) or die("Ошибка " . mysqli_error($connect));
mysqli_close($connect);


if (isset($_POST["userAdmin"]) && isset($_POST["priceAdmin"])) {


    $result = array(
        'userAdmin' => $_POST["userAdmin"],
        'priceAdmin' => $_POST["priceAdmin"],
    );


    echo json_encode($result);
}


?>

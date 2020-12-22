<?php

require_once 'config/connect.php';

if ($connect === false) {
    die("ОШИБКА: Невозможно подключиться. " . mysqli_connect_error());
}

$result_price = mysqli_query($connect, "SELECT *  FROM  price");


$result_priceAmin = mysqli_fetch_array($result_price);




?>
<?php

require_once '../config/connect.php';

if ($connect === false) {
    die("ОШИБКА: Невозможно подключиться. " . mysqli_connect_error());
}

$result_waiting = mysqli_query($connect, "SELECT * FROM waiting ORDER BY id DESC LIMIT 1;");

$row_waiting = array();
while ($row_waiting_user = mysqli_fetch_assoc($result_waiting)) {
    $row_waiting[] = $row_waiting_user;
}

echo json_encode($row_waiting);


?>
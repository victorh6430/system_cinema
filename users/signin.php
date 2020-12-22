<?php

session_start();
require_once '../config/connect.php';

$login = $_POST['login'];
$password = md5($_POST['password']);


if (preg_match('/^([a-z]|\d|_)+$/i', $login)) {

    $check_user = mysqli_query($connect, "SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");


    if (mysqli_num_rows($check_user) > 0) {

        $user = mysqli_fetch_assoc($check_user);
//var_dump($_SESSION['user']['user']);
        $_SESSION['user'] = [
            "id" => $user['id'],
            "user" => $user['login']
        ];
        header('Location: ../index.php');
    } else {
        $_SESSION['message'] = "Не вірний логин або пароль";
        header('Location: ../view/login.php');
    }

}else{
    $_SESSION['message'] = "Не вірний логин або пароль,будь уважнішим!!!";
    header('Location: ../view/login.php');
}
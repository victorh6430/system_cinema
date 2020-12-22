<?php

session_start();
require_once '../config/connect.php';


$login = $_POST['login'];
$password = $_POST['password'];


if (preg_match('/^([a-z]|\d|_)+$/i', $login)) {
    $query = mysqli_query($connect, "SELECT COUNT(id) as cnt FROM users WHERE login='".mysqli_real_escape_string($connect   , $_POST['login'])."'");
    $usr = mysqli_fetch_array($query, MYSQLI_ASSOC);
    if($usr['cnt'] > 0)
    {
        $_SESSION['message'] = "Вже є такий логін!!!! Шановний ,будь креативним!";
    header('Location: ../view/register.php');
    }else{

        $password = md5($password);
        mysqli_query($connect, "INSERT INTO `users` (`id`,`login`,`password`)VALUE (NULL,'$login','$password')");
        $_SESSION['message'] = "Ви успішно зареєструвалися";
    header('Location: ../view/login.php');

    }

} else {
    echo ('222');
    $_SESSION['message'] = "Пароль не повинен мати пробіли та має складатися з букв латинського алфавіту та цифр";
    header('Location: ../view/register.php');
}











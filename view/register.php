<?php

session_start();
//if ($_SESSION['user']['user']){
//    header('Location: index.php');
//}
?>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Реєстрація</title>
    <link rel="stylesheet" href="../css/styleModal.css">
</head>

<body>


<form action="../users/signup.php" method="post" id="login">
    <h1>Реєстрація</h1>
    <fieldset id="inputs">
        <input id="username" name="login" type="text" placeholder="Логін" autofocus required>
        <input id="password" name="password" type="password" placeholder="Пароль" required>
    </fieldset>
    <fieldset id="actions">
        <input type="submit" id="submit" value="Зареєструватись">
        <a class="link_reg_login" href="../view/login.php">Введіть логін</a>
    </fieldset>
    <?php
    if (isset($_SESSION['message'])) {
        echo '<p class="message">' . $_SESSION['message'] . '</p>';
    }
    unset($_SESSION['message']);

    ?>
</form>
</body>
</html>

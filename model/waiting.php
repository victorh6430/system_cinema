<?php


require_once '../config/connect.php';


$waiting1=$_POST['waiting1'];

$user_waiting=$_POST['user_waiting'];

var_dump($waiting2=$_POST['waiting2']);
$waiting3=$_POST['waiting3'];
$waiting4=$_POST['waiting4'];
$waiting5=$_POST['waiting5'];
$waiting6=$_POST['waiting6'];
$waiting7=$_POST['waiting7'];
$waiting8=$_POST['waiting8'];
$waiting9=$_POST['waiting9'];
$waiting10=$_POST['waiting10'];
$waiting11=$_POST['waiting11'];
$waiting12=$_POST['waiting12'];
$waiting13=$_POST['waiting13'];
$waiting14=$_POST['waiting14'];
$waiting15=$_POST['waiting15'];
$waiting16=$_POST['waiting16'];
$waiting17=$_POST['waiting17'];
$waiting18=$_POST['waiting18'];
$waiting19=$_POST['waiting19'];
$waiting20=$_POST['waiting20'];
$waiting21=$_POST['waiting21'];
$waiting22=$_POST['waiting22'];
$waiting23=$_POST['waiting23'];
$waiting24=$_POST['waiting24'];
$waiting25=$_POST['waiting25'];
$waiting26=$_POST['waiting26'];
$waiting27=$_POST['waiting27'];
$waiting28=$_POST['waiting28'];
$waiting29=$_POST['waiting29'];
$waiting30=$_POST['waiting30'];
$waiting31=$_POST['waiting31'];
$waiting32=$_POST['waiting32'];
$waiting33=$_POST['waiting33'];
$waiting34=$_POST['waiting34'];
$waiting35=$_POST['waiting35'];
$waiting36=$_POST['waiting36'];
$waiting37=$_POST['waiting37'];
$waiting38=$_POST['waiting38'];
$waiting39=$_POST['waiting39'];
$waiting40=$_POST['waiting40'];
$waiting41=$_POST['waiting41'];
$waiting42=$_POST['waiting42'];
$waiting43=$_POST['waiting43'];
$waiting44=$_POST['waiting44'];
$waiting45=$_POST['waiting45'];
$waiting46=$_POST['waiting46'];
$waiting47=$_POST['waiting47'];
$waiting48=$_POST['waiting48'];
$waiting49=$_POST['waiting49'];
$waiting50=$_POST['waiting50'];
$waiting51=$_POST['waiting51'];
$waiting52=$_POST['waiting52'];
$waiting53=$_POST['waiting53'];
$waiting54=$_POST['waiting54'];
$waiting55=$_POST['waiting55'];
$waiting56=$_POST['waiting56'];
$waiting57=$_POST['waiting57'];
$waiting58=$_POST['waiting58'];
$waiting59=$_POST['waiting59'];

$query = "INSERT INTO `waiting` VALUES(NULL,'$waiting1','$user_waiting','$waiting2','$waiting3','$waiting4','$waiting5','$waiting6','$waiting7','$waiting8','$waiting9','$waiting10'
                                            ,'$waiting11','$waiting12','$waiting13','$waiting14','$waiting15','$waiting16','$waiting17','$waiting18','$waiting19','$waiting20'
                                            ,'$waiting21','$waiting22','$waiting23','$waiting24','$waiting25','$waiting26','$waiting27','$waiting28','$waiting29','$waiting30'
                                            ,'$waiting31','$waiting32','$waiting33','$waiting34','$waiting35','$waiting36','$waiting37','$waiting38','$waiting39','$waiting40'
                                            ,'$waiting41','$waiting42','$waiting43','$waiting44','$waiting45','$waiting46','$waiting47','$waiting48','$waiting49','$waiting50'
                                            ,'$waiting51','$waiting52','$waiting53','$waiting54','$waiting55','$waiting56','$waiting57','$waiting58','$waiting59')";


$result = mysqli_query($connect, $query) or die("Ошибка " . mysqli_error($connect));
mysqli_close($connect);



$result = array(
    'waiting1'=>$_POST['waiting1'],
    'user_waiting' => $_POST['user_waiting'],

    'waiting2'=>$_POST['waiting2'],
    'waiting3'=>$_POST['waiting3'],
    'waiting4'=>$_POST['waiting4'],
    'waiting5'=>$_POST['waiting5'],
    'waiting6'=>$_POST['waiting6'],
    'waiting7'=>$_POST['waiting7'],
    'waiting8'=>$_POST['waiting8'],
    'waiting9'=>$_POST['waiting9'],
    'waiting10'=>$_POST['waiting10'],
    'waiting11'=>$_POST['waiting11'],
    'waiting12'=>$_POST['waiting12'],
    'waiting13'=>$_POST['waiting13'],
    'waiting14'=>$_POST['waiting14'],
    'waiting15'=>$_POST['waiting15'],
    'waiting16'=>$_POST['waiting16'],
    'waiting17'=>$_POST['waiting17'],
    'waiting18'=>$_POST['waiting18'],
    'waiting19'=>$_POST['waiting19'],
    'waiting20'=>$_POST['waiting20'],
    'waiting21'=>$_POST['waiting21'],
    'waiting22'=>$_POST['waiting22'],
    'waiting23'=>$_POST['waiting23'],
    'waiting24'=>$_POST['waiting24'],
    'waiting25'=>$_POST['waiting25'],
    'waiting26'=>$_POST['waiting26'],
    'waiting27'=>$_POST['waiting27'],
    'waiting28'=>$_POST['waiting28'],
    'waiting29'=>$_POST['waiting29'],
    'waiting30'=>$_POST['waiting30'],
    'waiting31'=>$_POST['waiting31'],
    'waiting32'=>$_POST['waiting32'],
    'waiting33'=>$_POST['waiting33'],
    'waiting34'=>$_POST['waiting34'],
    'waiting35'=>$_POST['waiting35'],
    'waiting36'=>$_POST['waiting36'],
    'waiting37'=>$_POST['waiting37'],
    'waiting38'=>$_POST['waiting38'],
    'waiting39'=>$_POST['waiting39'],
    'waiting40'=>$_POST['waiting40'],
    'waiting41'=>$_POST['waiting41'],
    'waiting42'=>$_POST['waiting42'],
    'waiting43'=>$_POST['waiting43'],
    'waiting44'=>$_POST['waiting44'],
    'waiting45'=>$_POST['waiting45'],
    'waiting46'=>$_POST['waiting46'],
    'waiting47'=>$_POST['waiting47'],
    'waiting48'=>$_POST['waiting48'],
    'waiting49'=>$_POST['waiting49'],
    'waiting50'=>$_POST['waiting50'],
    'waiting51'=>$_POST['waiting51'],
    'waiting52'=>$_POST['waiting52'],
    'waiting53'=>$_POST['waiting53'],
    'waiting54'=>$_POST['waiting54'],
    'waiting55'=>$_POST['waiting55'],
    'waiting56'=>$_POST['waiting56'],
    'waiting57'=>$_POST['waiting57'],
    'waiting58'=>$_POST['waiting58'],
    'waiting59'=>$_POST['waiting59'],
);

echo json_encode($result);

?>
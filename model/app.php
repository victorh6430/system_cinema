<?php


require_once '../config/connect.php';


//$user_login=1;
//$cinema1=5;





$priceAdmin=$_POST['priceAdmin'];

$data_price_sale1=$_POST['data_price_sale1'];
$data_price_sale2=$_POST['data_price_sale2'];
$data_price_sale3=$_POST['data_price_sale3'];
$data_price_sale4=$_POST['data_price_sale4'];
$data_price_sale5=$_POST['data_price_sale5'];
$data_price_sale6=$_POST['data_price_sale6'];
$data_price_sale7=$_POST['data_price_sale7'];


$data_price_sale8=$_POST['data_price_sale8'];

$data_price_sale9=$_POST['data_price_sale9'];
$data_price_sale10=$_POST['data_price_sale10'];
$data_price_sale11=$_POST['data_price_sale11'];
$data_price_sale12=$_POST['data_price_sale12'];
$data_price_sale13=$_POST['data_price_sale13'];
$data_price_sale14=$_POST['data_price_sale14'];

$data_price_sale15=$_POST['data_price_sale15'];
$data_price_sale16=$_POST['data_price_sale16'];
$data_price_sale17=$_POST['data_price_sale17'];
$data_price_sale18=$_POST['data_price_sale18'];
$data_price_sale19=$_POST['data_price_sale19'];
$data_price_sale20=$_POST['data_price_sale20'];
$data_price_sale21=$_POST['data_price_sale21'];
$data_price_sale22=$_POST['data_price_sale22'];


$data_price_sale23=$_POST['data_price_sale23'];
$data_price_sale24=$_POST['data_price_sale24'];
$data_price_sale25=$_POST['data_price_sale25'];
$data_price_sale26=$_POST['data_price_sale26'];
$data_price_sale27=$_POST['data_price_sale27'];
$data_price_sale28=$_POST['data_price_sale28'];
$data_price_sale29=$_POST['data_price_sale29'];
$data_price_sale30=$_POST['data_price_sale30'];

$data_price_sale31=$_POST['data_price_sale31'];
$data_price_sale32=$_POST['data_price_sale32'];
$data_price_sale33=$_POST['data_price_sale33'];
$data_price_sale34=$_POST['data_price_sale34'];
$data_price_sale35=$_POST['data_price_sale35'];
$data_price_sale36=$_POST['data_price_sale36'];
$data_price_sale37=$_POST['data_price_sale37'];
$data_price_sale38=$_POST['data_price_sale38'];
$data_price_sale39=$_POST['data_price_sale39'];

$data_price_sale40=$_POST['data_price_sale40'];
$data_price_sale41=$_POST['data_price_sale41'];
$data_price_sale42=$_POST['data_price_sale42'];
$data_price_sale43=$_POST['data_price_sale43'];
$data_price_sale44=$_POST['data_price_sale44'];
$data_price_sale45=$_POST['data_price_sale45'];
$data_price_sale46=$_POST['data_price_sale46'];
$data_price_sale47=$_POST['data_price_sale47'];
$data_price_sale48=$_POST['data_price_sale48'];
$data_price_sale49=$_POST['data_price_sale49'];

$data_price_sale50=$_POST['data_price_sale50'];
$data_price_sale51=$_POST['data_price_sale51'];
$data_price_sale52=$_POST['data_price_sale52'];
$data_price_sale53=$_POST['data_price_sale53'];
$data_price_sale54=$_POST['data_price_sale54'];
$data_price_sale55=$_POST['data_price_sale55'];
$data_price_sale56=$_POST['data_price_sale56'];
$data_price_sale57=$_POST['data_price_sale57'];
$data_price_sale58=$_POST['data_price_sale58'];
$data_price_sale59=$_POST['data_price_sale59'];

$userAdmin = $_POST["userAdmin"];
$row1 = $_POST["row1"];
$row2 = $_POST["row2"];
$row3 = $_POST["row3"];
$row4 = $_POST["row4"];
$row5 = $_POST["row5"];
$row6 = $_POST["row6"];
$row7 = $_POST["row7"];
$row8 = $_POST["row8"];
$row9 = $_POST["row9"];
$row10 = $_POST["row10"];
$row11 = $_POST["row11"];
$row12 = $_POST["row12"];
$row13 = $_POST["row13"];
$row14 = $_POST["row14"];
$row15 = $_POST["row15"];
$row16 = $_POST["row16"];
$row17 = $_POST["row17"];
$row18 = $_POST["row18"];
$row19 = $_POST["row19"];
$row20 = $_POST["row20"];
$row21 = $_POST["row21"];
$row22 = $_POST["row22"];

$row23 = $_POST["row23"];
$row24 = $_POST["row24"];
$row25 = $_POST["row25"];
$row26 = $_POST["row26"];
$row27 = $_POST["row27"];
$row28 = $_POST["row28"];
$row29 = $_POST["row29"];
$row30 = $_POST["row30"];
$row31 = $_POST["row31"];
$row32 = $_POST["row32"];
$row33 = $_POST["row33"];
$row34 = $_POST["row34"];
$row35 = $_POST["row35"];
$row36 = $_POST["row36"];
$row37 = $_POST["row37"];
$row38 = $_POST["row38"];
$row39 = $_POST["row39"];
$row40 = $_POST["row40"];
$row41 = $_POST["row41"];
$row42 = $_POST["row42"];
$row43 = $_POST["row43"];
$row44 = $_POST["row44"];
$row45 = $_POST["row45"];
$row46 = $_POST["row46"];
$row47 = $_POST["row47"];
$row48 = $_POST["row48"];
$row49 = $_POST["row49"];
$row50 = $_POST["row50"];
$row51 = $_POST["row51"];
$row52 = $_POST["row52"];
$row53 = $_POST["row53"];
$row54 = $_POST["row54"];
$row55 = $_POST["row55"];
$row56 = $_POST["row56"];
$row57 = $_POST["row57"];
$row58 = $_POST["row58"];
$row59 = $_POST["row59"];


$query = "INSERT INTO `ticket` VALUES(NULL,'$priceAdmin','$data_price_sale1','$data_price_sale2','$data_price_sale3','$data_price_sale4','$data_price_sale5','$data_price_sale6','$data_price_sale7','$data_price_sale8','$data_price_sale9','$data_price_sale10'
                                          ,'$data_price_sale11','$data_price_sale12','$data_price_sale13','$data_price_sale14','$data_price_sale15','$data_price_sale16','$data_price_sale17','$data_price_sale18','$data_price_sale19','$data_price_sale20'
                                          ,'$data_price_sale21','$data_price_sale22','$data_price_sale23','$data_price_sale24','$data_price_sale25','$data_price_sale26','$data_price_sale27','$data_price_sale28','$data_price_sale29','$data_price_sale30'
                                          ,'$data_price_sale31','$data_price_sale32','$data_price_sale33','$data_price_sale34','$data_price_sale35','$data_price_sale36','$data_price_sale37','$data_price_sale38','$data_price_sale39','$data_price_sale40'
                                          ,'$data_price_sale41','$data_price_sale42','$data_price_sale43','$data_price_sale44','$data_price_sale45','$data_price_sale46','$data_price_sale47','$data_price_sale48','$data_price_sale49','$data_price_sale50'
                                          ,'$data_price_sale51','$data_price_sale52','$data_price_sale53','$data_price_sale54','$data_price_sale55','$data_price_sale56','$data_price_sale57','$data_price_sale58','$data_price_sale59','$userAdmin','$row1','$row2','$row3','$row4','$row5','$row6','$row7','$row8','$row9','$row10'
                                  ,'$row11','$row12','$row13','$row14','$row15','$row16','$row17','$row18','$row19','$row20'
                                  ,'$row21','$row22','$row23','$row24','$row25','$row26','$row27','$row28','$row29','$row30'
                                  ,'$row31','$row32','$row33','$row34','$row35','$row36','$row37','$row38','$row39','$row40'
                                  ,'$row41','$row42','$row43','$row44','$row45','$row46','$row47','$row48','$row49','$row50'
                                  ,'$row51','$row52','$row53','$row54','$row55','$row56','$row57','$row58','$row59')";

$result = mysqli_query($connect, $query) or die("Ошибка " . mysqli_error($connect));
mysqli_close($connect);


if (isset($_POST["userAdmin"]) && isset($_POST["row1"]) && isset($_POST["row2"]) && isset($_POST["row3"]) && isset($_POST["row4"]) && isset($_POST["row5"])
    && isset($_POST["row6"]) && isset($_POST["row7"]) && isset($_POST["row8"]) && isset($_POST["row9"]) && isset($_POST["row10"])
    && isset($_POST["row11"]) && isset($_POST["row12"]) && isset($_POST["row13"]) && isset($_POST["row14"]) && isset($_POST["row15"])
    && isset($_POST["row16"]) && isset($_POST["row17"]) && isset($_POST["row18"]) && isset($_POST["row19"]) && isset($_POST["row20"])
    && isset($_POST["row21"]) && isset($_POST["row22"]) && isset($_POST["row23"]) && isset($_POST["row24"]) && isset($_POST["row25"]) && isset($_POST["row26"]) && isset($_POST["row27"])
    && isset($_POST["row28"]) && isset($_POST["row29"]) && isset($_POST["row30"]) && isset($_POST["row31"]) && isset($_POST["row32"]) && isset($_POST["row33"]) && isset($_POST["row34"])
    && isset($_POST["row35"]) && isset($_POST["row36"]) && isset($_POST["row37"]) && isset($_POST["row38"]) && isset($_POST["row39"]) && isset($_POST["row40"])
    && isset($_POST["row41"]) && isset($_POST["row42"]) && isset($_POST["row43"]) && isset($_POST["row44"]) && isset($_POST["row45"]) && isset($_POST["row46"])
    && isset($_POST["row47"]) && isset($_POST["row48"]) && isset($_POST["row49"]) && isset($_POST["row50"]) && isset($_POST["row51"]) && isset($_POST["row51"]) && isset($_POST["row53"]) && isset($_POST["row54"]) && isset($_POST["row55"]) && isset($_POST["row56"]) && isset($_POST["row57"]) && isset($_POST["row58"]) && isset($_POST["row59"])
) {

    // Формируем массив для JSON ответа
    $result = array(
        
        
        'priceAdmin'=>$_POST['priceAdmin'],
        'data_price_sale1'=>$_POST['data_price_sale1'],
        'data_price_sale2'=>$_POST['data_price_sale2'],
        'data_price_sale3'=>$_POST['data_price_sale3'],
        'data_price_sale4'=>$_POST['data_price_sale4'],
        'data_price_sale5'=>$_POST['data_price_sale5'],
        'data_price_sale6'=>$_POST['data_price_sale6'],
        'data_price_sale7'=>$_POST['data_price_sale7'],

        'data_price_sale8'=>$_POST['data_price_sale8'],
        'data_price_sale9'=>$_POST['data_price_sale9'],
        'data_price_sale10'=>$_POST['data_price_sale10'],
        'data_price_sale11'=>$_POST['data_price_sale11'],
        'data_price_sale12'=>$_POST['data_price_sale12'],
        'data_price_sale13'=>$_POST['data_price_sale13'],
        'data_price_sale14'=>$_POST['data_price_sale14'],

        'data_price_sale15'=>$_POST['data_price_sale15'],
        'data_price_sale16'=>$_POST['data_price_sale16'],
        'data_price_sale17'=>$_POST['data_price_sale17'],
        'data_price_sale18'=>$_POST['data_price_sale18'],
        'data_price_sale19'=>$_POST['data_price_sale19'],
        'data_price_sale20'=>$_POST['data_price_sale20'],
        'data_price_sale21'=>$_POST['data_price_sale21'],
        'data_price_sale22'=>$_POST['data_price_sale22'],

        'data_price_sale23'=>$_POST['data_price_sale23'],
        'data_price_sale24'=>$_POST['data_price_sale24'],
        'data_price_sale25'=>$_POST['data_price_sale25'],
        'data_price_sale26'=>$_POST['data_price_sale26'],
        'data_price_sale27'=>$_POST['data_price_sale27'],
        'data_price_sale28'=>$_POST['data_price_sale28'],
        'data_price_sale29'=>$_POST['data_price_sale29'],
        'data_price_sale30'=>$_POST['data_price_sale30'],

        'data_price_sale31'=>$_POST['data_price_sale31'],
        'data_price_sale32'=>$_POST['data_price_sale32'],
        'data_price_sale33'=>$_POST['data_price_sale33'],
        'data_price_sale34'=>$_POST['data_price_sale34'],
        'data_price_sale35'=>$_POST['data_price_sale35'],
        'data_price_sale36'=>$_POST['data_price_sale36'],
        'data_price_sale37'=>$_POST['data_price_sale37'],
        'data_price_sale38'=>$_POST['data_price_sale38'],
        'data_price_sale39'=>$_POST['data_price_sale39'],

        'data_price_sale40'=>$_POST['data_price_sale40'],
        'data_price_sale41'=>$_POST['data_price_sale41'],
        'data_price_sale42'=>$_POST['data_price_sale42'],
        'data_price_sale43'=>$_POST['data_price_sale43'],
        'data_price_sale44'=>$_POST['data_price_sale44'],
        'data_price_sale45'=>$_POST['data_price_sale45'],
        'data_price_sale46'=>$_POST['data_price_sale46'],
        'data_price_sale47'=>$_POST['data_price_sale47'],
        'data_price_sale48'=>$_POST['data_price_sale48'],
        'data_price_sale49'=>$_POST['data_price_sale49'],

        'data_price_sale50'=>$_POST['data_price_sale50'],
        'data_price_sale51'=>$_POST['data_price_sale51'],
        'data_price_sale52'=>$_POST['data_price_sale52'],
        'data_price_sale53'=>$_POST['data_price_sale53'],
        'data_price_sale54'=>$_POST['data_price_sale54'],
        'data_price_sale55'=>$_POST['data_price_sale55'],
        'data_price_sale56'=>$_POST['data_price_sale56'],
        'data_price_sale57'=>$_POST['data_price_sale57'],
        'data_price_sale58'=>$_POST['data_price_sale58'],
        'data_price_sale59'=>$_POST['data_price_sale59'],


        'userAdmin' => $_POST["userAdmin"],
        'row1' => $_POST["row1"],
        'row2' => $_POST["row2"],
        'row3' => $_POST["row3"],
        'row4' => $_POST["row4"],
        'row5' => $_POST["row5"],
        'row6' => $_POST["row6"],
        'row7' => $_POST["row7"],
        'row8' => $_POST["row8"],
        'row9' => $_POST["row9"],
        'row10' => $_POST["row10"],
        'row11' => $_POST["row11"],
        'row12' => $_POST["row12"],
        'row13' => $_POST["row13"],
        'row14' => $_POST["row14"],
        'row15' => $_POST["row15"],
        'row16' => $_POST["row16"],
        'row17' => $_POST["row17"],
        'row18' => $_POST["row18"],
        'row19' => $_POST["row19"],
        'row20' => $_POST["row20"],
        'row21' => $_POST["row21"],
        'row22' => $_POST["row22"],
        'row23' => $_POST["row23"],
        'row24' => $_POST["row24"],
        'row25' => $_POST["row25"],
        'row26' => $_POST["row26"],
        'row27' => $_POST["row27"],
        'row28' => $_POST["row28"],
        'row29' => $_POST["row29"],
        'row30' => $_POST["row30"],
        'row31' => $_POST["row31"],
        'row32' => $_POST["row32"],
        'row33' => $_POST["row33"],
        'row34' => $_POST["row34"],
        'row35' => $_POST["row35"],
        'row36' => $_POST["row36"],
        'row37' => $_POST["row37"],
        'row38' => $_POST["row38"],
        'row39' => $_POST["row39"],
        'row40' => $_POST["row40"],
        'row41' => $_POST["row41"],
        'row42' => $_POST["row42"],
        'row43' => $_POST["row43"],
        'row44' => $_POST["row44"],
        'row45' => $_POST["row45"],
        'row46' => $_POST["row46"],
        'row47' => $_POST["row47"],
        'row48' => $_POST["row48"],
        'row49' => $_POST["row49"],
        'row50' => $_POST["row50"],
        'row51' => $_POST["row51"],
        'row52' => $_POST["row52"],
        'row53' => $_POST["row53"],
        'row54' => $_POST["row54"],
        'row55' => $_POST["row55"],
        'row56' => $_POST["row56"],
        'row57' => $_POST["row57"],
        'row58' => $_POST["row58"],
        'row59' => $_POST["row59"]
    );


    echo json_encode($result);


}


?>

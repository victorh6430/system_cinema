<?php

session_start();

require_once'model/placeRowView.php';


require_once 'config/connect.php';

if ($connect === false) {
    die("ОШИБКА: Невозможно подключиться. " . mysqli_connect_error());
}

$result = mysqli_query($connect, "SELECT * FROM ticket ORDER BY id DESC LIMIT 1;");

$row_cinema = array();
while ($row_cinema_user = mysqli_fetch_assoc($result)) {
    $row_cinema[] = $row_cinema_user;
}

//echo json_encode($row_cinema[0]['userAdmin']);

//=========================================================
if ($connect === false) {
    die("ОШИБКА: Невозможно подключиться. " . mysqli_connect_error());
}

$result_waiting = mysqli_query($connect, "SELECT * FROM waiting ORDER BY id DESC LIMIT 1;");

$row_waiting = array();
while ($row_waiting_user = mysqli_fetch_assoc($result_waiting)) {
    $row_waiting[] = $row_waiting_user;
}

//echo json_encode($row_waiting[0]['waiting1']);

//======================================================




?>


<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Бронювання місць в кінотеатрі</title>
    <link rel="stylesheet" href="css/modal.css">
    <link rel="stylesheet" href="css/style.css">

</head>
<body>


<?php echo $loginNotTrue ?>

<div class="info">

    <ul class="menu">
        <li class="poster"><a href="">Афіша</a></li>
        <li class="help"><a href="">Допомога</a></li>
    </ul>


    <form method="post" action="model/waiting.php">

    <ul class="user_menu">

        <?php if ($_SESSION['user']['user'] == NULL) { ?>
            <li class="log_in"><a href="view/login.php">Авторизація</a></li>

        <?php } else { ?>

            <li>Користувач системою:<span class="menu_user_name"><?php echo $_SESSION['user']['user']; ?></span></li>
            <li class="exit_menu"><a href="users/logout.php" onclick="logRegFun();">Вихід</a></li>'
            <input type="hidden" name="user_waiting" class="main_administrator" value="<?php echo $_SESSION['user']['user']; ?>">
            <input type="hidden" class="mainUser"  value="<?php echo $row_cinema[0]['userAdmin']; ?>">
        <?php } ?>


    </ul>


    <div class="clear"></div>

</div>
<?php if (!$_SESSION['user']['user']) { ?>
<div onclick="document.getElementById('id01').style.display='block'">
    <?php }else{ ?>
    <div>
        <?php } ?>


        <div class="cinema">

            <div class="data_cinema"><h1>Початок фільму о 23:00</h1></div>

            <div class="placeClosed">
                <div class="placeClosedCube"><p>Заброньовані місця
                    <p></div>
                <div class="placeOpenCube"><p>Вільні місця</p></div>
            </div>
            <h1 class="screen_name">ЕКРАН</h1>
            <div class="screen"></div>


<!--            <form method="post" action="model/app.php">-->

                <input type="hidden" class="userAdmin" name="userAdmin" value="<?php echo $_SESSION['user']['user']; ?>"
                       id="user_login">
                <?php // echo $_SESSION['user']['user']; ?>
                <div class="row_1 ">
                    <?php for ($i = 1; $i <= 7; $i++) { ?>
                        <?php
                        $name_row = "row" . $i;
                        echo "<div    class='place_row_1 chair calPriceClass$i' >" .$i;
                        echo "<input type='hidden' class=' input_enter clear_input$i'       name='row$i' value='  $row[$name_row] ' id='row$i'>";
                        echo "<input type='hidden' name='data_discount' value='0' class='dataDiscount'>";
                        echo "<input type='hidden' name='data_discount' value='0' class='dataDiscount'>";
                        echo "</div>";
                    }
                    ?>
                </div>




                <div class="clear"></div>

                <div class="row_2">

                    <?php for ($i = 8; $i <= 14; $i++) { ?>

                        <?php
                        $name_row = "row" . $i;
                        echo "<div class='place_row_2 chair calPriceClass$i'   >" . $i;
                        echo "<input type='hidden' class='input_enter clear_input$i'   name='row$i' value='  $row[$name_row] ' id='row$i'>";
                        echo "</div>";
                    }
                    ?>

                </div>

                <div class="clear"></div>

                <div class="row_3">


                    <?php for ($i = 15; $i <= 22; $i++) { ?>

                        <?php
                        $name_row = "row" . $i;
                        echo "<div class='place_row_3 chair calPriceClass$i'  >" . $i;
                        echo "<input type='hidden' class='input_enter clear_input$i'   name='row$i' value='  $row[$name_row] ' id='row$i'>";
                        echo "</div>";
                    }
                    ?>

                </div>

                <div class="clear"></div>

                <div class="row_4">

                    <?php for ($i = 23; $i <= 30; $i++) { ?>

                        <?php
                        $name_row = "row" . $i;
                        echo "<div class='place_row_4 chair calPriceClass$i'  >" . $i;
                        echo "<input type='hidden' class='input_enter clear_input$i'  name='row$i' value='  $row[$name_row] ' id='row$i'>";
                        echo "</div>";
                    }
                    ?>


                </div>

                <div class="clear"></div>

                <div class="row_5">

                    <?php for ($i = 31; $i <= 39; $i++) { ?>

                        <?php
                        $name_row = "row" . $i;
                        echo "<div class='place_row_5 chair calPriceClass$i' >" . $i;
                        echo "<input type='hidden' class='input_enter clear_input$i'  name='row$i' value='  $row[$name_row] ' id='row$i'>";
                        echo "</div>";
                    } ?>

                </div>

                <div class="clear"></div>

                <div class="row_6">
                    <?php for ($i = 40; $i <= 49; $i++) { ?>
                        <?php
                        $name_row = "row" . $i;
                        echo "<div class='place_row_6 chair calPriceClass$i' >" . $i;
                        echo "<input type='hidden' class='input_enter clear_input$i'   name='row$i' value='  $row[$name_row] ' id='row$i'>";
                        echo "</div>";
                    } ?>


                </div>

                <div class="clear"></div>

                <div class="row row_7 ">

                    <?php for ($i = 50; $i <= 59; $i++) { ?>

                        <?php
                        $name_row = "row" . $i;
                        echo "<div class='place_row_7  chair calPriceClass$i'  >" . $i;
                        echo "<input type='hidden' class='input_enter clear_input$i'   onclick='sale()'   name='row$i' value='  $row[$name_row] ' id='row$i'>";
                        echo "</div>";
                    } ?>

                </div>




        </div>


        <div class="sidebar">

            <div class="images_poster">
                <img src="images/1.jpg">
                <img src="images/2.jpg">
                <img src="images/3.jpg">
                <img src="images/4.jpg">
                <img src="images/5.jfif">
                <img src="images/6.jpeg">
                <img src="images/7.jpg">
                <img src="images/8.jfif">
            </div>


            <div class="forma_cinema_user"><img src="images/8.jfif">
                <h1>
                    <div class="count forma_cinema_user_btn count ">Ви забронювали</div>
                </h1>
                <h1>Гроші в касі <br></h1>




<?php for($i=1; $i<=59; $i++){ ?>
    <input type='hidden' class='data_price_sale<?php echo $i ?>' value='<?php echo $row_cinema[0]['data_price_sale'.$i] ?>' name='data_price_sale<?php echo $i ?>'>
<?php } ?>

                <?php for($i=1; $i<=59; $i++){ ?>
                    <input type='hidden' class='waiting<?php echo $i ?>' value='<?php echo $row_waiting[0]['waiting'.$i] ?>' name='waiting<?php echo $i ?>'>
                <?php } ?>




                    <input type="text" name="priceAdmin" readonly class="priceAll price priceAdmin"
                           value="0">


                                </form>

                <div class="sale_text">Введіть промокод і виберіть місце</div>

                <input type="text" class="sale" id="sale" value="" placeholder="Ввести промокод">


                <ul class="palace_check">

                    <li><input class="place_two" type=checkbox name="two" value=2>2 місця поруч</li>
                    <li><input type=checkbox name="three" value=3>3 місця поруч</li>
                    <li><input type=checkbox name="four" value=4>4 місця поруч</li>

                </ul>

            </div>
        </div>
        <div class="clear"></div>


    </div>
    <div id="id01" class="modal">

        <div class="modal-content animate">
            <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" class="close"
                      title="Close Modal">×</span>
            </div>
            <div class="container modal_text">
                <h1>Зареєструйся, щоб користуватися системою кінотеатру</h1>
                <div class="clear"></div>
            </div>
        </div>
    </div>


    <div class="modal_active_place_bg">
        <div class="modal_active_place">
            <div class="modal_active_place_content">
                <h1>Ви дійсно хочете забронювати <span class="place_num"></span>  місце?</h1>
                <div class="modal_active_place_content_button">
                    <div id="place_button_left" class="modal_active_place_content_button_left">ТАК</div>
                    <div class="modal_active_place_content_button_right">НІ</div>
                </div>
            </div>
        </div>
    </div>

    <div class="modalClosePlace">
        <div class="modalClosePlaceContent">
            <h1>Ви дійсно хочете розбронювати <span class="place_num_min"></span> місце?</h1>
            <div class="modalClosePlaceContentButton">
                <div id="place_button_right" class="modalClosePlaceContentButtonLeft">ТАК</div>
                <div class="modalClosePlaceContentButtonRight">НІ</div>
            </div>
        </div>
    </div>


    <div class="nameOperator_modal_active_place_bg">
        <div class="nameOperator_modal_active_place">
            <div class="nameOperator_modal_active_place_content">
                <h1>Зараз оператор <span class="nameOperator"></span> думає про<span class="place_num"></span>  місце?</h1>
                <div class="modal_active_place_content_button">
                    <div id="nameOperator" class="nameOperator_button">Закрити</div>
                </div>
            </div>
        </div>
    </div>

    <div class="cinema_time">
        <div class="cinema_time_content">
            <h1>Фільм вже розпочався!!! Каса не працює!!! Приходьте завтра)</h1>
            <div class="modalClosePlaceContentButton">
            </div>
        </div>
    </div>




    <script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
    <script>
        $("document").ready(function () {
            $("#send").click(function () {
                var data_user = $("form").serialize();
                $.ajax({
                    url: 'model/app.php',
                    type: 'POST',
                    data: data_user,
                    success: function (data) {
//                     alert(data);
                    }
                });
            });
        });
    </script>

    <script>
        $("document").ready(function () {

            var idRow = [];

            setInterval(function () {
                getRow();
                getRowWaiting();
            }, 1000);

            function getRow() {
                $.ajax({
                    url: 'model/getRowPlace.php',
                    type: 'POST',
                    success: function (data) {
                        data = jQuery.parseJSON(data);
                        $.each(data, function (i, item) {
                            if (jQuery.inArray(item.id, idRow) == -1) {
                                idRow.push(item.id)
                                $('#row1').val(item.row1);
                                $('#row2').val(item.row2);
                                $('#row3').val(item.row3);
                                $('#row4').val(item.row4);
                                $('#row5').val(item.row5);
                                $('#row6').val(item.row6);
                                $('#row7').val(item.row7);
                                $('#row8').val(item.row8);
                                $('#row9').val(item.row9);
                                $('#row10').val(item.row10);
                                $('#row11').val(item.row11);
                                $('#row12').val(item.row12);
                                $('#row13').val(item.row13);
                                $('#row14').val(item.row14);
                                $('#row15').val(item.row15);
                                $('#row16').val(item.row16);
                                $('#row17').val(item.row17);
                                $('#row18').val(item.row18);
                                $('#row19').val(item.row19);
                                $('#row20').val(item.row20);
                                $('#row21').val(item.row21);
                                $('#row22').val(item.row22);
                                $('#row23').val(item.row23);
                                $('#row24').val(item.row24);
                                $('#row25').val(item.row25);
                                $('#row26').val(item.row26);
                                $('#row27').val(item.row27);
                                $('#row28').val(item.row28);
                                $('#row29').val(item.row29);
                                $('#row30').val(item.row30);
                                $('#row31').val(item.row31);
                                $('#row32').val(item.row32);
                                $('#row33').val(item.row33);
                                $('#row34').val(item.row34);
                                $('#row35').val(item.row35);
                                $('#row36').val(item.row36);
                                $('#row37').val(item.row37);
                                $('#row38').val(item.row38);
                                $('#row39').val(item.row39);
                                $('#row40').val(item.row40);
                                $('#row41').val(item.row41);
                                $('#row42').val(item.row42);
                                $('#row43').val(item.row43);
                                $('#row44').val(item.row44);
                                $('#row45').val(item.row45);
                                $('#row46').val(item.row46);
                                $('#row47').val(item.row47);
                                $('#row48').val(item.row48);
                                $('#row49').val(item.row49);
                                $('#row50').val(item.row50);
                                $('#row51').val(item.row51);
                                $('#row52').val(item.row52);
                                $('#row53').val(item.row53);
                                $('#row54').val(item.row54);
                                $('#row55').val(item.row55);
                                $('#row56').val(item.row56);
                                $('#row57').val(item.row57);
                                $('#row58').val(item.row58);
                                $('#row59').val(item.row59);



                                $('.priceAll').val(item.allPrice);






                                $('.calPriceClass1').attr('data-price',item.data_price_sale1);
                                $('.calPriceClass2').attr('data-price',item.data_price_sale2);
                                $('.calPriceClass3').attr('data-price',item.data_price_sale3);
                                $('.calPriceClass4').attr('data-price',item.data_price_sale4);
                                $('.calPriceClass5').attr('data-price',item.data_price_sale5);
                                $('.calPriceClass6').attr('data-price',item.data_price_sale6);
                                $('.calPriceClass7').attr('data-price',item.data_price_sale7);
                                $('.calPriceClass8').attr('data-price',item.data_price_sale8);
                                $('.calPriceClass9').attr('data-price',item.data_price_sale9);
                                $('.calPriceClass10').attr('data-price',item.data_price_sale10);
                                $('.calPriceClass11').attr('data-price',item.data_price_sale11);
                                $('.calPriceClass12').attr('data-price',item.data_price_sale12);
                                $('.calPriceClass13').attr('data-price',item.data_price_sale13);
                                $('.calPriceClass14').attr('data-price',item.data_price_sale14);
                                $('.calPriceClass15').attr('data-price',item.data_price_sale15);
                                $('.calPriceClass16').attr('data-price',item.data_price_sale16);
                                $('.calPriceClass17').attr('data-price',item.data_price_sale17);
                                $('.calPriceClass18').attr('data-price',item.data_price_sale18);
                                $('.calPriceClass19').attr('data-price',item.data_price_sale19);
                                $('.calPriceClass20').attr('data-price',item.data_price_sale20);
                                $('.calPriceClass21').attr('data-price',item.data_price_sale21);
                                $('.calPriceClass22').attr('data-price',item.data_price_sale22);
                                $('.calPriceClass23').attr('data-price',item.data_price_sale23);
                                $('.calPriceClass24').attr('data-price',item.data_price_sale24);
                                $('.calPriceClass25').attr('data-price',item.data_price_sale25);
                                $('.calPriceClass26').attr('data-price',item.data_price_sale26);
                                $('.calPriceClass27').attr('data-price',item.data_price_sale27);
                                $('.calPriceClass28').attr('data-price',item.data_price_sale28);
                                $('.calPriceClass29').attr('data-price',item.data_price_sale29);
                                $('.calPriceClass30').attr('data-price',item.data_price_sale30);
                                $('.calPriceClass31').attr('data-price',item.data_price_sale31);
                                $('.calPriceClass32').attr('data-price',item.data_price_sale32);
                                $('.calPriceClass33').attr('data-price',item.data_price_sale33);
                                $('.calPriceClass34').attr('data-price',item.data_price_sale34);
                                $('.calPriceClass35').attr('data-price',item.data_price_sale35);
                                $('.calPriceClass36').attr('data-price',item.data_price_sale36);
                                $('.calPriceClass37').attr('data-price',item.data_price_sale37);
                                $('.calPriceClass38').attr('data-price',item.data_price_sale38);
                                $('.calPriceClass39').attr('data-price',item.data_price_sale39);
                                $('.calPriceClass40').attr('data-price',item.data_price_sale40);
                                $('.calPriceClass41').attr('data-price',item.data_price_sale41);
                                $('.calPriceClass42').attr('data-price',item.data_price_sale42);
                                $('.calPriceClass43').attr('data-price',item.data_price_sale43);
                                $('.calPriceClass44').attr('data-price',item.data_price_sale44);
                                $('.calPriceClass45').attr('data-price',item.data_price_sale45);
                                $('.calPriceClass46').attr('data-price',item.data_price_sale46);
                                $('.calPriceClass47').attr('data-price',item.data_price_sale47);
                                $('.calPriceClass48').attr('data-price',item.data_price_sale48);
                                $('.calPriceClass49').attr('data-price',item.data_price_sale49);
                                $('.calPriceClass50').attr('data-price',item.data_price_sale50);
                                $('.calPriceClass51').attr('data-price',item.data_price_sale51);
                                $('.calPriceClass52').attr('data-price',item.data_price_sale52);
                                $('.calPriceClass53').attr('data-price',item.data_price_sale53);
                                $('.calPriceClass54').attr('data-price',item.data_price_sale54);
                                $('.calPriceClass55').attr('data-price',item.data_price_sale55);
                                $('.calPriceClass56').attr('data-price',item.data_price_sale56);
                                $('.calPriceClass57').attr('data-price',item.data_price_sale57);
                                $('.calPriceClass58').attr('data-price',item.data_price_sale58);
                                $('.calPriceClass59').attr('data-price',item.data_price_sale59);

                            }
                        });
                    }
                });
            }


            function getRowWaiting() {
                $.ajax({
                    url: 'model/waiting_show.php',
                    type: 'POST',
                    success: function (data) {
                        data = jQuery.parseJSON(data);
                        $.each(data, function (i, item) {
                            if (jQuery.inArray(item.id, idRow) == -1) {
                                idRow.push(item.id)
                                $('.nameOperator').text(item.user_waiting);
                                $('.waiting1').val(item.waiting1);
                                $('.waiting2').val(item.waiting2);
                                $('.waiting3').val(item.waiting3);
                                $('.waiting4').val(item.waiting4);
                                $('.waiting5').val(item.waiting5);
                                $('.waiting6').val(item.waiting6);
                                $('.waiting7').val(item.waiting7);
                                $('.waiting8').val(item.waiting8);
                                $('.waiting9').val(item.waiting9);
                                $('.waiting10').val(item.waiting10);
                                $('.waiting11').val(item.waiting11);
                                $('.waiting12').val(item.waiting12);
                                $('.waiting13').val(item.waiting13);
                                $('.waiting14').val(item.waiting14);
                                $('.waiting15').val(item.waiting15);
                                $('.waiting16').val(item.waiting16);
                                $('.waiting17').val(item.waiting17);
                                $('.waiting18').val(item.waiting18);
                                $('.waiting19').val(item.waiting19);
                                $('.waiting20').val(item.waiting20);
                                $('.waiting21').val(item.waiting21);
                                $('.waiting22').val(item.waiting22);
                                $('.waiting23').val(item.waiting23);
                                $('.waiting24').val(item.waiting24);
                                $('.waiting25').val(item.waiting25);
                                $('.waiting26').val(item.waiting26);
                                $('.waiting27').val(item.waiting27);
                                $('.waiting28').val(item.waiting28);
                                $('.waiting29').val(item.waiting29);
                                $('.waiting30').val(item.waiting30);
                                $('.waiting31').val(item.waiting31);
                                $('.waiting32').val(item.waiting32);
                                $('.waiting33').val(item.waiting33);
                                $('.waiting34').val(item.waiting34);
                                $('.waiting35').val(item.waiting35);
                                $('.waiting36').val(item.waiting36);
                                $('.waiting37').val(item.waiting37);
                                $('.waiting38').val(item.waiting38);
                                $('.waiting39').val(item.waiting39);
                                $('.waiting40').val(item.waiting40);
                                $('.waiting41').val(item.waiting41);
                                $('.waiting42').val(item.waiting42);
                                $('.waiting43').val(item.waiting43);
                                $('.waiting44').val(item.waiting44);
                                $('.waiting45').val(item.waiting45);
                                $('.waiting46').val(item.waiting46);
                                $('.waiting47').val(item.waiting47);
                                $('.waiting48').val(item.waiting48);
                                $('.waiting49').val(item.waiting49);
                                $('.waiting50').val(item.waiting50);
                                $('.waiting51').val(item.waiting51);
                                $('.waiting52').val(item.waiting52);
                                $('.waiting53').val(item.waiting53);
                                $('.waiting54').val(item.waiting54);
                                $('.waiting55').val(item.waiting55);
                                $('.waiting56').val(item.waiting56);
                                $('.waiting57').val(item.waiting57);
                                $('.waiting58').val(item.waiting58);
                                $('.waiting59').val(item.waiting59);

                            }
                        });
                    }
                });
            }

        });
    </script>

    <script type="text/javascript" src="js/common.js"></script>


</body>
</html>

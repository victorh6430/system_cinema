window.onload = function (e) {




    //-- Блокує місця які заняті, атрибут "disabled" додати місцям для його роботи
    // for (var i = 1; i <= 59; i++) {
    //     var q = document.getElementById("row" + i).value;
    //     if (q == 0) {
    //         var qw = document.getElementById("row" + i);
    //         qw.removeAttribute('disabled');
    //         // qw.style.background = "#ff8c00";
    //         // qw.style.color = "#ff8c00";
    //
    //     }
    // }
    //----------------------------------------------------------
    // Ставить колір місцям в яких "value=1"


    setInterval(function () {

        var row1 = document.querySelectorAll('.row1,  .place_row_1');

        for (var a = 0; a < row1.length; a++) {
            if (row1[a].children[0].value == 1) {
                row1[a].style.backgroundColor = "gray"
            } else {
                row1[a].style.backgroundColor = "#ff22a9";
            }
        }


        var row2 = document.querySelectorAll('.row2,  .place_row_2');
        for (var a = 0; a < row2.length; a++) {
            if (row2[a].children[0].value == 1) {
                row2[a].style.backgroundColor = "gray"
            } else {
                row2[a].style.backgroundColor = "#ff22a9";

            }
        }


        var row3 = document.querySelectorAll('.row3,  .place_row_3');
        for (var a = 0; a < row3.length; a++) {
            if (row3[a].children[0].value == 1) {
                row3[a].style.backgroundColor = "gray"
            } else {
                row3[a].style.backgroundColor = "#ff22a9";

            }

        }

        var row4 = document.querySelectorAll('.row4,  .place_row_4');
        for (var a = 0; a < row4.length; a++) {
            if (row4[a].children[0].value == 1) {
                row4[a].style.backgroundColor = "gray"
            } else {
                row4[a].style.backgroundColor = "#ff22a9";
            }
        }

        var row5 = document.querySelectorAll('.row5,  .place_row_5');
        for (var a = 0; a < row5.length; a++) {
            if (row5[a].children[0].value == 1) {
                row5[a].style.backgroundColor = "gray"
            } else {
                row5[a].style.backgroundColor = "#ff22a9";
            }
        }

        var row6 = document.querySelectorAll('.row6,  .place_row_6');
        for (var a = 0; a < row6.length; a++) {
            if (row6[a].children[0].value == 1) {
                row6[a].style.backgroundColor = "gray"
            } else {
                row6[a].style.backgroundColor = "#ff22a9";
            }
        }

        var row7 = document.querySelectorAll('.row7,  .place_row_7');
        for (var a = 0; a < row7.length; a++) {
            if (row7[a].children[0].value == 1) {
                row7[a].style.backgroundColor = "gray"
            } else {
                row7[a].style.backgroundColor = "#ff22a9";
            }
        }


        var z = document.getElementById("sale").value;
        if (z == "MISHA") {
            document.querySelector('.sale').style.border = "5px solid #20c715";
            document.querySelector('.sale_text').style.border = "5px solid #20c715";
            document.querySelector('.sale_text').innerText = "Ви ввели промокод і отримал знижку 20 грн";
        } else {
            document.querySelector('.sale').style.border = "5px solid #ff22a9";
            document.querySelector('.sale_text').style.border = "none";
            document.querySelector('.sale_text').innerText = "Введіть промокод і виберіть місце";
        }


    }, 100)


    // Перевірка, чи авторизований користувач
    var userLogin = document.getElementById("user_login").value;
    if (userLogin !== '') {


        var modalClosePlaceContentButtonRight = document.querySelector('.modalClosePlaceContentButtonRight');
        modalClosePlaceContentButtonRight.onclick = function () {
            modalClosePlace.classList.remove('modalClosePlace_show');

            if (result_num_min == 1) {
                document.querySelector('.waiting1').value = 0;
                document.querySelector('.clear_input1').value = 1;
            } else if (result_num_min == 2) {
                document.querySelector('.waiting2').value = 0;
                document.querySelector('.clear_input1').value = 1;
            } else if (result_num_min == 3) {
                document.querySelector('.waiting3').value = 0;
                document.querySelector('.clear_input3').value = 1;
            } else if (result_num_min == 4) {
                document.querySelector('.waiting4').value = 0;
                document.querySelector('.clear_input4').value = 1;
            } else if (result_num_min == 5) {
                document.querySelector('.waiting5').value = 0;
                document.querySelector('.clear_input5').value = 1;
            } else if (result_num_min == 6) {
                document.querySelector('.waiting6').value = 0;
                document.querySelector('.clear_input6').value = 1;
            } else if (result_num_min == 7) {
                document.querySelector('.waiting7').value = 0;
                document.querySelector('.clear_input7').value = 1;
            } else if (result_num_min == 8) {
                document.querySelector('.waiting8').value = 0;
                document.querySelector('.clear_input8').value = 1;
            } else if (result_num_min == 9) {
                document.querySelector('.waiting9').value = 0;
                document.querySelector('.clear_input9').value = 1;
            } else if (result_num_min == 10) {
                document.querySelector('.waiting10').value = 0;
                document.querySelector('.clear_input10').value = 1;
            } else if (result_num_min == 11) {
                document.querySelector('.waiting11').value = 0;
                document.querySelector('.clear_input11').value = 1;
            } else if (result_num_min == 12) {
                document.querySelector('.waiting12').value = 0;
                document.querySelector('.clear_input12').value = 1;
            } else if (result_num_min == 13) {
                document.querySelector('.waiting13').value = 0;
                document.querySelector('.clear_input13').value = 1;
            } else if (result_num_min == 14) {
                document.querySelector('.waiting14').value = 0;
                document.querySelector('.clear_input14').value = 1;
            } else if (result_num_min == 15) {
                document.querySelector('.waiting15').value = 0;
                document.querySelector('.clear_input15').value = 1;
            } else if (result_num_min == 16) {
                document.querySelector('.waiting16').value = 0;
                document.querySelector('.clear_input16').value = 1;
            } else if (result_num_min == 17) {
                document.querySelector('.waiting17').value = 0;
                document.querySelector('.clear_input17').value = 1;
            } else if (result_num_min == 18) {
                document.querySelector('.waiting18').value = 0;
                document.querySelector('.clear_input18').value = 1;
            } else if (result_num_min == 19) {
                document.querySelector('.waiting19').value = 0;
                document.querySelector('.clear_input19').value = 1;
            } else if (result_num_min == 20) {
                document.querySelector('.waiting20').value = 0;
                document.querySelector('.clear_input20').value = 1;
            } else if (result_num_min == 21) {
                document.querySelector('.waiting21').value = 0;
                document.querySelector('.clear_input21').value = 1;
            } else if (result_num_min == 22) {
                document.querySelector('.waiting22').value = 0;
                document.querySelector('.clear_input22').value = 1;
            } else if (result_num_min == 23) {
                document.querySelector('.waiting23').value = 0;
                document.querySelector('.clear_input23').value = 1;
            } else if (result_num_min == 24) {
                document.querySelector('.waiting24').value = 0;
                document.querySelector('.clear_input24').value = 1;
            } else if (result_num_min == 25) {
                document.querySelector('.waiting25').value = 0;
                document.querySelector('.clear_input25').value = 1;
            } else if (result_num_min == 26) {
                document.querySelector('.waiting26').value = 0;
                document.querySelector('.clear_input26').value = 1;
            } else if (result_num_min == 27) {
                document.querySelector('.waiting27').value = 0;
                document.querySelector('.clear_input27').value = 1;
            } else if (result_num_min == 28) {
                document.querySelector('.waiting28').value = 0;
                document.querySelector('.clear_input28').value = 1;
            } else if (result_num_min == 29) {
                document.querySelector('.waiting29').value = 0;
                document.querySelector('.clear_input29').value = 1;
            } else if (result_num_min == 30) {
                document.querySelector('.waiting30').value = 0;
                document.querySelector('.clear_input30').value = 1;
            } else if (result_num_min == 31) {
                document.querySelector('.waiting31').value = 0;
                document.querySelector('.clear_input31').value = 1;
            } else if (result_num_min == 32) {
                document.querySelector('.waiting32').value = 0;
                document.querySelector('.clear_input32').value = 1;
            } else if (result_num_min == 33) {
                document.querySelector('.waiting33').value = 0;
                document.querySelector('.clear_input33').value = 1;
            } else if (result_num_min == 34) {
                document.querySelector('.waiting34').value = 0;
                document.querySelector('.clear_input34').value = 1;
            } else if (result_num_min == 35) {
                document.querySelector('.waiting35').value = 0;
                document.querySelector('.clear_input35').value = 1;
            } else if (result_num_min == 36) {
                document.querySelector('.waiting36').value = 0;
                document.querySelector('.clear_input36').value = 1;
            } else if (result_num_min == 37) {
                document.querySelector('.waiting37').value = 0;
                document.querySelector('.clear_input37').value = 1;
            } else if (result_num_min == 38) {
                document.querySelector('.waiting38').value = 0;
                document.querySelector('.clear_input38').value = 1;
            } else if (result_num_min == 39) {
                document.querySelector('.waiting39').value = 0;
                document.querySelector('.clear_input39').value = 1;
            } else if (result_num_min == 40) {
                document.querySelector('.waiting40').value = 0;
                document.querySelector('.clear_input40').value = 1;
            } else if (result_num_min == 41) {
                document.querySelector('.waiting41').value = 0;
                document.querySelector('.clear_input41').value = 1;
            } else if (result_num_min == 42) {
                document.querySelector('.waiting42').value = 0;
                document.querySelector('.clear_input42').value = 1;
            } else if (result_num_min == 43) {
                document.querySelector('.waiting43').value = 0;
                document.querySelector('.clear_input43').value = 1;
            } else if (result_num_min == 44) {
                document.querySelector('.waiting44').value = 0;
                document.querySelector('.clear_input44').value = 1;
            } else if (result_num_min == 45) {
                document.querySelector('.waiting45').value = 0;
                document.querySelector('.clear_input45').value = 1;
            } else if (result_num_min == 46) {
                document.querySelector('.waiting46').value = 0;
                document.querySelector('.clear_input46').value = 1;
            } else if (result_num_min == 47) {
                document.querySelector('.waiting47').value = 0;
                document.querySelector('.clear_input47').value = 1;
            } else if (result_num_min == 48) {
                document.querySelector('.waiting48').value = 0;
                document.querySelector('.clear_input48').value = 1;
            } else if (result_num_min == 49) {
                document.querySelector('.waiting49').value = 0;
                document.querySelector('.clear_input49').value = 1;
            } else if (result_num_min == 50) {
                document.querySelector('.waiting50').value = 0;
                document.querySelector('.clear_input50').value = 1;
            } else if (result_num_min == 51) {
                document.querySelector('.waiting51').value = 0;
                document.querySelector('.clear_input51').value = 1;
            } else if (result_num_min == 52) {
                document.querySelector('.waiting52').value = 0;
                document.querySelector('.clear_input52').value = 1;
            } else if (result_num_min == 53) {
                document.querySelector('.waiting53').value = 0;
                document.querySelector('.clear_input53').value = 1;
            } else if (result_num_min == 54) {
                document.querySelector('.waiting54').value = 0;
                document.querySelector('.clear_input54').value = 1;
            } else if (result_num_min == 55) {
                document.querySelector('.waiting55').value = 0;
                document.querySelector('.clear_input55').value = 1;
            } else if (result_num_min == 56) {
                document.querySelector('.waiting56').value = 0;
                document.querySelector('.clear_input56').value = 1;
            } else if (result_num_min == 57) {
                document.querySelector('.waiting57').value = 0;
                document.querySelector('.clear_input57').value = 1;
            } else if (result_num_min == 58) {
                document.querySelector('.waiting58').value = 0;
                document.querySelector('.clear_input58').value = 1;
            } else if (result_num_min == 59) {
                document.querySelector('.waiting59').value = 0;
                document.querySelector('.clear_input59').value = 1;
            }


            ajaxWaitingDB();
            location.reload();
        }

        var place_button_right = document.getElementById('place_button_right');
        place_button_right.onclick = function () {
            if (result_num_min == 1) {
                document.querySelector('.waiting1').value = 0;
            } else if (result_num_min == 2) {
                document.querySelector('.waiting2').value = 0;
            } else if (result_num_min == 3) {
                document.querySelector('.waiting3').value = 0;
            } else if (result_num_min == 4) {
                document.querySelector('.waiting4').value = 0;
            } else if (result_num_min == 5) {
                document.querySelector('.waiting5').value = 0;
            } else if (result_num_min == 6) {
                document.querySelector('.waiting6').value = 0;
            } else if (result_num_min == 7) {
                document.querySelector('.waiting7').value = 0;
            } else if (result_num_min == 8) {
                document.querySelector('.waiting8').value = 0;
            } else if (result_num_min == 9) {
                document.querySelector('.waiting9').value = 0;
            } else if (result_num_min == 10) {
                document.querySelector('.waiting10').value = 0;
            } else if (result_num_min == 11) {
                document.querySelector('.waiting11').value = 0;
            } else if (result_num_min == 12) {
                document.querySelector('.waiting12').value = 0;
            } else if (result_num_min == 13) {
                document.querySelector('.waiting13').value = 0;
            } else if (result_num_min == 14) {
                document.querySelector('.waiting14').value = 0;
            } else if (result_num_min == 15) {
                document.querySelector('.waiting15').value = 0;
            } else if (result_num_min == 16) {
                document.querySelector('.waiting16').value = 0;
            } else if (result_num_min == 17) {
                document.querySelector('.waiting17').value = 0;
            } else if (result_num_min == 18) {
                document.querySelector('.waiting18').value = 0;
            } else if (result_num_min == 19) {
                document.querySelector('.waiting19').value = 0;
            } else if (result_num_min == 20) {
                document.querySelector('.waiting20').value = 0;
            } else if (result_num_min == 21) {
                document.querySelector('.waiting21').value = 0;
            } else if (result_num_min == 22) {
                document.querySelector('.waiting22').value = 0;
            } else if (result_num_min == 23) {
                document.querySelector('.waiting23').value = 0;
            } else if (result_num_min == 24) {
                document.querySelector('.waiting24').value = 0;
            } else if (result_num_min == 25) {
                document.querySelector('.waiting25').value = 0;
            } else if (result_num_min == 26) {
                document.querySelector('.waiting26').value = 0;
            } else if (result_num_min == 27) {
                document.querySelector('.waiting27').value = 0;
            } else if (result_num_min == 28) {
                document.querySelector('.waiting28').value = 0;
            } else if (result_num_min == 29) {
                document.querySelector('.waiting29').value = 0;
            } else if (result_num_min == 30) {
                document.querySelector('.waiting30').value = 0;
            } else if (result_num_min == 31) {
                document.querySelector('.waiting31').value = 0;
            } else if (result_num_min == 32) {
                document.querySelector('.waiting32').value = 0;
            } else if (result_num_min == 33) {
                document.querySelector('.waiting33').value = 0;
            } else if (result_num_min == 34) {
                document.querySelector('.waiting34').value = 0;
            } else if (result_num_min == 35) {
                document.querySelector('.waiting35').value = 0;
            } else if (result_num_min == 36) {
                document.querySelector('.waiting36').value = 0;
            } else if (result_num_min == 37) {
                document.querySelector('.waiting37').value = 0;
            } else if (result_num_min == 38) {
                document.querySelector('.waiting38').value = 0;
            } else if (result_num_min == 39) {
                document.querySelector('.waiting39').value = 0;
            } else if (result_num_min == 40) {
                document.querySelector('.waiting40').value = 0;
            } else if (result_num_min == 41) {
                document.querySelector('.waiting41').value = 0;
            } else if (result_num_min == 42) {
                document.querySelector('.waiting42').value = 0;
            } else if (result_num_min == 43) {
                document.querySelector('.waiting43').value = 0;
            } else if (result_num_min == 44) {
                document.querySelector('.waiting44').value = 0;
            } else if (result_num_min == 45) {
                document.querySelector('.waiting45').value = 0;
            } else if (result_num_min == 46) {
                document.querySelector('.waiting46').value = 0;
            } else if (result_num_min == 47) {
                document.querySelector('.waiting47').value = 0;
            } else if (result_num_min == 48) {
                document.querySelector('.waiting48').value = 0;
            } else if (result_num_min == 49) {
                document.querySelector('.waiting49').value = 0;
            } else if (result_num_min == 50) {
                document.querySelector('.waiting50').value = 0;
            } else if (result_num_min == 51) {
                document.querySelector('.waiting51').value = 0;
            } else if (result_num_min == 52) {
                document.querySelector('.waiting52').value = 0;
            } else if (result_num_min == 53) {
                document.querySelector('.waiting53').value = 0;
            } else if (result_num_min == 54) {
                document.querySelector('.waiting54').value = 0;
            } else if (result_num_min == 55) {
                document.querySelector('.waiting55').value = 0;
            } else if (result_num_min == 56) {
                document.querySelector('.waiting56').value = 0;
            } else if (result_num_min == 57) {
                document.querySelector('.waiting57').value = 0;
            } else if (result_num_min == 58) {
                document.querySelector('.waiting58').value = 0;
            } else if (result_num_min == 59) {
                document.querySelector('.waiting59').value = 0;
            }


            ajaxWaitingDB();
            ajaxWriteDB();
            modalClosePlace.classList.remove('modalClosePlace_show');

        }

        var place_button_left = document.getElementById('place_button_left');
        place_button_left.onclick = function () {

            if (result_num == 1) {
                document.querySelector('.waiting1').value = 0;
            } else if (result_num == 2) {
                document.querySelector('.waiting2').value = 0;
            } else if (result_num == 3) {
                document.querySelector('.waiting3').value = 0;
            } else if (result_num == 4) {
                document.querySelector('.waiting4').value = 0;
            } else if (result_num == 5) {
                document.querySelector('.waiting5').value = 0;
            } else if (result_num == 6) {
                document.querySelector('.waiting6').value = 0;
            } else if (result_num == 7) {
                document.querySelector('.waiting7').value = 0;
            } else if (result_num == 8) {
                document.querySelector('.waiting8').value = 0;
            } else if (result_num == 9) {
                document.querySelector('.waiting9').value = 0;
            } else if (result_num == 10) {
                document.querySelector('.waiting10').value = 0;
            } else if (result_num == 11) {
                document.querySelector('.waiting11').value = 0;
            } else if (result_num == 12) {
                document.querySelector('.waiting12').value = 0;
            } else if (result_num == 13) {
                document.querySelector('.waiting13').value = 0;
            } else if (result_num == 14) {
                document.querySelector('.waiting14').value = 0;
            } else if (result_num == 15) {
                document.querySelector('.waiting15').value = 0;
            } else if (result_num == 16) {
                document.querySelector('.waiting16').value = 0;
            } else if (result_num == 17) {
                document.querySelector('.waiting17').value = 0;
            } else if (result_num == 18) {
                document.querySelector('.waiting18').value = 0;
            } else if (result_num == 19) {
                document.querySelector('.waiting19').value = 0;
            } else if (result_num == 20) {
                document.querySelector('.waiting20').value = 0;
            } else if (result_num == 21) {
                document.querySelector('.waiting21').value = 0;
            } else if (result_num == 22) {
                document.querySelector('.waiting22').value = 0;
            } else if (result_num == 23) {
                document.querySelector('.waiting23').value = 0;
            } else if (result_num == 24) {
                document.querySelector('.waiting24').value = 0;
            } else if (result_num == 25) {
                document.querySelector('.waiting25').value = 0;
            } else if (result_num == 26) {
                document.querySelector('.waiting26').value = 0;
            } else if (result_num == 27) {
                document.querySelector('.waiting27').value = 0;
            } else if (result_num == 28) {
                document.querySelector('.waiting28').value = 0;
            } else if (result_num == 29) {
                document.querySelector('.waiting29').value = 0;
            } else if (result_num == 30) {
                document.querySelector('.waiting30').value = 0;
            } else if (result_num == 31) {
                document.querySelector('.waiting31').value = 0;
            } else if (result_num == 32) {
                document.querySelector('.waiting32').value = 0;
            } else if (result_num == 33) {
                document.querySelector('.waiting33').value = 0;
            } else if (result_num == 34) {
                document.querySelector('.waiting34').value = 0;
            } else if (result_num == 35) {
                document.querySelector('.waiting35').value = 0;
            } else if (result_num == 36) {
                document.querySelector('.waiting36').value = 0;
            } else if (result_num == 37) {
                document.querySelector('.waiting37').value = 0;
            } else if (result_num == 38) {
                document.querySelector('.waiting38').value = 0;
            } else if (result_num == 39) {
                document.querySelector('.waiting39').value = 0;
            } else if (result_num == 40) {
                document.querySelector('.waiting40').value = 0;
            } else if (result_num == 41) {
                document.querySelector('.waiting41').value = 0;
            } else if (result_num == 42) {
                document.querySelector('.waiting42').value = 0;
            } else if (result_num == 43) {
                document.querySelector('.waiting43').value = 0;
            } else if (result_num == 44) {
                document.querySelector('.waiting44').value = 0;
            } else if (result_num == 45) {
                document.querySelector('.waiting45').value = 0;
            } else if (result_num == 46) {
                document.querySelector('.waiting46').value = 0;
            } else if (result_num == 47) {
                document.querySelector('.waiting47').value = 0;
            } else if (result_num == 48) {
                document.querySelector('.waiting48').value = 0;
            } else if (result_num == 49) {
                document.querySelector('.waiting49').value = 0;
            } else if (result_num == 50) {
                document.querySelector('.waiting50').value = 0;
            } else if (result_num == 51) {
                document.querySelector('.waiting51').value = 0;
            } else if (result_num == 52) {
                document.querySelector('.waiting52').value = 0;
            } else if (result_num == 53) {
                document.querySelector('.waiting53').value = 0;
            } else if (result_num == 54) {
                document.querySelector('.waiting54').value = 0;
            } else if (result_num == 55) {
                document.querySelector('.waiting55').value = 0;
            } else if (result_num == 56) {
                document.querySelector('.waiting56').value = 0;
            } else if (result_num == 57) {
                document.querySelector('.waiting57').value = 0;
            } else if (result_num == 58) {
                document.querySelector('.waiting58').value = 0;
            } else if (result_num == 59) {
                document.querySelector('.waiting59').value = 0;
            }

            ajaxWaitingDB();
            ajaxWriteDB();
            // ajaxWriteDBuserMany();
            modal_active_place_show.classList.remove('modal_active_place_show');
        }

        document.querySelector('.nameOperator_button').addEventListener('click', function () {
            nameOperator_modal_active_place_show.classList.remove('nameOperator_modal_active_place_show');
        })

        var modal_active_place_content_button_right = document.querySelector(".modal_active_place_content_button_right");
        modal_active_place_content_button_right.onclick = function () {
            if (result_num == 1) {
                document.querySelector('.waiting1').value = 0;
                document.querySelector('.clear_input1').value = 0;
            } else if (result_num == 2) {
                document.querySelector('.waiting2').value = 0;
                document.querySelector('.clear_input2').value = 0;
            } else if (result_num == 3) {
                document.querySelector('.waiting3').value = 0;
                document.querySelector('.clear_input3').value = 0;
            } else if (result_num == 4) {
                document.querySelector('.waiting4').value = 0;
                document.querySelector('.clear_input4').value = 0;
            } else if (result_num == 5) {
                document.querySelector('.waiting5').value = 0;
                document.querySelector('.clear_input5').value = 0;
            } else if (result_num == 6) {
                document.querySelector('.waiting6').value = 0;
                document.querySelector('.clear_input6').value = 0;
            } else if (result_num == 7) {
                document.querySelector('.waiting7').value = 0;
                document.querySelector('.clear_input7').value = 0;
            } else if (result_num == 8) {
                document.querySelector('.waiting8').value = 0;
                document.querySelector('.clear_input8').value = 0;
            } else if (result_num == 9) {
                document.querySelector('.waiting9').value = 0;
                document.querySelector('.clear_input9').value = 0;
            } else if (result_num == 10) {
                document.querySelector('.waiting10').value = 0;
                document.querySelector('.clear_input10').value = 0;
            } else if (result_num == 11) {
                document.querySelector('.waiting11').value = 0;
                document.querySelector('.clear_input11').value = 0;
            } else if (result_num == 12) {
                document.querySelector('.waiting12').value = 0;
                document.querySelector('.clear_input12').value = 0;
            } else if (result_num == 13) {
                document.querySelector('.waiting13').value = 0;
                document.querySelector('.clear_input13').value = 0;
            } else if (result_num == 14) {
                document.querySelector('.waiting14').value = 0;
                document.querySelector('.clear_input14').value = 0;
            } else if (result_num == 15) {
                document.querySelector('.waiting15').value = 0;
                document.querySelector('.clear_input15').value = 0;
            } else if (result_num == 16) {
                document.querySelector('.waiting16').value = 0;
                document.querySelector('.clear_input16').value = 0;
            } else if (result_num == 17) {
                document.querySelector('.waiting17').value = 0;
                document.querySelector('.clear_input17').value = 0;
            } else if (result_num == 18) {
                document.querySelector('.waiting18').value = 0;
                document.querySelector('.clear_input18').value = 0;
            } else if (result_num == 19) {
                document.querySelector('.waiting19').value = 0;
                document.querySelector('.clear_input19').value = 0;
            } else if (result_num == 20) {
                document.querySelector('.waiting20').value = 0;
                document.querySelector('.clear_input20').value = 0;
            } else if (result_num == 21) {
                document.querySelector('.waiting21').value = 0;
                document.querySelector('.clear_input21').value = 0;
            } else if (result_num == 22) {
                document.querySelector('.waiting22').value = 0;
                document.querySelector('.clear_input22').value = 0;
            } else if (result_num == 23) {
                document.querySelector('.waiting23').value = 0;
                document.querySelector('.clear_input23').value = 0;
            } else if (result_num == 24) {
                document.querySelector('.waiting24').value = 0;
                document.querySelector('.clear_input24').value = 0;
            } else if (result_num == 25) {
                document.querySelector('.waiting25').value = 0;
                document.querySelector('.clear_input25').value = 0;
            } else if (result_num == 26) {
                document.querySelector('.waiting26').value = 0;
                document.querySelector('.clear_input26').value = 0;
            } else if (result_num == 27) {
                document.querySelector('.waiting27').value = 0;
                document.querySelector('.clear_input27').value = 0;
            } else if (result_num == 28) {
                document.querySelector('.waiting28').value = 0;
                document.querySelector('.clear_input28').value = 0;
            } else if (result_num == 29) {
                document.querySelector('.waiting29').value = 0;
                document.querySelector('.clear_input29').value = 0;
            } else if (result_num == 30) {
                document.querySelector('.waiting30').value = 0;
                document.querySelector('.clear_input30').value = 0;
            } else if (result_num == 31) {
                document.querySelector('.waiting31').value = 0;
                document.querySelector('.clear_input31').value = 0;
            } else if (result_num == 32) {
                document.querySelector('.waiting32').value = 0;
                document.querySelector('.clear_input32').value = 0;
            } else if (result_num == 33) {
                document.querySelector('.waiting33').value = 0;
                document.querySelector('.clear_input33').value = 0;
            } else if (result_num == 34) {
                document.querySelector('.waiting34').value = 0;
                document.querySelector('.clear_input34').value = 0;
            } else if (result_num == 35) {
                document.querySelector('.waiting35').value = 0;
                document.querySelector('.clear_input35').value = 0;
            } else if (result_num == 36) {
                document.querySelector('.waiting36').value = 0;
                document.querySelector('.clear_input36').value = 0;
            } else if (result_num == 37) {
                document.querySelector('.waiting37').value = 0;
                document.querySelector('.clear_input37').value = 0;
            } else if (result_num == 38) {
                document.querySelector('.waiting38').value = 0;
                document.querySelector('.clear_input38').value = 0;
            } else if (result_num == 39) {
                document.querySelector('.waiting39').value = 0;
                document.querySelector('.clear_input39').value = 0;
            } else if (result_num == 40) {
                document.querySelector('.waiting40').value = 0;
                document.querySelector('.clear_input40').value = 0;
            } else if (result_num == 41) {
                document.querySelector('.waiting41').value = 0;
                document.querySelector('.clear_input41').value = 0;
            } else if (result_num == 42) {
                document.querySelector('.waiting42').value = 0;
                document.querySelector('.clear_input42').value = 0;
            } else if (result_num == 43) {
                document.querySelector('.waiting43').value = 0;
                document.querySelector('.clear_input43').value = 0;
            } else if (result_num == 44) {
                document.querySelector('.waiting44').value = 0;
                document.querySelector('.clear_input44').value = 0;
            } else if (result_num == 45) {
                document.querySelector('.waiting45').value = 0;
                document.querySelector('.clear_input45').value = 0;
            } else if (result_num == 46) {
                document.querySelector('.waiting46').value = 0;
                document.querySelector('.clear_input46').value = 0;
            } else if (result_num == 47) {
                document.querySelector('.waiting47').value = 0;
                document.querySelector('.clear_input47').value = 0;
            } else if (result_num == 48) {
                document.querySelector('.waiting48').value = 0;
                document.querySelector('.clear_input48').value = 0;
            } else if (result_num == 49) {
                document.querySelector('.waiting49').value = 0;
                document.querySelector('.clear_input49').value = 0;
            } else if (result_num == 50) {
                document.querySelector('.waiting50').value = 0;
                document.querySelector('.clear_input50').value = 0;
            } else if (result_num == 51) {
                document.querySelector('.waiting51').value = 0;
                document.querySelector('.clear_input51').value = 0;
            } else if (result_num == 52) {
                document.querySelector('.waiting52').value = 0;
                document.querySelector('.clear_input52').value = 0;
            } else if (result_num == 53) {
                document.querySelector('.waiting53').value = 0;
                document.querySelector('.clear_input53').value = 0;
            } else if (result_num == 54) {
                document.querySelector('.waiting54').value = 0;
                document.querySelector('.clear_input54').value = 0;
            } else if (result_num == 55) {
                document.querySelector('.waiting55').value = 0;
                document.querySelector('.clear_input55').value = 0;
            } else if (result_num == 56) {
                document.querySelector('.waiting56').value = 0;
                document.querySelector('.clear_input56').value = 0;
            } else if (result_num == 57) {
                document.querySelector('.waiting57').value = 0;
                document.querySelector('.clear_input57').value = 0;
            } else if (result_num == 58) {
                document.querySelector('.waiting58').value = 0;
                document.querySelector('.clear_input58').value = 0;
            } else if (result_num == 59) {
                document.querySelector('.waiting59').value = 0;
                document.querySelector('.clear_input59').value = 0;
            }

            ajaxWaitingDB();

            modal_active_place_show.classList.remove('modal_active_place_show');
            location.reload();

        }


        count = 0;
        //Робота з першим рядом
        var countIn = document.querySelector('.count');
        var priceIn = document.querySelector('[data-price]');
        var row1 = document.querySelectorAll('.row1, .place_row_1');
        var input_enter = document.querySelectorAll('.input_enter');
        var modal_active_place_show = document.querySelector('.modal_active_place');
        var modal_active_place_content_button_left = document.querySelector('.modal_active_place_content_button_left');
        var modalClosePlace = document.querySelector('.modalClosePlace');
        var place_num = document.querySelector('.place_num');
        var place_num_min = document.querySelector('.place_num_min');
        var nameOperator_modal_active_place_show = document.querySelector('.nameOperator_modal_active_place');


        for (var i = 0; i < row1.length; i++) {
            row1[i].onclick = function () {
                if (this.querySelector('.input_enter').value == 0) {
                    result_num = this.textContent;
                    place_num.innerHTML = result_num;

                    if (result_num == 1) {
                        if (document.querySelector('.waiting1').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale1').value = 80;
                                document.querySelector('.waiting1').value = 1;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale1').value = 100;
                                document.querySelector('.waiting1').value = 1;
                            }

                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting1').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 2) {
                        if (document.querySelector('.waiting2').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;

                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale2').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale2').value = 100;
                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting2').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 3) {
                        if (document.querySelector('.waiting3').value == 0) {

                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;

                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale3').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale3').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting3').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 4) {
                        if (document.querySelector('.waiting4').value == 0) {

                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale4').value = 80;
                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale4').value = 100;
                            }

                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting4').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 5) {
                        if (document.querySelector('.waiting5').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale5').value = 80;
                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale5').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting5').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 6) {
                        if (document.querySelector('.waiting6').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale6').value = 80;
                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale6').value = 100;
                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting6').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else {
                        if (document.querySelector('.waiting7').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale7').value = 80;


                            } else {

                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale7').value = 100;


                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting7').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    }

                } else {

                    result_num_min = this.textContent;
                    place_num_min.innerHTML = result_num_min;

                    if (result_num_min == 1) {
                        if (document.querySelector('.waiting1').value == 0) {
                            document.querySelector('.waiting1').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 2) {
                        if (document.querySelector('.waiting2').value == 0) {
                            document.querySelector('.waiting2').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 3) {
                        if (document.querySelector('.waiting3').value == 0) {
                            document.querySelector('.waiting3').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 4) {
                        if (document.querySelector('.waiting4').value == 0) {
                            document.querySelector('.waiting4').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 5) {
                        if (document.querySelector('.waiting5').value == 0) {
                            document.querySelector('.waiting5').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 6) {
                        if (document.querySelector('.waiting6').value == 0) {
                            document.querySelector('.waiting6').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else {
                        if (document.querySelector('.waiting7').value == 0) {
                            document.querySelector('.waiting7').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    }


                }
            }
        }


        var row2 = document.querySelectorAll('.row2, .place_row_2');
        for (var i = 0; i < row2.length; i++) {
            row2[i].onclick = function () {


                if (this.querySelector('.input_enter').value == 0) {
                    result_num = this.textContent;
                    place_num.innerHTML = result_num;

                    if (result_num == 8) {
                        if (document.querySelector('.waiting8').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale8').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale8').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting8').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 9) {
                        if (document.querySelector('.waiting9').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale9').value = 80;


                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale9').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting9').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 10) {
                        if (document.querySelector('.waiting10').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale10').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale10').value = 100;

                            }
                            document.querySelector('.waiting10').value = 1;
                            ajaxWaitingDB();

                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting10').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 11) {
                        if (document.querySelector('.waiting11').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale11').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale11').value = 100;


                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting11').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 12) {
                        if (document.querySelector('.waiting12').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale12').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale12').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting12').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    }
                    else if (result_num == 13) {
                        if (document.querySelector('.waiting13').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale13').value = 80;


                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale13').value = 100;


                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting13').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else {
                        if (document.querySelector('.waiting14').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale14').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale14').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                            document.querySelector('.waiting14').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    }

                }
                else {
                    result_num_min = this.textContent;
                    place_num_min.innerHTML = result_num_min;

                    if (result_num_min == 8) {
                        if (document.querySelector('.waiting8').value == 0) {
                            document.querySelector('.waiting8').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 9) {
                        if (document.querySelector('.waiting9').value == 0) {
                            document.querySelector('.waiting9').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 11) {
                        if (document.querySelector('.waiting11').value == 0) {
                            document.querySelector('.waiting11').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 12) {
                        if (document.querySelector('.waiting12').value == 0) {
                            document.querySelector('.waiting12').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 13) {
                        if (document.querySelector('.waiting13').value == 0) {
                            document.querySelector('.waiting13').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else {
                        if (document.querySelector('.waiting14').value == 0) {
                            document.querySelector('.waiting14').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    }

                }
            }
        }

        var row3 = document.querySelectorAll('.row3, .place_row_3');
        for (var i = 0; i < row3.length; i++) {
            row3[i].onclick = function () {
                if (this.querySelector('.input_enter').value == 0) {

                    result_num = this.textContent;
                    place_num.innerHTML = result_num;

                    if (result_num == 15) {
                        if (document.querySelector('.waiting15').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale15').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale15').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting15').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 16) {
                        if (document.querySelector('.waiting16').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale16').value = 80;


                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale16').value = 100;


                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting16').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 17) {
                        if (document.querySelector('.waiting17').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale17').value = 80;


                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale17').value = 100;


                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                            document.querySelector('.waiting17').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 18) {
                        if (document.querySelector('.waiting18').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale18').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale18').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                            document.querySelector('.waiting18').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 19) {
                        if (document.querySelector('.waiting19').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale19').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale19').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting19').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 20) {
                        if (document.querySelector('.waiting20').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale20').value = 80;


                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale20').value = 100;


                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting20').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 21) {
                        if (document.querySelector('.waiting21').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale21').value = 80;


                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale21').value = 100;


                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                            document.querySelector('.waiting21').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else {
                        if (document.querySelector('.waiting22').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale22').value = 80;


                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale22').value = 100;


                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting22').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    }

                }
                else {

                    result_num_min = this.textContent;
                    place_num_min.innerHTML = result_num_min;

                    if (result_num_min == 15) {
                        if (document.querySelector('.waiting15').value == 0) {
                            document.querySelector('.waiting15').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 16) {
                        if (document.querySelector('.waiting16').value == 0) {
                            document.querySelector('.waiting16').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 17) {
                        if (document.querySelector('.waiting17').value == 0) {
                            document.querySelector('.waiting17').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 18) {
                        if (document.querySelector('.waiting18').value == 0) {
                            document.querySelector('.waiting18').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 19) {
                        if (document.querySelector('.waiting19').value == 0) {
                            document.querySelector('.waiting19').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 20) {
                        if (document.querySelector('.waiting20').value == 0) {
                            document.querySelector('.waiting20').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 21) {
                        if (document.querySelector('.waiting21').value == 0) {
                            document.querySelector('.waiting21').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num_min == 22) {
                        if (document.querySelector('.waiting22').value == 0) {
                            document.querySelector('.waiting22').value = 1;
                            ajaxWaitingDB();

                            modal_active_place_show.classList.remove('modal_active_place_show');
                            this.style.backgroundColor = "#ff22a9";
                            modalClosePlace.classList.add('modalClosePlace_show');
                            this.querySelector('.input_enter').value = 0;

                            var data_price = this.getAttribute('data-price');
                            if (this.getAttribute == 80) {
                                data_price - 80;
                            } else {
                                data_price - 100;
                            }
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                            count--;
                            if (count == "-1") {

                                count++;
                            }
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;

                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    }

                }
            }
        }

        var row4 = document.querySelectorAll('.row4, .place_row_4');
        for (var i = 0; i < row4.length; i++) {
            row4[i].onclick = function () {
                if (this.querySelector('.input_enter').value == 0) {

                    result_num = this.textContent;
                    place_num.innerHTML = result_num;

                    if (result_num == 23) {

                        if (document.querySelector('.waiting23').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale23').value = 80;


                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale23').value = 100;


                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting23').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 24) {
                        if (document.querySelector('.waiting24').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale24').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale24').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting24').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 25) {
                        if (document.querySelector('.waiting25').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {
                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale25').value = 80;


                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale25').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting25').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 26) {
                        if (document.querySelector('.waiting26').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale26').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale26').value = 100;

                            }


                            var data_price = this.getAttribute('data-price');
                            console.log(data_price);
                            var priceAll_data_price = document.querySelector('.priceAll').value;
                            document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting26').value = 1;
                            ajaxWaitingDB();
                        } else {
                            nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                        }
                    } else if (result_num == 27) {
                        if (document.querySelector('.waiting27').value == 0) {
                            this.style.backgroundColor = "gray"
                            count++;
                            var countText = "Ви забронювали" + " " + count;
                            countIn.innerHTML = countText;
                            modal_active_place_show.classList.add('modal_active_place_show');
                            this.querySelector('.input_enter').value = 1;
                            var z = document.getElementById("sale").value;
                            if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale27').value = 80;

                            } else {
                                this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale27').value = 100;

                        }



                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                            document.querySelector('.waiting27').value = 1;
                            ajaxWaitingDB();
                        } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 28) {
                    if (document.querySelector('.waiting28').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale28').value = 80;

                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale28').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting28').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 29) {
                    if (document.querySelector('.waiting29').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {

                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale29').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale29').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting29').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 30) {
                    if (document.querySelector('.waiting30').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            if (result_num == 30) {
                                document.querySelector('.data_price_sale30').value = 80;
                                document.querySelector('.waiting30').value = 1;
                            }
                        } else {
                            if (result_num == 30) {
                                document.querySelector('.data_price_sale30').value = 100;
                                document.querySelector('.waiting30').value = 1;
                            }
                        }

                        ajaxWaitingDB();

                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }

            }
        else
            {

                result_num_min = this.textContent;
                place_num_min.innerHTML = result_num_min;

                if (result_num_min == 23) {
                    if (document.querySelector('.waiting23').value == 0) {
                        document.querySelector('.waiting23').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 24) {
                    if (document.querySelector('.waiting24').value == 0) {
                        document.querySelector('.waiting24').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 25) {
                    if (document.querySelector('.waiting25').value == 0) {
                        document.querySelector('.waiting25').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 26) {
                    if (document.querySelector('.waiting26').value == 0) {
                        document.querySelector('.waiting26').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 27) {
                    if (document.querySelector('.waiting27').value == 0) {
                        document.querySelector('.waiting27').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 28) {
                    if (document.querySelector('.waiting28').value == 0) {
                        document.querySelector('.waiting28').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 29) {
                    if (document.querySelector('.waiting29').value == 0) {
                        document.querySelector('.waiting29').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 30) {
                    if (document.querySelector('.waiting30').value == 0) {
                        document.querySelector('.waiting30').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }


            }
        }
    }

    var row5 = document.querySelectorAll('.row5, .place_row_5');
    for (var i = 0; i < row5.length; i++) {
        row5[i].onclick = function () {
            if (this.querySelector('.input_enter').value == 0) {

                result_num = this.textContent;
                place_num.innerHTML = result_num;

                if (result_num == 31) {

                    if (document.querySelector('.waiting31').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale31').value = 80;

                        } else {
                        this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale31').value = 100;

                        }

                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting31').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 32) {
                    if (document.querySelector('.waiting32').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale32').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale32').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting32').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 33) {
                    if (document.querySelector('.waiting33').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale33').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale33').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting33').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 34) {
                    if (document.querySelector('.waiting34').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale34').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale34').value = 100;


                        }

                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting34').value = 1;
                        ajaxWaitingDB();

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 35) {
                    if (document.querySelector('.waiting35').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {

                            this.setAttribute('data-price', '80');
                            document.querySelector('.data_price_sale35').value = 80;

                        } else {
                            this.setAttribute('data-price', '100');
                            document.querySelector('.data_price_sale35').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting35').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 36) {
                    if (document.querySelector('.waiting36').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {

                                this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale36').value = 80;

                        } else {
                              this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale36').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting36').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 37) {
                    if (document.querySelector('.waiting37').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale37').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale37').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting37').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 38) {
                    if (document.querySelector('.waiting38').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale38').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale38').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting38').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 39) {
                    if (document.querySelector('.waiting39').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                             this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale39').value = 80;

                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale39').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting39').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }

            } else {
                result_num_min = this.textContent;
                place_num_min.innerHTML = result_num_min;

                if (result_num_min == 31) {
                    if (document.querySelector('.waiting31').value == 0) {
                        document.querySelector('.waiting31').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 32) {
                    if (document.querySelector('.waiting32').value == 0) {
                        document.querySelector('.waiting32').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 33) {
                    if (document.querySelector('.waiting33').value == 0) {
                        document.querySelector('.waiting33').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 34) {
                    if (document.querySelector('.waiting34').value == 0) {
                        document.querySelector('.waiting34').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 35) {
                    if (document.querySelector('.waiting35').value == 0) {
                        document.querySelector('.waiting35').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 36) {
                    if (document.querySelector('.waiting36').value == 0) {
                        document.querySelector('.waiting36').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 37) {
                    if (document.querySelector('.waiting37').value == 0) {
                        document.querySelector('.waiting37').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 38) {
                    if (document.querySelector('.waiting38').value == 0) {
                        document.querySelector('.waiting38').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 39) {
                    if (document.querySelector('.waiting39').value == 0) {
                        document.querySelector('.waiting39').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
            }
        }
    }

    var row6 = document.querySelectorAll('.row6, .place_row_6');
    for (var i = 0; i < row6.length; i++) {
        row6[i].onclick = function () {
            if (this.querySelector('.input_enter').value == 0) {

                result_num = this.textContent;
                place_num.innerHTML = result_num;

                if (result_num == 40) {

                    if (document.querySelector('.waiting40').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                             this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale40').value = 80;


                        } else {
                        this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale40').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting40').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 41) {

                    if (document.querySelector('.waiting41').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale41').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale41').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting41').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 41) {

                    if (document.querySelector('.waiting41').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                                 this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale41').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale41').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting41').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 43) {

                    if (document.querySelector('.waiting43').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale43').value = 80;

                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale43').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting43').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 44) {

                    if (document.querySelector('.waiting44').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {

                           this.setAttribute('data-price', '80');
                            document.querySelector('.data_price_sale44').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                            document.querySelector('.data_price_sale44').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting44').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 45) {

                    if (document.querySelector('.waiting45').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale45').value = 80;

                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale45').value = 100;

                        }

                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting45').value = 1;
                        ajaxWaitingDB();

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 46) {

                    if (document.querySelector('.waiting46').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale46').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale46').value = 100;


                        }



                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting46').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 47) {

                    if (document.querySelector('.waiting47').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale47').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale47').value = 100;


                        }

                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting47').value = 1;
                        ajaxWaitingDB();

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 48) {

                    if (document.querySelector('.waiting48').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale48').value = 80;


                        } else {
                        this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale48').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting48').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num == 49) {

                    if (document.querySelector('.waiting49').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale49').value = 80;

                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale49').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting49').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }

            } else {
                result_num_min = this.textContent;
                place_num_min.innerHTML = result_num_min;

                if (result_num_min == 40) {
                    if (document.querySelector('.waiting40').value == 0) {
                        document.querySelector('.waiting40').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 41) {
                    if (document.querySelector('.waiting41').value == 0) {
                        document.querySelector('.waiting41').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 42) {
                    if (document.querySelector('.waiting42').value == 0) {
                        document.querySelector('.waiting42').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 43) {
                    if (document.querySelector('.waiting43').value == 0) {
                        document.querySelector('.waiting43').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 44) {
                    if (document.querySelector('.waiting44').value == 0) {
                        document.querySelector('.waiting44').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 45) {
                    if (document.querySelector('.waiting45').value == 0) {
                        document.querySelector('.waiting45').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 46) {
                    if (document.querySelector('.waiting46').value == 0) {
                        document.querySelector('.waiting46').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 47) {
                    if (document.querySelector('.waiting47').value == 0) {
                        document.querySelector('.waiting47').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 48) {
                    if (document.querySelector('.waiting48').value == 0) {
                        document.querySelector('.waiting48').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num_min == 49) {
                    if (document.querySelector('.waiting49').value == 0) {
                        document.querySelector('.waiting49').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
            }
        }
    }

    var row7 = document.querySelectorAll('.row7, .place_row_7');
    for (var i = 0; i < row7.length; i++) {
        row7[i].onclick = function () {
            if (this.querySelector('.input_enter').value == 0) {

                result_num = this.textContent;
                place_num.innerHTML = result_num;

                if (result_num == 50) {

                    if (document.querySelector('.waiting50').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale50').value = 80;


                        } else {
                        this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale50').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting50').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num == 51) {

                    if (document.querySelector('.waiting51').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale51').value = 80;


                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale51').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting51').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num == 52) {

                    if (document.querySelector('.waiting52').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale52').value = 80;

                        } else {
                              this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale52').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);
                        document.querySelector('.waiting52').value = 1;
                        ajaxWaitingDB();

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num == 53) {

                    if (document.querySelector('.waiting53').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale53').value = 80;

                        } else {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale53').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting53').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num == 54) {

                    if (document.querySelector('.waiting54').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale54').value = 80;

                        } else {
                            this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale54').value = 100;

                        }

                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting54').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num == 55) {

                    if (document.querySelector('.waiting55').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale55').value = 80;

                        } else {
                        this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale55').value = 100;

                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting55').value = 1;
                        ajaxWaitingDB();

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num == 56) {

                    if (document.querySelector('.waiting56').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale56').value = 80;


                        } else {
                        this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale56').value = 100;


                        }


                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting56').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num == 57) {

                    if (document.querySelector('.waiting57').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale57').value = 80;

                        } else {
                        this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale57').value = 100;

                        }

                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting57').value = 1;
                        ajaxWaitingDB();

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num == 58) {

                    if (document.querySelector('.waiting58').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale58').value = 80;

                        } else {
                        this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale58').value = 100;

                        }

                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);

                        document.querySelector('.waiting58').value = 1;
                        ajaxWaitingDB();

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
                if (result_num == 59) {

                    if (document.querySelector('.waiting59').value == 0) {
                        this.style.backgroundColor = "gray"
                        count++;
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;
                        modal_active_place_show.classList.add('modal_active_place_show');
                        this.querySelector('.input_enter').value = 1;
                        var z = document.getElementById("sale").value;
                        if (z == "MISHA") {
                            this.setAttribute('data-price', '80');
                                document.querySelector('.data_price_sale59').value = 80;

                        } else {
                        this.setAttribute('data-price', '100');
                                document.querySelector('.data_price_sale59').value = 100;

                        }



                        var data_price = this.getAttribute('data-price');
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) + parseInt(data_price);


                        document.querySelector('.waiting59').value = 1;
                        ajaxWaitingDB();
                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }


            } else {
                result_num_min = this.textContent;
                place_num_min.innerHTML = result_num_min;

                if (result_num_min == 50) {
                    if (document.querySelector('.waiting50').value == 0) {
                        document.querySelector('.waiting50').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 51) {
                    if (document.querySelector('.waiting51').value == 0) {
                        document.querySelector('.waiting51').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 52) {
                    if (document.querySelector('.waiting52').value == 0) {
                        document.querySelector('.waiting52').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 53) {
                    if (document.querySelector('.waiting53').value == 0) {
                        document.querySelector('.waiting53').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 54) {
                    if (document.querySelector('.waiting54').value == 0) {
                        document.querySelector('.waiting54').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 55) {
                    if (document.querySelector('.waiting55').value == 0) {
                        document.querySelector('.waiting55').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 56) {
                    if (document.querySelector('.waiting56').value == 0) {
                        document.querySelector('.waiting56').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 57) {
                    if (document.querySelector('.waiting57').value == 0) {
                        document.querySelector('.waiting57').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 58) {
                    if (document.querySelector('.waiting58').value == 0) {
                        document.querySelector('.waiting58').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                } else if (result_num_min == 59) {
                    if (document.querySelector('.waiting59').value == 0) {
                        document.querySelector('.waiting59').value = 1;
                        ajaxWaitingDB();

                        modal_active_place_show.classList.remove('modal_active_place_show');
                        this.style.backgroundColor = "#ff22a9";
                        modalClosePlace.classList.add('modalClosePlace_show');
                        this.querySelector('.input_enter').value = 0;

                        var data_price = this.getAttribute('data-price');
                        if (this.getAttribute == 80) {
                            data_price - 80;
                        } else {
                            data_price - 100;
                        }
                        console.log(data_price);
                        var priceAll_data_price = document.querySelector('.priceAll').value;
                        document.querySelector('.priceAll').value = parseInt(priceAll_data_price) - parseInt(data_price);
                        count--;
                        if (count == "-1") {

                            count++;
                        }
                        var countText = "Ви забронювали" + " " + count;
                        countIn.innerHTML = countText;

                    } else {
                        nameOperator_modal_active_place_show.classList.add('nameOperator_modal_active_place_show');
                    }
                }
            }
        }
    }

}
else
{
    // alert("Зареєструйся для повним користуванням сайту");
}
var row1 = document.querySelector('input[name=row1]');
var row2 = document.querySelector('input[name=row2]');
var row3 = document.querySelector('input[name=row3]');
var row4 = document.querySelector('input[name=row4]');
var row5 = document.querySelector('input[name=row5]');
var row6 = document.querySelector('input[name=row6]');
var row7 = document.querySelector('input[name=row7]');
var row8 = document.querySelector('input[name=row8]');
var row9 = document.querySelector('input[name=row9]');
var row10 = document.querySelector('input[name=row10]');
var row11 = document.querySelector('input[name=row11]');
var row12 = document.querySelector('input[name=row12]');
var row13 = document.querySelector('input[name=row13]');
var row14 = document.querySelector('input[name=row14]');
var row15 = document.querySelector('input[name=row15]');
var row16 = document.querySelector('input[name=row16]');
var row17 = document.querySelector('input[name=row17]');
var row18 = document.querySelector('input[name=row18]');
var row19 = document.querySelector('input[name=row19]');
var row20 = document.querySelector('input[name=row20]');
var row21 = document.querySelector('input[name=row21]');
var row22 = document.querySelector('input[name=row22]');
var row23 = document.querySelector('input[name=row23]');
var row24 = document.querySelector('input[name=row24]');
var row25 = document.querySelector('input[name=row25]');
var row26 = document.querySelector('input[name=row26]');
var row27 = document.querySelector('input[name=row27]');
var row28 = document.querySelector('input[name=row28]');
var row29 = document.querySelector('input[name=row29]');
var row30 = document.querySelector('input[name=row30]');
var row31 = document.querySelector('input[name=row31]');
var row32 = document.querySelector('input[name=row32]');
var row33 = document.querySelector('input[name=row33]');
var row34 = document.querySelector('input[name=row34]');
var row35 = document.querySelector('input[name=row35]');
var row36 = document.querySelector('input[name=row36]');
var row37 = document.querySelector('input[name=row37]');
var row38 = document.querySelector('input[name=row38]');
var row39 = document.querySelector('input[name=row39]');
var row40 = document.querySelector('input[name=row40]');
var row41 = document.querySelector('input[name=row41]');
var row42 = document.querySelector('input[name=row42]');
var row43 = document.querySelector('input[name=row43]');
var row44 = document.querySelector('input[name=row44]');
var row45 = document.querySelector('input[name=row45]');
var row46 = document.querySelector('input[name=row46]');
var row47 = document.querySelector('input[name=row47]');
var row48 = document.querySelector('input[name=row48]');
var row49 = document.querySelector('input[name=row49]');
var row50 = document.querySelector('input[name=row50]');
var row51 = document.querySelector('input[name=row51]');
var row52 = document.querySelector('input[name=row52]');
var row53 = document.querySelector('input[name=row53]');
var row54 = document.querySelector('input[name=row54]');
var row55 = document.querySelector('input[name=row55]');
var row56 = document.querySelector('input[name=row56]');
var row57 = document.querySelector('input[name=row57]');
var row58 = document.querySelector('input[name=row58]');
var row59 = document.querySelector('input[name=row59]');
var row59 = document.querySelector('input[name=row59]');
var userAdmin = document.querySelector('input[name=userAdmin]');


//--------------------------------------------------------------------


document.addEventListener('change', function () {
        var check = event.target

        if (check.checked && check.name == "two") {

            if (row1.value == 0 && row2.value == 0) {
                row1.parentElement.classList.add("checkColor");
                row2.parentElement.classList.add("checkColor");
            }
            if (row2.value == 0 && row3.value == 0) {
                row2.parentElement.classList.add("checkColor");
                row3.parentElement.classList.add("checkColor");
            }
            if (row3.value == 0 && row4.value == 0) {
                row3.parentElement.classList.add("checkColor");
                row4.parentElement.classList.add("checkColor");
            }
            if (row4.value == 0 && row5.value == 0) {
                row3.parentElement.classList.add("checkColor");
                row5.parentElement.classList.add("checkColor");
            }
            if (row5.value == 0 && row6.value == 0) {
                row5.parentElement.classList.add("checkColor");
                row6.parentElement.classList.add("checkColor");
            }
            if (row6.value == 0 && row7.value == 0) {
                row6.parentElement.classList.add("checkColor");
                row7.parentElement.classList.add("checkColor");
            }
            if (row6.value == 0 && row7.value == 0) {
                row6.parentElement.classList.add("checkColor");
                row7.parentElement.classList.add("checkColor");
            }
            if (row6.value == 0 && row7.value == 0) {
                row6.parentElement.classList.add("checkColor");
                row7.parentElement.classList.add("checkColor");
            }
            if (row6.value == 0 && row7.value == 0) {
                row6.parentElement.classList.add("checkColor");
                row7.parentElement.classList.add("checkColor");
            }
            if (row6.value == 0 && row7.value == 0) {
                row6.parentElement.classList.add("checkColor");
                row7.parentElement.classList.add("checkColor");
            }
            if (row8.value == 0 && row9.value == 0) {
                row8.parentElement.classList.add("checkColor");
                row9.parentElement.classList.add("checkColor");
            }
            if (row9.value == 0 && row10.value == 0) {
                row9.parentElement.classList.add("checkColor");
                row10.parentElement.classList.add("checkColor");
            }
            if (row10.value == 0 && row11.value == 0) {
                row11.parentElement.classList.add("checkColor");
                row10.parentElement.classList.add("checkColor");
            }
            if (row11.value == 0 && row12.value == 0) {
                row11.parentElement.classList.add("checkColor");
                row12.parentElement.classList.add("checkColor");
            }
            if (row12.value == 0 && row13.value == 0) {
                row13.parentElement.classList.add("checkColor");
                row12.parentElement.classList.add("checkColor");
            }
            if (row13.value == 0 && row14.value == 0) {
                row13.parentElement.classList.add("checkColor");
                row14.parentElement.classList.add("checkColor");
            }
            if (row15.value == 0 && row16.value == 0) {
                row15.parentElement.classList.add("checkColor");
                row16.parentElement.classList.add("checkColor");
            }
            if (row16.value == 0 && row17.value == 0) {
                row17.parentElement.classList.add("checkColor");
                row16.parentElement.classList.add("checkColor");
            }
            if (row17.value == 0 && row18.value == 0) {
                row17.parentElement.classList.add("checkColor");
                row18.parentElement.classList.add("checkColor");
            }
            if (row18.value == 0 && row19.value == 0) {
                row19.parentElement.classList.add("checkColor");
                row18.parentElement.classList.add("checkColor");
            }
            if (row19.value == 0 && row20.value == 0) {
                row19.parentElement.classList.add("checkColor");
                row20.parentElement.classList.add("checkColor");
            }
            if (row20.value == 0 && row21.value == 0) {
                row21.parentElement.classList.add("checkColor");
                row20.parentElement.classList.add("checkColor");
            }
            if (row21.value == 0 && row22.value == 0) {
                row21.parentElement.classList.add("checkColor");
                row22.parentElement.classList.add("checkColor");
            }
            if (row23.value == 0 && row24.value == 0) {
                row23.parentElement.classList.add("checkColor");
                row24.parentElement.classList.add("checkColor");
            }
            if (row24.value == 0 && row25.value == 0) {
                row25.parentElement.classList.add("checkColor");
                row24.parentElement.classList.add("checkColor");
            }
            if (row25.value == 0 && row26.value == 0) {
                row25.parentElement.classList.add("checkColor");
                row26.parentElement.classList.add("checkColor");
            }
            if (row26.value == 0 && row27.value == 0) {
                row26.parentElement.classList.add("checkColor");
                row27.parentElement.classList.add("checkColor");
            }
            if (row27.value == 0 && row28.value == 0) {
                row27.parentElement.classList.add("checkColor");
                row28.parentElement.classList.add("checkColor");
            }
            if (row28.value == 0 && row29.value == 0) {
                row28.parentElement.classList.add("checkColor");
                row29.parentElement.classList.add("checkColor");
            }
            if (row29.value == 0 && row30.value == 0) {
                row29.parentElement.classList.add("checkColor");
                row30.parentElement.classList.add("checkColor");
            }
            if (row31.value == 0 && row32.value == 0) {
                row31.parentElement.classList.add("checkColor");
                row32.parentElement.classList.add("checkColor");
            }
            if (row32.value == 0 && row33.value == 0) {
                row33.parentElement.classList.add("checkColor");
                row32.parentElement.classList.add("checkColor");
            }
            if (row33.value == 0 && row34.value == 0) {
                row33.parentElement.classList.add("checkColor");
                row34.parentElement.classList.add("checkColor");
            }
            if (row34.value == 0 && row35.value == 0) {
                row34.parentElement.classList.add("checkColor");
                row35.parentElement.classList.add("checkColor");
            }
            if (row35.value == 0 && row36.value == 0) {
                row35.parentElement.classList.add("checkColor");
                row36.parentElement.classList.add("checkColor");
            }
            if (row36.value == 0 && row37.value == 0) {
                row37.parentElement.classList.add("checkColor");
                row36.parentElement.classList.add("checkColor");
            }
            if (row37.value == 0 && row38.value == 0) {
                row37.parentElement.classList.add("checkColor");
                row38.parentElement.classList.add("checkColor");
            }
            if (row38.value == 0 && row39.value == 0) {
                row38.parentElement.classList.add("checkColor");
                row39.parentElement.classList.add("checkColor");
            }

            if (row40.value == 0 && row41.value == 0) {
                row40.parentElement.classList.add("checkColor");
                row41.parentElement.classList.add("checkColor");
            }
            if (row41.value == 0 && row42.value == 0) {
                row42.parentElement.classList.add("checkColor");
                row41.parentElement.classList.add("checkColor");
            }
            if (row42.value == 0 && row43.value == 0) {
                row42.parentElement.classList.add("checkColor");
                row43.parentElement.classList.add("checkColor");
            }
            if (row43.value == 0 && row44.value == 0) {
                row44.parentElement.classList.add("checkColor");
                row43.parentElement.classList.add("checkColor");
            }
            if (row44.value == 0 && row45.value == 0) {
                row44.parentElement.classList.add("checkColor");
                row45.parentElement.classList.add("checkColor");
            }
            if (row45.value == 0 && row46.value == 0) {
                row45.parentElement.classList.add("checkColor");
                row46.parentElement.classList.add("checkColor");
            }
            if (row46.value == 0 && row47.value == 0) {
                row46.parentElement.classList.add("checkColor");
                row47.parentElement.classList.add("checkColor");
            }
            if (row47.value == 0 && row48.value == 0) {
                row47.parentElement.classList.add("checkColor");
                row48.parentElement.classList.add("checkColor");
            }
            if (row48.value == 0 && row49.value == 0) {
                row48.parentElement.classList.add("checkColor");
                row49.parentElement.classList.add("checkColor");
            }

            if (row50.value == 0 && row51.value == 0) {
                row50.parentElement.classList.add("checkColor");
                row51.parentElement.classList.add("checkColor");
            }

            if (row51.value == 0 && row52.value == 0) {
                row52.parentElement.classList.add("checkColor");
                row51.parentElement.classList.add("checkColor");
            }
            if (row52.value == 0 && row53.value == 0) {
                row52.parentElement.classList.add("checkColor");
                row53.parentElement.classList.add("checkColor");
            }
            if (row53.value == 0 && row54.value == 0) {
                row53.parentElement.classList.add("checkColor");
                row54.parentElement.classList.add("checkColor");
            }
            if (row54.value == 0 && row55.value == 0) {
                row54.parentElement.classList.add("checkColor");
                row55.parentElement.classList.add("checkColor");
            }
            if (row55.value == 0 && row56.value == 0) {
                row55.parentElement.classList.add("checkColor");
                row56.parentElement.classList.add("checkColor");
            }
            if (row56.value == 0 && row57.value == 0) {
                row56.parentElement.classList.add("checkColor");
                row57.parentElement.classList.add("checkColor");
            }
            if (row57.value == 0 && row58.value == 0) {
                row57.parentElement.classList.add("checkColor");
                row58.parentElement.classList.add("checkColor");
            }
            if (row58.value == 0 && row59.value == 0) {
                row58.parentElement.classList.add("checkColor");
                row59.parentElement.classList.add("checkColor");
            }


        } else {
            row1.parentElement.classList.remove("checkColor");
            row2.parentElement.classList.remove("checkColor");
            row3.parentElement.classList.remove("checkColor");
            row4.parentElement.classList.remove("checkColor");
            row5.parentElement.classList.remove("checkColor");
            row6.parentElement.classList.remove("checkColor");
            row7.parentElement.classList.remove("checkColor");


            row8.parentElement.classList.remove("checkColor");
            row9.parentElement.classList.remove("checkColor");
            row10.parentElement.classList.remove("checkColor");
            row11.parentElement.classList.remove("checkColor");
            row12.parentElement.classList.remove("checkColor");
            row13.parentElement.classList.remove("checkColor");
            row14.parentElement.classList.remove("checkColor");


            row15.parentElement.classList.remove("checkColor");
            row16.parentElement.classList.remove("checkColor");
            row17.parentElement.classList.remove("checkColor");
            row18.parentElement.classList.remove("checkColor");
            row19.parentElement.classList.remove("checkColor");
            row20.parentElement.classList.remove("checkColor");
            row21.parentElement.classList.remove("checkColor");
            row22.parentElement.classList.remove("checkColor");

            row23.parentElement.classList.remove("checkColor");
            row24.parentElement.classList.remove("checkColor");
            row24.parentElement.classList.remove("checkColor");
            row25.parentElement.classList.remove("checkColor");
            row26.parentElement.classList.remove("checkColor");
            row27.parentElement.classList.remove("checkColor");
            row28.parentElement.classList.remove("checkColor");
            row29.parentElement.classList.remove("checkColor");
            row30.parentElement.classList.remove("checkColor");

            row31.parentElement.classList.remove("checkColor");
            row32.parentElement.classList.remove("checkColor");
            row33.parentElement.classList.remove("checkColor");
            row34.parentElement.classList.remove("checkColor");
            row35.parentElement.classList.remove("checkColor");
            row36.parentElement.classList.remove("checkColor");
            row37.parentElement.classList.remove("checkColor");
            row38.parentElement.classList.remove("checkColor");
            row39.parentElement.classList.remove("checkColor");

            row40.parentElement.classList.remove("checkColor");
            row41.parentElement.classList.remove("checkColor");
            row42.parentElement.classList.remove("checkColor");
            row43.parentElement.classList.remove("checkColor");
            row44.parentElement.classList.remove("checkColor");
            row45.parentElement.classList.remove("checkColor");
            row46.parentElement.classList.remove("checkColor");
            row47.parentElement.classList.remove("checkColor");
            row48.parentElement.classList.remove("checkColor");
            row49.parentElement.classList.remove("checkColor");

            row50.parentElement.classList.remove("checkColor");
            row51.parentElement.classList.remove("checkColor");
            row52.parentElement.classList.remove("checkColor");
            row53.parentElement.classList.remove("checkColor");
            row54.parentElement.classList.remove("checkColor");
            row55.parentElement.classList.remove("checkColor");
            row56.parentElement.classList.remove("checkColor");
            row57.parentElement.classList.remove("checkColor");
            row58.parentElement.classList.remove("checkColor");
            row59.parentElement.classList.remove("checkColor");


            if (check.checked && check.name == "three") {


                if (row1.value == 0 && row2.value == 0 && row3.value == 0) {
                    row1.parentElement.classList.add("checkColor");
                    row2.parentElement.classList.add("checkColor");
                    row3.parentElement.classList.add("checkColor");
                }
                if (row2.value == 0 && row3.value == 0 && row4.value == 0) {
                    row2.parentElement.classList.add("checkColor");
                    row3.parentElement.classList.add("checkColor");
                    row4.parentElement.classList.add("checkColor");
                }
                if (row3.value == 0 && row4.value == 0 && row5.value == 0) {
                    row3.parentElement.classList.add("checkColor");
                    row4.parentElement.classList.add("checkColor");
                    row5.parentElement.classList.add("checkColor");
                }
                if (row4.value == 0 && row5.value == 0 && row6.value == 0) {
                    row3.parentElement.classList.add("checkColor");
                    row5.parentElement.classList.add("checkColor");
                    row6.parentElement.classList.add("checkColor");
                }
                if (row5.value == 0 && row6.value == 0 && row7.value == 0) {
                    row5.parentElement.classList.add("checkColor");
                    row6.parentElement.classList.add("checkColor");
                    row7.parentElement.classList.add("checkColor");
                }

                if (row8.value == 0 && row9.value == 0 && row10.value == 0) {
                    row8.parentElement.classList.add("checkColor");
                    row9.parentElement.classList.add("checkColor");
                    row10.parentElement.classList.add("checkColor");
                }
                if (row9.value == 0 && row10.value == 0 && row11.value == 0) {
                    row9.parentElement.classList.add("checkColor");
                    row10.parentElement.classList.add("checkColor");
                    row11.parentElement.classList.add("checkColor");
                }
                if (row10.value == 0 && row11.value == 0 && row12.value == 0) {
                    row10.parentElement.classList.add("checkColor");
                    row11.parentElement.classList.add("checkColor");
                    row12.parentElement.classList.add("checkColor");
                }
                if (row11.value == 0 && row12.value == 0 && row13.value == 0) {
                    row11.parentElement.classList.add("checkColor");
                    row12.parentElement.classList.add("checkColor");
                    row13.parentElement.classList.add("checkColor");
                }
                if (row12.value == 0 && row13.value == 0 && row14.value == 0) {
                    row12.parentElement.classList.add("checkColor");
                    row13.parentElement.classList.add("checkColor");
                    row14.parentElement.classList.add("checkColor");
                }

                if (row15.value == 0 && row16.value == 0 && row17.value == 0) {
                    row15.parentElement.classList.add("checkColor");
                    row16.parentElement.classList.add("checkColor");
                    row17.parentElement.classList.add("checkColor");
                }
                if (row16.value == 0 && row17.value == 0 && row18.value == 0) {
                    row16.parentElement.classList.add("checkColor");
                    row17.parentElement.classList.add("checkColor");
                    row18.parentElement.classList.add("checkColor");
                }
                if (row17.value == 0 && row18.value == 0 && row19.value == 0) {
                    row17.parentElement.classList.add("checkColor");
                    row18.parentElement.classList.add("checkColor");
                    row19.parentElement.classList.add("checkColor");
                }
                if (row18.value == 0 && row19.value == 0 && row20.value == 0) {
                    row18.parentElement.classList.add("checkColor");
                    row19.parentElement.classList.add("checkColor");
                    row20.parentElement.classList.add("checkColor");
                }
                if (row19.value == 0 && row20.value == 0 && row21.value == 0) {
                    row19.parentElement.classList.add("checkColor");
                    row20.parentElement.classList.add("checkColor");
                    row21.parentElement.classList.add("checkColor");
                }
                if (row20.value == 0 && row21.value == 0 && row22.value == 0) {
                    row20.parentElement.classList.add("checkColor");
                    row21.parentElement.classList.add("checkColor");
                    row22.parentElement.classList.add("checkColor");
                }

                if (row23.value == 0 && row24.value == 0 && row25.value == 0) {
                    row23.parentElement.classList.add("checkColor");
                    row24.parentElement.classList.add("checkColor");
                    row25.parentElement.classList.add("checkColor");
                }
                if (row24.value == 0 && row25.value == 0 && row26.value == 0) {
                    row24.parentElement.classList.add("checkColor");
                    row25.parentElement.classList.add("checkColor");
                    row26.parentElement.classList.add("checkColor");
                }
                if (row25.value == 0 && row26.value == 0 && row27.value == 0) {
                    row25.parentElement.classList.add("checkColor");
                    row26.parentElement.classList.add("checkColor");
                    row27.parentElement.classList.add("checkColor");
                }
                if (row26.value == 0 && row27.value == 0 && row28.value == 0) {
                    row26.parentElement.classList.add("checkColor");
                    row27.parentElement.classList.add("checkColor");
                    row28.parentElement.classList.add("checkColor");
                }
                if (row27.value == 0 && row28.value == 0 && row29.value == 0) {
                    row27.parentElement.classList.add("checkColor");
                    row28.parentElement.classList.add("checkColor");
                    row29.parentElement.classList.add("checkColor");
                }
                if (row28.value == 0 && row29.value == 0 && row30.value == 0) {
                    row28.parentElement.classList.add("checkColor");
                    row29.parentElement.classList.add("checkColor");
                    row30.parentElement.classList.add("checkColor");
                }

                if (row31.value == 0 && row32.value == 0 && row33.value == 0) {
                    row31.parentElement.classList.add("checkColor");
                    row32.parentElement.classList.add("checkColor");
                    row33.parentElement.classList.add("checkColor");
                }
                if (row32.value == 0 && row33.value == 0 && row34.value == 0) {
                    row32.parentElement.classList.add("checkColor");
                    row33.parentElement.classList.add("checkColor");
                    row34.parentElement.classList.add("checkColor");
                }
                if (row33.value == 0 && row34.value == 0 && row35.value == 0) {
                    row33.parentElement.classList.add("checkColor");
                    row34.parentElement.classList.add("checkColor");
                    row35.parentElement.classList.add("checkColor");
                }
                if (row34.value == 0 && row35.value == 0 && row36.value == 0) {
                    row34.parentElement.classList.add("checkColor");
                    row35.parentElement.classList.add("checkColor");
                    row36.parentElement.classList.add("checkColor");
                }
                if (row35.value == 0 && row36.value == 0 && row37.value == 0) {
                    row35.parentElement.classList.add("checkColor");
                    row36.parentElement.classList.add("checkColor");
                    row37.parentElement.classList.add("checkColor");
                }
                if (row36.value == 0 && row37.value == 0 && row38.value == 0) {
                    row36.parentElement.classList.add("checkColor");
                    row37.parentElement.classList.add("checkColor");
                    row38.parentElement.classList.add("checkColor");
                }
                if (row37.value == 0 && row38.value == 0 && row39.value == 0) {
                    row37.parentElement.classList.add("checkColor");
                    row38.parentElement.classList.add("checkColor");
                    row39.parentElement.classList.add("checkColor");
                }


                if (row40.value == 0 && row41.value == 0 && row42.value == 0) {
                    row40.parentElement.classList.add("checkColor");
                    row41.parentElement.classList.add("checkColor");
                    row42.parentElement.classList.add("checkColor");
                }
                if (row41.value == 0 && row42.value == 0 && row43.value == 0) {
                    row41.parentElement.classList.add("checkColor");
                    row42.parentElement.classList.add("checkColor");
                    row43.parentElement.classList.add("checkColor");
                }
                if (row42.value == 0 && row43.value == 0 && row44.value == 0) {
                    row42.parentElement.classList.add("checkColor");
                    row43.parentElement.classList.add("checkColor");
                    row44.parentElement.classList.add("checkColor");
                }
                if (row43.value == 0 && row44.value == 0 && row45.value == 0) {
                    row43.parentElement.classList.add("checkColor");
                    row44.parentElement.classList.add("checkColor");
                    row45.parentElement.classList.add("checkColor");
                }
                if (row44.value == 0 && row45.value == 0 && row46.value == 0) {
                    row44.parentElement.classList.add("checkColor");
                    row45.parentElement.classList.add("checkColor");
                    row46.parentElement.classList.add("checkColor");
                }
                if (row45.value == 0 && row46.value == 0 && row47.value == 0) {
                    row45.parentElement.classList.add("checkColor");
                    row46.parentElement.classList.add("checkColor");
                    row47.parentElement.classList.add("checkColor");
                }
                if (row46.value == 0 && row47.value == 0 && row48.value == 0) {
                    row46.parentElement.classList.add("checkColor");
                    row47.parentElement.classList.add("checkColor");
                    row48.parentElement.classList.add("checkColor");
                }
                if (row47.value == 0 && row48.value == 0 && row49.value == 0) {
                    row47.parentElement.classList.add("checkColor");
                    row48.parentElement.classList.add("checkColor");
                    row49.parentElement.classList.add("checkColor");
                }


                if (row50.value == 0 && row51.value == 0 && row52.value == 0) {
                    row50.parentElement.classList.add("checkColor");
                    row51.parentElement.classList.add("checkColor");
                    row52.parentElement.classList.add("checkColor");
                }

                if (row51.value == 0 && row52.value == 0 && row53.value == 0) {
                    row52.parentElement.classList.add("checkColor");
                    row51.parentElement.classList.add("checkColor");
                    row53.parentElement.classList.add("checkColor");
                }
                if (row52.value == 0 && row53.value == 0 && row54.value == 0) {
                    row52.parentElement.classList.add("checkColor");
                    row53.parentElement.classList.add("checkColor");
                    row54.parentElement.classList.add("checkColor");
                }
                if (row53.value == 0 && row54.value == 0 && row55.value == 0) {
                    row53.parentElement.classList.add("checkColor");
                    row54.parentElement.classList.add("checkColor");
                    row55.parentElement.classList.add("checkColor");
                }
                if (row54.value == 0 && row55.value == 0 && row56.value == 0) {
                    row54.parentElement.classList.add("checkColor");
                    row55.parentElement.classList.add("checkColor");
                    row56.parentElement.classList.add("checkColor");
                }
                if (row55.value == 0 && row56.value == 0 && row57.value == 0) {
                    row55.parentElement.classList.add("checkColor");
                    row56.parentElement.classList.add("checkColor");
                    row57.parentElement.classList.add("checkColor");
                }
                if (row56.value == 0 && row57.value == 0 && row58.value == 0) {
                    row56.parentElement.classList.add("checkColor");
                    row57.parentElement.classList.add("checkColor");
                    row58.parentElement.classList.add("checkColor");
                }
                if (row57.value == 0 && row58.value == 0 && row59.value == 0) {
                    row57.parentElement.classList.add("checkColor");
                    row58.parentElement.classList.add("checkColor");
                    row59.parentElement.classList.add("checkColor");
                }

            } else {
//

                if (check.checked && check.name == "four") {


                    if (row1.value == 0 && row2.value == 0 && row3.value == 0 && row4.value == 0) {
                        row1.parentElement.classList.add("checkColor");
                        row2.parentElement.classList.add("checkColor");
                        row3.parentElement.classList.add("checkColor");
                        row4.parentElement.classList.add("checkColor");
                    }
                    if (row2.value == 0 && row3.value == 0 && row4.value == 0 && row5.value == 0) {
                        row2.parentElement.classList.add("checkColor");
                        row3.parentElement.classList.add("checkColor");
                        row4.parentElement.classList.add("checkColor");
                        row5.parentElement.classList.add("checkColor");
                    }
                    if (row3.value == 0 && row4.value == 0 && row5.value == 0 && row6.value == 0) {
                        row3.parentElement.classList.add("checkColor");
                        row4.parentElement.classList.add("checkColor");
                        row5.parentElement.classList.add("checkColor");
                        row6.parentElement.classList.add("checkColor");
                    }
                    if (row4.value == 0 && row5.value == 0 && row6.value == 0 && row7.value == 0) {
                        row3.parentElement.classList.add("checkColor");
                        row5.parentElement.classList.add("checkColor");
                        row6.parentElement.classList.add("checkColor");
                        row7.parentElement.classList.add("checkColor");
                    }


                    if (row8.value == 0 && row9.value == 0 && row10.value == 0 && row11.value == 0) {
                        row8.parentElement.classList.add("checkColor");
                        row9.parentElement.classList.add("checkColor");
                        row10.parentElement.classList.add("checkColor");
                        row11.parentElement.classList.add("checkColor");
                    }
                    if (row9.value == 0 && row10.value == 0 && row11.value == 0 && row12.value == 0) {
                        row9.parentElement.classList.add("checkColor");
                        row10.parentElement.classList.add("checkColor");
                        row11.parentElement.classList.add("checkColor");
                        row12.parentElement.classList.add("checkColor");
                    }
                    if (row10.value == 0 && row11.value == 0 && row12.value == 0 && row13.value == 0) {
                        row10.parentElement.classList.add("checkColor");
                        row11.parentElement.classList.add("checkColor");
                        row12.parentElement.classList.add("checkColor");
                        row13.parentElement.classList.add("checkColor");
                    }
                    if (row11.value == 0 && row12.value == 0 && row13.value == 0 && row14.value == 0) {
                        row11.parentElement.classList.add("checkColor");
                        row12.parentElement.classList.add("checkColor");
                        row13.parentElement.classList.add("checkColor");
                        row14.parentElement.classList.add("checkColor");
                    }


                    if (row15.value == 0 && row16.value == 0 && row17.value == 0 && row18.value == 0) {
                        row15.parentElement.classList.add("checkColor");
                        row16.parentElement.classList.add("checkColor");
                        row17.parentElement.classList.add("checkColor");
                        row18.parentElement.classList.add("checkColor");
                    }
                    if (row16.value == 0 && row17.value == 0 && row18.value == 0 && row19.value == 0) {
                        row16.parentElement.classList.add("checkColor");
                        row17.parentElement.classList.add("checkColor");
                        row18.parentElement.classList.add("checkColor");
                        row19.parentElement.classList.add("checkColor");
                    }
                    if (row17.value == 0 && row18.value == 0 && row19.value == 0 && row20.value == 0) {
                        row17.parentElement.classList.add("checkColor");
                        row18.parentElement.classList.add("checkColor");
                        row19.parentElement.classList.add("checkColor");
                        row20.parentElement.classList.add("checkColor");
                    }
                    if (row18.value == 0 && row19.value == 0 && row20.value == 0 && row21.value == 0) {
                        row18.parentElement.classList.add("checkColor");
                        row19.parentElement.classList.add("checkColor");
                        row20.parentElement.classList.add("checkColor");
                        row21.parentElement.classList.add("checkColor");
                    }
                    if (row19.value == 0 && row20.value == 0 && row21.value == 0 && row22.value == 0) {
                        row19.parentElement.classList.add("checkColor");
                        row20.parentElement.classList.add("checkColor");
                        row21.parentElement.classList.add("checkColor");
                        row22.parentElement.classList.add("checkColor");
                    }


                    if (row23.value == 0 && row24.value == 0 && row25.value == 0 && row26.value == 0) {
                        row23.parentElement.classList.add("checkColor");
                        row24.parentElement.classList.add("checkColor");
                        row25.parentElement.classList.add("checkColor");
                        row26.parentElement.classList.add("checkColor");
                    }
                    if (row24.value == 0 && row25.value == 0 && row26.value == 0 && row27.value == 0) {
                        row24.parentElement.classList.add("checkColor");
                        row25.parentElement.classList.add("checkColor");
                        row26.parentElement.classList.add("checkColor");
                        row27.parentElement.classList.add("checkColor");
                    }
                    if (row25.value == 0 && row26.value == 0 && row27.value == 0 && row28.value == 0) {
                        row25.parentElement.classList.add("checkColor");
                        row26.parentElement.classList.add("checkColor");
                        row27.parentElement.classList.add("checkColor");
                        row28.parentElement.classList.add("checkColor");
                    }
                    if (row26.value == 0 && row27.value == 0 && row28.value == 0 && row29.value == 0) {
                        row26.parentElement.classList.add("checkColor");
                        row27.parentElement.classList.add("checkColor");
                        row28.parentElement.classList.add("checkColor");
                        row29.parentElement.classList.add("checkColor");
                    }
                    if (row27.value == 0 && row28.value == 0 && row29.value == 0 && row30.value == 0) {
                        row27.parentElement.classList.add("checkColor");
                        row28.parentElement.classList.add("checkColor");
                        row29.parentElement.classList.add("checkColor");
                        row30.parentElement.classList.add("checkColor");
                    }


                    if (row31.value == 0 && row32.value == 0 && row33.value == 0 && row34.value == 0) {
                        row31.parentElement.classList.add("checkColor");
                        row32.parentElement.classList.add("checkColor");
                        row33.parentElement.classList.add("checkColor");
                        row34.parentElement.classList.add("checkColor");
                    }
                    if (row32.value == 0 && row33.value == 0 && row34.value == 0 && row35.value == 0) {
                        row32.parentElement.classList.add("checkColor");
                        row33.parentElement.classList.add("checkColor");
                        row34.parentElement.classList.add("checkColor");
                        row35.parentElement.classList.add("checkColor");
                    }
                    if (row33.value == 0 && row34.value == 0 && row35.value == 0 && row36.value == 0) {
                        row33.parentElement.classList.add("checkColor");
                        row34.parentElement.classList.add("checkColor");
                        row35.parentElement.classList.add("checkColor");
                        row36.parentElement.classList.add("checkColor");
                    }
                    if (row34.value == 0 && row35.value == 0 && row36.value == 0 && row37.value == 0) {
                        row34.parentElement.classList.add("checkColor");
                        row35.parentElement.classList.add("checkColor");
                        row36.parentElement.classList.add("checkColor");
                        row37.parentElement.classList.add("checkColor");
                    }
                    if (row35.value == 0 && row36.value == 0 && row37.value == 0 && row38.value == 0) {
                        row35.parentElement.classList.add("checkColor");
                        row36.parentElement.classList.add("checkColor");
                        row37.parentElement.classList.add("checkColor");
                        row38.parentElement.classList.add("checkColor");
                    }
                    if (row36.value == 0 && row37.value == 0 && row38.value == 0 && row39.value == 0) {
                        row36.parentElement.classList.add("checkColor");
                        row37.parentElement.classList.add("checkColor");
                        row38.parentElement.classList.add("checkColor");
                        row39.parentElement.classList.add("checkColor");
                    }


                    if (row40.value == 0 && row41.value == 0 && row42.value == 0 && row43.value == 0) {
                        row40.parentElement.classList.add("checkColor");
                        row41.parentElement.classList.add("checkColor");
                        row42.parentElement.classList.add("checkColor");
                        row43.parentElement.classList.add("checkColor");
                    }
                    if (row41.value == 0 && row42.value == 0 && row43.value == 0 && row44.value == 0) {
                        row41.parentElement.classList.add("checkColor");
                        row42.parentElement.classList.add("checkColor");
                        row43.parentElement.classList.add("checkColor");
                        row44.parentElement.classList.add("checkColor");
                    }
                    if (row42.value == 0 && row43.value == 0 && row44.value == 0 && row45.value == 0) {
                        row42.parentElement.classList.add("checkColor");
                        row43.parentElement.classList.add("checkColor");
                        row44.parentElement.classList.add("checkColor");
                        row45.parentElement.classList.add("checkColor");
                    }
                    if (row43.value == 0 && row44.value == 0 && row45.value == 0 && row46.value == 0) {
                        row43.parentElement.classList.add("checkColor");
                        row44.parentElement.classList.add("checkColor");
                        row45.parentElement.classList.add("checkColor");
                        row46.parentElement.classList.add("checkColor");
                    }
                    if (row44.value == 0 && row45.value == 0 && row46.value == 0 && row47.value == 0) {
                        row44.parentElement.classList.add("checkColor");
                        row45.parentElement.classList.add("checkColor");
                        row46.parentElement.classList.add("checkColor");
                        row47.parentElement.classList.add("checkColor");
                    }
                    if (row45.value == 0 && row46.value == 0 && row47.value == 0 && row48.value == 0) {
                        row45.parentElement.classList.add("checkColor");
                        row46.parentElement.classList.add("checkColor");
                        row47.parentElement.classList.add("checkColor");
                        row48.parentElement.classList.add("checkColor");
                    }
                    if (row46.value == 0 && row47.value == 0 && row48.value == 0 && row49.value == 0) {
                        row46.parentElement.classList.add("checkColor");
                        row47.parentElement.classList.add("checkColor");
                        row48.parentElement.classList.add("checkColor");
                        row49.parentElement.classList.add("checkColor");
                    }
                    if (row50.value == 0 && row51.value == 0 && row52.value == 0 && row53.value == 0) {
                        row50.parentElement.classList.add("checkColor");
                        row51.parentElement.classList.add("checkColor");
                        row52.parentElement.classList.add("checkColor");
                        row53.parentElement.classList.add("checkColor");
                    }


                    if (row51.value == 0 && row52.value == 0 && row53.value == 0 && row54.value == 0) {
                        row51.parentElement.classList.add("checkColor");
                        row52.parentElement.classList.add("checkColor");
                        row53.parentElement.classList.add("checkColor");
                        row54.parentElement.classList.add("checkColor");
                    }

                    if (row52.value == 0 && row53.value == 0 && row54.value == 0 && row55.value == 0) {
                        row52.parentElement.classList.add("checkColor");
                        row53.parentElement.classList.add("checkColor");
                        row54.parentElement.classList.add("checkColor");
                        row55.parentElement.classList.add("checkColor");
                    }
                    if (row53.value == 0 && row54.value == 0 && row55.value == 0 && row56.value == 0) {
                        row53.parentElement.classList.add("checkColor");
                        row54.parentElement.classList.add("checkColor");
                        row55.parentElement.classList.add("checkColor");
                        row56.parentElement.classList.add("checkColor");
                    }
                    if (row54.value == 0 && row55.value == 0 && row56.value == 0 && row57.value == 0) {
                        row54.parentElement.classList.add("checkColor");
                        row55.parentElement.classList.add("checkColor");
                        row56.parentElement.classList.add("checkColor");
                        row57.parentElement.classList.add("checkColor");
                    }
                    if (row55.value == 0 && row56.value == 0 && row57.value == 0 && row58.value == 0) {
                        row55.parentElement.classList.add("checkColor");
                        row56.parentElement.classList.add("checkColor");
                        row57.parentElement.classList.add("checkColor");
                        row58.parentElement.classList.add("checkColor");
                    }
                    if (row56.value == 0 && row57.value == 0 && row58.value == 0 && row59.value == 0) {
                        row56.parentElement.classList.add("checkColor");
                        row57.parentElement.classList.add("checkColor");
                        row58.parentElement.classList.add("checkColor");
                        row59.parentElement.classList.add("checkColor");
                    }

                } else {
                    row1.classList.remove("checkColor");
                    row2.classList.remove("checkColor");
                    row3.classList.remove("checkColor");
                    row4.classList.remove("checkColor");
                    row5.classList.remove("checkColor");
                    row6.classList.remove("checkColor");
                    row7.classList.remove("checkColor");


                    row8.classList.remove("checkColor");
                    row9.classList.remove("checkColor");
                    row10.classList.remove("checkColor");
                    row11.classList.remove("checkColor");
                    row12.classList.remove("checkColor");
                    row13.classList.remove("checkColor");
                    row14.classList.remove("checkColor");


                    row15.classList.remove("checkColor");
                    row16.classList.remove("checkColor");
                    row17.classList.remove("checkColor");
                    row18.classList.remove("checkColor");
                    row19.classList.remove("checkColor");
                    row20.classList.remove("checkColor");
                    row21.classList.remove("checkColor");
                    row22.classList.remove("checkColor");

                    row23.classList.remove("checkColor");
                    row24.classList.remove("checkColor");
                    row24.classList.remove("checkColor");
                    row25.classList.remove("checkColor");
                    row26.classList.remove("checkColor");
                    row27.classList.remove("checkColor");
                    row28.classList.remove("checkColor");
                    row29.classList.remove("checkColor");
                    row30.classList.remove("checkColor");

                    row31.classList.remove("checkColor");
                    row32.classList.remove("checkColor");
                    row33.classList.remove("checkColor");
                    row34.classList.remove("checkColor");
                    row35.classList.remove("checkColor");
                    row36.classList.remove("checkColor");
                    row37.classList.remove("checkColor");
                    row38.classList.remove("checkColor");
                    row39.classList.remove("checkColor");

                    row40.classList.remove("checkColor");
                    row41.classList.remove("checkColor");
                    row42.classList.remove("checkColor");
                    row43.classList.remove("checkColor");
                    row44.classList.remove("checkColor");
                    row45.classList.remove("checkColor");
                    row46.classList.remove("checkColor");
                    row47.classList.remove("checkColor");
                    row48.classList.remove("checkColor");
                    row49.classList.remove("checkColor");

                    row50.classList.remove("checkColor");
                    row51.classList.remove("checkColor");
                    row52.classList.remove("checkColor");
                    row53.classList.remove("checkColor");
                    row54.classList.remove("checkColor");
                    row55.classList.remove("checkColor");
                    row56.classList.remove("checkColor");
                    row57.classList.remove("checkColor");
                    row58.classList.remove("checkColor");
                    row59.classList.remove("checkColor");


                }

            }


        }


    }
)


function ajaxWriteDB() {
    var data_user = $("form").serialize();
    $.ajax({
        url: 'model/app.php',
        type: 'POST',
        data: data_user,
        success: function (data) {
        }
    });

    // var rowParams = 'userAdmin=' + userAdmin.value + '&' +'row1=' + row1.value + '&' + 'row2=' + row2.value + '&' + 'row3=' + row3.value + '&' + 'row4=' + row4.value + '&' + 'row5=' + row5.value + '&' + 'row6=' + row6.value + '&' + 'row7=' + row7.value + '&' + 'row8=' + row8.value + '&' + 'row9=' + row9.value + '&' + 'row10=' + row10.value + '&' + 'row11=' + row11.value + '&' + 'row12=' + row12.value + '&' + 'row13=' + row13.value + '&' + 'row14=' + row14.value + '&' + 'row15=' + row15.value + '&' + 'row16=' + row16.value + '&' + 'row17=' + row17.value + '&' + 'row18=' + row18.value + '&' + 'row19=' + row19.value + '&' + 'row20=' + row20.value + '&' + 'row21=' + row21.value + '&' + 'row22=' + row22.value + '&' + 'row23=' + row23.value + '&' + 'row24=' + row24.value + '&' + 'row25=' + row25.value + '&' + 'row26=' + row26.value + '&' + 'row27=' + row27.value + '&' + 'row28=' + row28.value + '&' + 'row29=' + row29.value + '&' + 'row30=' + row30.value + '&' + 'row31=' + row31.value + '&' + 'row32=' + row32.value + '&' + 'row33=' + row33.value + '&' + 'row34=' + row34.value + '&' + 'row35=' + row35.value + '&' + 'row36=' + row36.value + '&' + 'row37=' + row37.value + '&' + 'row38=' + row38.value + '&' + 'row39=' + row39.value + '&' + 'row40=' + row40.value + '&' + 'row41=' + row41.value + '&' + 'row42=' + row42.value + '&' + 'row43=' + row43.value + '&' + 'row44=' + row44.value + '&' + 'row45=' + row45.value + '&' + 'row46=' + row46.value + '&' + 'row47=' + row47.value + '&' + 'row48=' + row48.value + '&' + 'row49=' + row49.value + '&' + 'row50=' + row50.value + '&' + 'row51=' + row51.value + '&' + 'row52=' + row52.value + '&' + 'row53=' + row53.value + '&' + 'row54=' + row54.value + '&' + 'row55=' + row55.value + '&' + 'row56=' + row56.value + '&' + 'row57=' + row57.value + '&' + 'row58=' + row58.value + '&' + 'row59=' + row59.value;
    // ajaxPost(rowParams);
}


function ajaxWaitingDB() {
    var data_user = $("form").serialize();
    $.ajax({
        url: 'model/waiting.php',
        type: 'POST',
        data: data_user,
        success: function (data) {
        }
    });

    // var rowParams = 'userAdmin=' + userAdmin.value + '&' +'row1=' + row1.value + '&' + 'row2=' + row2.value + '&' + 'row3=' + row3.value + '&' + 'row4=' + row4.value + '&' + 'row5=' + row5.value + '&' + 'row6=' + row6.value + '&' + 'row7=' + row7.value + '&' + 'row8=' + row8.value + '&' + 'row9=' + row9.value + '&' + 'row10=' + row10.value + '&' + 'row11=' + row11.value + '&' + 'row12=' + row12.value + '&' + 'row13=' + row13.value + '&' + 'row14=' + row14.value + '&' + 'row15=' + row15.value + '&' + 'row16=' + row16.value + '&' + 'row17=' + row17.value + '&' + 'row18=' + row18.value + '&' + 'row19=' + row19.value + '&' + 'row20=' + row20.value + '&' + 'row21=' + row21.value + '&' + 'row22=' + row22.value + '&' + 'row23=' + row23.value + '&' + 'row24=' + row24.value + '&' + 'row25=' + row25.value + '&' + 'row26=' + row26.value + '&' + 'row27=' + row27.value + '&' + 'row28=' + row28.value + '&' + 'row29=' + row29.value + '&' + 'row30=' + row30.value + '&' + 'row31=' + row31.value + '&' + 'row32=' + row32.value + '&' + 'row33=' + row33.value + '&' + 'row34=' + row34.value + '&' + 'row35=' + row35.value + '&' + 'row36=' + row36.value + '&' + 'row37=' + row37.value + '&' + 'row38=' + row38.value + '&' + 'row39=' + row39.value + '&' + 'row40=' + row40.value + '&' + 'row41=' + row41.value + '&' + 'row42=' + row42.value + '&' + 'row43=' + row43.value + '&' + 'row44=' + row44.value + '&' + 'row45=' + row45.value + '&' + 'row46=' + row46.value + '&' + 'row47=' + row47.value + '&' + 'row48=' + row48.value + '&' + 'row49=' + row49.value + '&' + 'row50=' + row50.value + '&' + 'row51=' + row51.value + '&' + 'row52=' + row52.value + '&' + 'row53=' + row53.value + '&' + 'row54=' + row54.value + '&' + 'row55=' + row55.value + '&' + 'row56=' + row56.value + '&' + 'row57=' + row57.value + '&' + 'row58=' + row58.value + '&' + 'row59=' + row59.value;
    // ajaxPost(rowParams);
}


function ajaxWriteDBuserMany() {
    var userAdmin = document.querySelector(".userAdmin");
    var priceAdmin = document.querySelector(".priceAdmin");
    var userMany = 'userAdmin=' + userAdmin.value + '&' + 'priceAdmin=' + priceAdmin.value;
    ajaxPostuserMany(userMany);
}


}


cinema_time = document.querySelector('.cinema_time');

setInterval(function () {
    CinemaDate = new Date();
    CinemaDate.setHours(23);
    CinemaDate.setMinutes(00);
    CinemaDate.setSeconds(0);
    todayDate = new Date();

    if (todayDate > CinemaDate)
        if (cinema_time.classList.contains('cinema_time_show')) {

        } else {
            cinema_time.classList.toggle('cinema_time_show')
        }

}, 1000)


// function ajaxPost(rowParams) {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function () {
//         if (request.readyState == 4) {
//             document.querySelector('#resault').innerHTML=request.responseText;
//
//             var xxx = document.querySelector('#resault').innerText=request.responseText;
//         console.log(xxx);
//             var data = JSON.parse( xxx);
//
//             // console.log(data['row1']);
//             // var row1q = document.getElementById("row1").innerText=data['row1'];
//             // document.getElementById("resault_row1").innerText=data['row1'];
//
//         }
//     }
//     request.open('POST', '../model/app.php');
//     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     request.send(rowParams);
// }


function ajaxPostuserMany(userMany) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            // document.querySelector('#resault').innerHTML=request.responseText;
            //
            // var xxx = document.querySelector('#resault').innerText=request.responseText;
            //
            // var data = JSON.parse( xxx);
            //
            // // console.log(data['row1']);
            // var row1q = document.getElementById("row1").innerText=data['row1'];
            // document.getElementById("resault_row1").innerText=data['row1'];

        }
    }
    request.open('POST', 'model/userMany.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(userMany);
}


var modal = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}

var modal = document.getElementById('id02');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}

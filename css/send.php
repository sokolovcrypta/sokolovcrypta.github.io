<?php
$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
mail('info@cordobabitcoin.com', "Заявка с сайта http://congresoblockchain.com/",$email);
?>
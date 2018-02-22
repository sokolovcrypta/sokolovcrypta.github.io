<?php
$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
mail($email, "Заявка с сайта http://congresoblockchain.com/",$email);
?>
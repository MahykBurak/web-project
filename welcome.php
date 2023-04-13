<?php

$producer = "producer";
$producer_password = 1234;
$consumer = "consumer";
$consumer_password = 4567;

/*if ($_POST['username'] != "yaren" || $_POST['password'] != 1234) {
    echo "Please check your username or password.";
} else {
    /*echo  " <br> Password: " . $_POST['password'];
    echo  " <br> Username: " . $_POST['username'];
    header('Location: x.html');
}*/

if ($_POST['username'] == $producer && $_POST['password'] == $producer_password) {
    header('Location: x.html');
} else if ($_POST['username'] == $consumer && $_POST['password'] == $consumer_password) {
    header('Location: x.html');
} else {
    echo "Please check your username or password.";
}

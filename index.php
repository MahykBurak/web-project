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
    echo "<script>window.localStorage.setItem('mode', 'producer');</script>";
    echo "<script>window.location.href = 'app.html';</script>";
} else if ($_POST['username'] == $consumer && $_POST['password'] == $consumer_password) {
    echo "<script>window.localStorage.setItem('mode', 'consumer');</script>";
    echo "<script>window.location.href = 'app.html';</script>";
} else {
    echo "Please check your username or password.";
}

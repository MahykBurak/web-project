<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />
  <link href="index.css" rel="stylesheet" />
</head>

<body>
  <h1>Welcome...</h1>

  <h2>Please enter your username and password.</h2>

  <form action="index.php" method="post">
    <input type="text" name="username" placeholder="Username" class="input_class" required /><br />
    <input type="password" name="password" placeholder="Password" class="input_class" required /><br />
    <input type="submit" value="Login" class="button" />
  </form>
</body>

</html>

<?php

$producer = "producer";
$producer_password = 1234;
$consumer = "consumer";
$consumer_password = 4567;

echo "<script>window.localStorage.setItem('auth', 'false');</script>";

if ($_POST['username'] == $producer && $_POST['password'] == $producer_password) {
  echo "<script>window.localStorage.setItem('mode', 'producer');</script>";
  echo "<script>window.localStorage.setItem('auth', 'true');</script>";
  echo "<script>window.location.href = 'producer.html';</script>";
  exit();
} else if ($_POST['username'] == $consumer && $_POST['password'] == $consumer_password) {
  echo "<script>window.localStorage.setItem('mode', 'consumer');</script>";
  echo "<script>window.localStorage.setItem('auth', 'true');</script>";
  echo "<script>window.location.href = 'app.html';</script>";
  exit();
} else if ($_POST['username'] != "" && $_POST['password'] != "") {
  echo "<script>alert('Kullanıcı bilgilerinizi yanlış girdiniz');</script>";
  echo "<script>document.getElementsByName('username')[0].value = '';</script>";
  echo "<script>document.getElementsByName('password')[0].value = '';</script>";
  exit();
}
?>
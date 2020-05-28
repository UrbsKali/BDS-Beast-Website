<?php
$pass_sentance = $_POST['pass'];
$pass_sentance = sha1($pass_sentance);
if ($pass_sentance == "7e640cb06f337d5be2e21bb7c649149d668065c7"){
    header('Location: ./location.html');
}
else {
    header('Location: ./Budget.html');
}
?>
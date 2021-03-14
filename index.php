<?php
switch ($_SERVER['REQUEST_URI']) {
    case '/':
        include_once('./index.html');
        break;
    case '/mail':
        include_once('./mailer/mailer.php');
        break;
}

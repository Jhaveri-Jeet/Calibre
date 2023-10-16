<?php

if (!isset($_SESSION['LoggedInUserId']) || $_SESSION['UserType'] !== 'admin')
{
    header('Location: ' . urlOf(''));
    exit();
}

?>
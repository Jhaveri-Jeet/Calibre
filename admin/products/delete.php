<?php

require("../../includes/init.php");
require(pathOf('admin/includes/auth.php'));

if (!isset($_GET['id']))
{
    header('Location: ' . urlOf('admin/products'));
    exit();
}

$id = $_GET['id'];
$row = selectOne("SELECT * FROM `Products` WHERE `Id` = ?", [$id]);

unlink(pathOf("assets/uploads/product-images/{$row['ImageName']}"));
execute("DELETE FROM `Products` WHERE `Id` = ?", [$id]);

header('Location: ' . urlOf('admin/products'));

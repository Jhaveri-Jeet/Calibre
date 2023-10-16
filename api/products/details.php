<?php

require('../../includes/init.php');

if (!isset($_GET['id']))
{
    http_response_code(400);
    exit();
}

$product = selectOne("SELECT `Name`, `Description` FROM `Products` WHERE `Id` = ?", [$_GET['id']]);
$tags = select("SELECT `TagName` FROM `Tags` WHERE `ProductId`  = ?", [$_GET['id']]);


if (!$product)
{
    http_response_code(404);
    exit();
}

echo json_encode(["name" => $product['Name'], "description" => $product['Description'], "tags" => $tags]);

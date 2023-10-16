<?php

define("BASE_DIR", $_SERVER['DOCUMENT_ROOT'] . "/calibre");

define("BASE_URL", "/calibre");

// define("BASE_DIR", $_SERVER['DOCUMENT_ROOT'] . "");
// define("BASE_URL", "");

date_default_timezone_set('Asia/Kolkata');

$connection = new PDO("mysql:host=localhost;port=3306;dbname=Calibre", "root", "");

if(!function_exists('str_starts_with')) {
    function str_starts_with($haystack, $needle) {
        $length = strlen( $needle );
        return substr( $haystack, 0, $length ) === $needle;
    }
}

function pathOf($path)
{
    return BASE_DIR . "/" . $path;
}

function urlOf($path)
{
    return BASE_URL . '/' . $path;
}
function uriIs($string)
{
    return $_SERVER['SCRIPT_NAME'] == $string;
}

function uriIsOneOf($strings)
{
    foreach ($strings as $string) {
        if (uriIs($string)) {
            return true;
        }
    }
}

function uriStartsWith($string)
{
    return str_starts_with($_SERVER['SCRIPT_NAME'], $string);
}
function execute($query, $params = null)
{
    global $connection;
    
    $statement = $connection->prepare($query);
    return $statement->execute($params);
}

function selectOne($query, $params = null)
{
    global $connection;

    $statement = $connection->prepare($query);
    $statement->execute($params);

    $row = $statement->fetch(PDO::FETCH_ASSOC);
    return $row;
}

function select($query, $params = null)
{
    global $connection;

    $statement = $connection->prepare($query);
    $statement->execute($params);

    $rows = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $rows;
}

function lastInsertId()
{
    global $connection;
    return $connection->lastInsertId();
}

function getLastError()
{
    global $connection;
    return $connection->errorInfo();
}

session_start();

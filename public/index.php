<?php

require_once __DIR__."/../vendor/autoload.php";

use App\Router\Router;
use Zend\Diactoros\ServerRequestFactory;
use Symfony\Component\Dotenv\Dotenv;

$dotenv = new Dotenv();
$dotenv->load(__DIR__.'/../.env', __DIR__.'/../.env.local');

/*var_dump($_ENV['DB_USER']);
var_dump($_ENV['DB_PASS']);
return;
*/


$request = ServerRequestFactory::fromGlobals();

$router = new Router($request);

$router->loadYaml(__DIR__."/../config/routing.yml");

try {
    $route = $router->getRouteByRequest();

    $response = $route->call($request);

} catch (\Exception $e) {
}
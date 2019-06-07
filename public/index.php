<?php

require_once __DIR__."/../vendor/autoload.php";

use App\Router\Router;
use Zend\Diactoros\ServerRequestFactory;

$request = ServerRequestFactory::fromGlobals();

$router = new Router($request);

$router->loadYaml(__DIR__."/../config/routing.yml");

try {
    $route = $router->getRouteByRequest();

    $response = $route->call($request);

} catch (\Exception $e) {
}
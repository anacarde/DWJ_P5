<?php

require_once __DIR__."/../vendor/autoload.php";

use App\Router\Router;
use Src\Model\Manager;
use Src\Model\ChaptersManager;
use Src\Controller\Controller;
use Zend\Diactoros\ServerRequestFactory;

$request = ServerRequestFactory::fromGlobals();

$router = new Router($request);

/*echo "Salut";
return;*/

$router->loadYaml(__DIR__."/../config/routing.yml");

echo "Salut";
return;

try {
    $route = $router->getRouteByRequest();

    $response = $route->call($request);

} catch (\Exception $e) {
}
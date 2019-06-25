<?php

namespace App;

use Symfony\Component\HttpFoundation\Request;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use App\Router\RouterException;

Class Controller
{
    private static $managers = [];

    protected $request;

    protected $args;

    private $twig;

    public function __construct()
    {
        session_start();
        $loader = new FilesystemLoader(__DIR__. '/../src/View');
        $this->twig = new Environment($loader);
    }

    protected function getManager($manager, $request = null)
    {
        if (!isset(self::$managers[$manager])) {
            self::$managers[$manager] = new $manager($request);
        }

        return self::$managers[$manager];
    }

    protected function view($view, $data = [])
    {
        return $this->twig->render($view, $data);
    }

    protected function checkConnexion()
    {
        if (!isset($_SESSION["connexion"]) || $_SESSION["connexion"] != TRUE) {
            throw new RouterException("Vous ne pouvez pas accéder à l'espace administrateur sans vous être connecté !");
        }
    }

    protected function checkPostData(Array $postData) {
        foreach ($postData as $post) {
            if ($post === "") {
                return false;
            }
        }
    }
}
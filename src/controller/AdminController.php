<?php

namespace Src\Controller;

use App\Controller;
/*use Src\Manager\ColorManager;
use Src\Manager\ConnectManager;*/

class AdminController extends Controller
{
    public function goToAdmin() {
        $this->checkConnexion();
        echo $this->view("template/admTemplate.html.twig", [
            ]);
    }
}
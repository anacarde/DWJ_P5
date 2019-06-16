<?php

namespace Src\Controller;

use App\Controller;
use Src\Manager\ColorManager;
/*use Src\Manager\ColorManager;
use Src\Manager\ConnectManager;*/

class AdminController extends Controller
{
    public function goToAdmin() {
        $this->checkConnexion();
        echo $this->view("template/admTemplate.html.twig", [
                "colGrpName" => $this->getManager(ColorManager::class)->getColGrpList(),
                "colGrpLs" => $this->getManager(ColorManager::class)->getColGrpList(),
            ]);
    }

    public function getAddColBlock() {
        $this->checkConnexion();
        echo $this->view("admAddCol.html.twig", [
        ]);
    }

    public function getHandColBlock() {
        $this->checkConnexion();
        echo $this->view("admHandCol.html.twig", [
            "colGrp" => $this->getManager(ColorManager::class)->getColGrp($this->args['colGrp']),
        ]);
    }
}
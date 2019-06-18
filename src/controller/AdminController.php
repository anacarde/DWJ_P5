<?php

namespace Src\Controller;

use App\Controller;
use Src\Model\Color;
use Src\Manager\ReadManager;
use Src\Manager\ActionManager;
/*use Src\Manager\ReadManager;
use Src\Manager\ConnectManager;*/

class AdminController extends Controller
{
    public function goToAdmin() {
        $this->checkConnexion();
        echo $this->view("template/admTemplate.html.twig", [
                "colGrpLs" => $this->getManager(ReadManager::class)->getColGrpList(),
            ]);
    }

    public function getAddColBlock() {
        $this->checkConnexion();
        echo $this->view("admin/admAddCol.html.twig", [
        ]);
    }

    public function addColAction() {
        $colObj = $this->getManager(Color::class, $this->request->getQueryParams());
        $reqSucc = $this->getManager(ActionManager::class)->add($colObj);
        echo $reqSucc;
    }

    public function getHandColBlock() {
        $this->checkConnexion();
        echo $this->view("admin/admHandCol.html.twig", [
            "colGrp" => $this->getManager(ReadManager::class)->getColGrp($this->args['colGrp']),
        ]);
    }
}
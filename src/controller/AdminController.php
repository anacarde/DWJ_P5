<?php

namespace Src\Controller;

use App\Controller;
use Src\Model\Color;
use Src\Manager\ReadManager;
use Src\Manager\ActionManager;

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
        echo $this->view("admin/admColForm.html.twig", [
            "colGrpLs" => $this->getManager(ReadManager::class)->getColGrpList(),
            "action" => "add"
        ]);
    }

    public function getUpdColBlock() {
        $this->checkConnexion();
        echo $this->view("admin/admColForm.html.twig", [
            "colGrpLs" => $this->getManager(ReadManager::class)->getColGrpList(),
            "colUpdInf" => $this->request->getParsedBody(),
            "action" => "update"
        ]);
    }

    public function getColTableBlock() {
        $this->checkConnexion();
        echo $this->view("admin/admColTable.html.twig", [
            "colGrp" => $this->getManager(ReadManager::class)->getColGrpContent($this->args['colGrp']),
            "colGrpName" => $this->getManager(ReadManager::class)->getSingleColGrpName($this->args['colGrp']),
        ]);
    }

    public function addAction() {
        $this->checkConnexion();
        if ($this->checkPostData() === false) {
            echo 2;
            return;
        }
        $colObj = $this->getManager(Color::class, $this->request->getParsedBody());
        $reqSucc = $this->getManager(ActionManager::class)->add($colObj);
        echo $reqSucc;
    }

    public function deleteAction() {
        $this->checkConnexion();
        $reqSucc = $this->getManager(ActionManager::class)->delete($this->args['id']);
        echo $reqSucc;
    }

    public function updateAction() {
        $this->checkConnexion();
        $colObj = $this->getManager(Color::class, $this->request->getParsedBody());
        $reqSucc = $this->getManager(ActionManager::class)->update($colObj);
        echo $reqSucc;
    }

    public function disconnectAction() {
        $_SESSION['connexion'] = FALSE;
        $this->redirect("/");
    }
}
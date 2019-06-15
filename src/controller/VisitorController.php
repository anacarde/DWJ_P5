<?php

namespace Src\Controller;

use App\Controller;
use Src\Manager\ColorManager;
use Src\Manager\ConnectManager;

class VisitorController extends Controller
{
    private function chooseDbMethod(Array $array) {        
        if($array["col-filt"] === "fam-filt") {
            $manMeth = "getColByFam"; 
        } else {
            $manMeth = "getRandCol";
        }
        return $manMeth;
    }

    public function checkConnectInfo() {
        $adminId = $this->getManager(ConnectManager::class)->getAdminId();
        $userInp = $this->request->getQueryParams();
        if ($adminId["pseudo"] != $userInp["pseudo"]) {
            echo "Pseudo administrateur incorrect";
            return;
        }
        if (!password_verify($userInp["password"], $adminId["hash_password"])) {
            echo "Mot de passe incorrect";
            return;
        }
        $_SESSION["connexion"] = TRUE;
        echo "Connexion à votre espace en cours";
    }

    public function nbColSelect() {
        if ($this->args["filt"] === "rand") {
            echo $this->getManager(colorManager::class)->getTotColNb();
        } else {
            echo $this->getManager(colorManager::class)->getColNbByFam($this->args["filt"]);
        }
    }

    public function goToIndex() {
        echo $this->view("visHomeBlock.html.twig", [
        ]);
    }

    public function goToMenu() {
        echo $this->view("visMenuBlock.html.twig", [
            "colGrpLs" => $this->getManager(colorManager::class)->getColNameList(),
            "totColNb" => $this->getManager(colorManager::class)->getTotColNb(),
        ]);
    }

    public function goToModel() {
        $colSelArr = $this->request->getParsedBody();
        $dbMethod = $this->chooseDbMethod($colSelArr);
        echo $this->view("visModelBlock.html.twig", [
            "colSel" => call_user_func([$this->getManager(colorManager::class), $dbMethod], $colSelArr),
        ]);
    }

    public function goFromMenuToGameOne() {
        $colSelArr = $this->request->getParsedBody();
        $dbMethod = $this->chooseDbMethod($colSelArr);
        echo $this->view("visGameOneBlock.html.twig", [
            "colSel" => call_user_func([$this->getManager(colorManager::class), $dbMethod], $colSelArr),
            "serverData" => TRUE,
        ]);
    }

    public function goFromModelToGameOne() {
        echo $this->view("visGameOneBlock.html.twig", [
            "serverData" => FALSE,
        ]);
    }

    public function goToGameTwo() {
        echo $this->view("visGameTwoBlock.html.twig", [
        ]);
    }

    public function goToResult() {
        echo $this->view("visResultBlock.html.twig", [
        ]);
    }
}
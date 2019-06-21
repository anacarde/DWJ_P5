<?php

namespace Src\Controller;

use App\Controller;
use Src\Manager\ReadManager;
use Src\Manager\ConnectManager;
use App\Router\RouterException;

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
        $userInp = $this->request->getParsedBody();
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
            echo $this->getManager(ReadManager::class)->getTotColNb();
        } else {
            echo $this->getManager(ReadManager::class)->getColNbByFam($this->args["filt"]);
        }
    }

    public function goToIndex() {
        echo $this->view("visitor/visHomeBlock.html.twig", [
        ]);
    }

    public function goToMenu() {
        echo $this->view("visitor/visMenuBlock.html.twig", [
            "colGrpLs" => $this->getManager(ReadManager::class)->getColGrpList(),
            "totColNb" => $this->getManager(ReadManager::class)->getTotColNb(),
        ]);
    }

    public function goToModel() {
        if ($this->checkPostData() === false) {
            throw new RouterException("Le serveur n'a pas tout bien reçu, vous pouvez retourner au menu et recommencer. ");
        };
        $colSelArr = $this->request->getParsedBody();
        $dbMethod = $this->chooseDbMethod($colSelArr);
        echo $this->view("visitor/visModelBlock.html.twig", [
            "colSel" => call_user_func([$this->getManager(ReadManager::class), $dbMethod], $colSelArr),
        ]);
    }

    public function goFromMenuToGameOne() {
        $colSelArr = $this->request->getParsedBody();
        $dbMethod = $this->chooseDbMethod($colSelArr);
        echo $this->view("visitor/visGameOneBlock.html.twig", [
            "colSel" => call_user_func([$this->getManager(ReadManager::class), $dbMethod], $colSelArr),
            "serverData" => TRUE,
        ]);
    }

    public function goFromModelToGameOne() {
        echo $this->view("visitor/visGameOneBlock.html.twig", [
            "serverData" => FALSE,
        ]);
    }

    public function goToGameTwo() {
        echo $this->view("visitor/visGameTwoBlock.html.twig", [
        ]);
    }

    public function goToResult() {
        echo $this->view("visitor/visResultBlock.html.twig", [
        ]);
    }
}
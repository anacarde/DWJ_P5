<?php

namespace Src\Controller;

use App\Controller;
use Src\Manager\ColorManager;

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
/*        var_dump($this->getManager(colorManager::class)->getColNameList());
        return;*/
        echo $this->view("visMenuBlock.html.twig", [
            "colNameList" => $this->getManager(colorManager::class)->getColNameList(),
            "totColNb" => $this->getManager(colorManager::class)->getTotColNb(),
        ]);
    }

    public function goToModel() {
        $colSelArr = $this->request->getParsedBody();
        $dbMethod = $this->chooseDbMethod($colSelArr);
/*        echo "<pre>";
        var_dump( call_user_func([$this->getManager(colorManager::class), $dbMethod], $colSelArr) );
        return;
        echo "</pre>";*/
        echo $this->view("visModelBlock.html.twig", [
            "colSel" => call_user_func([$this->getManager(colorManager::class), $dbMethod], $colSelArr),
        ]);
    }

    public function goToGameOne() {
        echo $this->view("visGameOneBlock.html.twig", [
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
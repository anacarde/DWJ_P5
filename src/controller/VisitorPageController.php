<?php

namespace Src\Controller;

use App\Controller;
use Src\Manager\ColorManager;

class VisitorPageController extends Controller
{

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
        echo $this->view("visModelBlock.html.twig", [
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
<?php

namespace Src\Controller;

use App\Controller;

class VisitorPageController extends Controller
{

    public function goToIndex() {
        echo $this->view("visHomeBlock.html.twig", [
        ]);
    }

    public function goToMenu() {
        echo $this->view("visMenuBlock.html.twig", [
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
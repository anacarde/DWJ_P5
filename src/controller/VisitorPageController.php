<?php

namespace Src\Controller;

use App\Controller;

class VisitorPageController extends Controller
{

    public function goToIndex() {
        echo $this->view("visHomeBlock.html.twig", [
        ]);
    }
}
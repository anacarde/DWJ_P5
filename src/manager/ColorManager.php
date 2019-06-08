<?php

namespace Src\Manager;

use App\Manager;
use src\Model\Color;

class ColorManager extends Manager
{
    public function getTotColNb(){
        $req = Manager::dbConnect()->query('SELECT COUNT(*) AS colTotNb FROM color_ls');
        $rep = $req->fetch(\PDO::FETCH_ASSOC); 
        return $rep['colTotNb'];
    }

    public function getColNameList(){
        $req = Manager::dbConnect()->query('SELECT DISTINCT color_group FROM color_ls');
        $req->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, 'Src\Model\Color');
        $rep = $req->fetchAll();
        return $rep;
    }
}
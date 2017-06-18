<?php
/**
 * Created by PhpStorm.
 * User: Adriana Valenzuela
 * Date: 16/06/2017
 * Time: 05:54 PM
 */

$q = $_REQUEST["q"];
$string = replace($q, '*', '/');
$string2 = replace($string, 't', '-');

function replace($string, $op1, $op2)
{
    $valor = "";
    $posicionInicial = "";
    $posicionFinal = "";
    $pos1 = strpos($string, $op1);
    $pos2 = strpos($string, $op2);
    while (($pos1 != false) || ($pos2 != false)) {
        if ($pos1 == false) {
            $pos = $pos2;
            $op = $op2;
        } elseif ($pos2 == false) {
            $pos = $pos1;
            $op = $op1;
        } else {
            if ($pos1 < $pos2) {
                $pos = $pos1;
                $op = $op1;
            } else {
                $pos = $pos2;
                $op = $op2;
            }

        }
        $num2 = "";
        for ($i = $pos + 1; $i < strlen($string); $i++) {
            if (($string[$i] != 't') && ($string[$i] != '-') && ($string[$i] != '*') && ($string[$i] != '/')) {
                $num2 .= $string[$i];
                $posicionFinal = $i;
            } else {
                break;
            }
        }
        $numAux = "";
        for ($i = $pos - 1; $i >= 0; $i--) {
            if (($string[$i] != 't') && ($string[$i] != '-') && ($string[$i] != '*') && ($string[$i] != '/')) {
                $numAux .= $string[$i];
                $posicionInicial = $i;
            } else {
                break;
            }
        }
        $num1 = strrev($numAux);
        if ($op == 't') {
            $valor = sum($num1, $num2);
        } elseif ($op == '-') {
            $valor = $num1 - $num2;
        } elseif ($op == '*') {
            $valor = $num1 * $num2;
        } elseif ($op == '/') {
            if ($num2 != "0") {
                $valor = $num1 / $num2;
            } else {
                echo("Error");
            }
        }
        $substring = substr($string, $posicionInicial, ($posicionFinal - $posicionInicial) + 1);
        $string = str_replace($substring, $valor, $string);
        $pos1 = strpos($string, $op1);
        $pos2 = strpos($string, $op2);
    }
    return $string;
}

function sum($a, $b)
{
    $c = $a + $b;
    return $c;
}

echo($string2);
?>
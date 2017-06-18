<?php
/**
 * Created by PhpStorm.
 * User: Adriana Valenzuela
 * Date: 16/06/2017
 * Time: 05:54 PM
 */

//variable that represents the expression as string
$q = $_REQUEST["q"];
//solves the * and / of string
$string = replace($q, '*', '/');
//solves the + and - of string
$string2 = replace($string, 't', '-');

/*funcition that solves an aritmetic operation
params: string --> aritmetic expression
op1 and op2 some aritmetic expression such * and / that has same order of priority
*/
function replace($string, $op1, $op2)
{
    $valor = "";
    $posicionInicial = "";
    $posicionFinal = "";
    //position of first operand
    $pos1 = strpos($string, $op1);
    //position of second operand
    $pos2 = strpos($string, $op2);
    //checks if any operations with that aritmetic sign exists
    while (($pos1 != false) || ($pos2 != false)) {
        //gets the position of the operation that comes first
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
        //second number of the operation
        for ($i = $pos + 1; $i < strlen($string); $i++) {
            if (($string[$i] != 't') && ($string[$i] != '-') && ($string[$i] != '*') && ($string[$i] != '/')) {
                $num2 .= $string[$i];
                $posicionFinal = $i;
            } else {
                break;
            }
        }
        $numAux = "";
        //first numeber of the operation
        for ($i = $pos - 1; $i >= 0; $i--) {
            if (($string[$i] != 't') && ($string[$i] != '-') && ($string[$i] != '*') && ($string[$i] != '/')) {
                $numAux .= $string[$i];
                $posicionInicial = $i;
            } else {
                break;
            }
        }
        $num1 = strrev($numAux);
        //makes aritmetic operation and stores result in variable $valor
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
        //replaces the part number1 operation number2 by the new result of the operation
        $substring = substr($string, $posicionInicial, ($posicionFinal - $posicionInicial) + 1);
        $string = str_replace($substring, $valor, $string);
        //to continue loop
        $pos1 = strpos($string, $op1);
        $pos2 = strpos($string, $op2);
    }
    return $string;
}

/*function that sums two values
params: a, b are the ones that are to be sum
used to prevent confusion between sum and concatenation of values
*/
function sum($a, $b)
{
    $c = $a + $b;
    return $c;
}

//returns the answer to server side
echo($string2);
?>
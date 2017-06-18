/**
 * Created by Adriana Valenzuela on 16/06/2017.
 */


/*fucntion that gets called after a number key is pressed
* param : numberID indicated the id of the key pressed, if the key button is 5, then id will be 5*/
function clickNumber(numberID){
    //gets text of aritmetic expressions
    var acum = document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML;
    if(acum == "0") {
        //if aritmetic expression is equal to zero then number pressed display text is changed to number pressed
        document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML = numberID;
    }
    else{
        //if an aritmetic expression already exists then a new string containing the exixsting expresion concatenated
        //with the number pressed replaces the text
        var subs = acum.concat(numberID);
        document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML = subs;
    }
}
/*function that gets called if +,*,- or / are pressed
* param : operandID
* operandID indicates the id of the operand pressed, i.e if * is pressed then id will be * */
function clickOperand(operandID){
    //acum gets the value of the aritmetic expression
    var acum = document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML;
    //temp gets the value of the temporary result
    var temp = document.getElementById('screen').getElementsByTagName('div')[0].innerHTML;
    //if no previous opperation exists then, concatenates the operand to the expression
    if(temp == '0'){
        var subs = acum.concat(operandID);
        document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML = subs;
    }
    //if a previous operation already exits, takes the value of the result, concatenates the opperand
    //replaces the existing expression with new one
    else{
        var subs = temp.concat(operandID);
        document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML = subs;
        document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = '0';
    }
}

/*function that erases value from screen*/
function clickCE(){
    //changes values of display to zero
    document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML = "0";
    document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = "0";
}

/* function that works as backspace*/
function clickBackSpace(){
    //takes actual expression
    var acum = document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML;
    var len = acum.length;
    //eliminates the last number
    if (len > 1){
        document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML = acum.slice(0, -1);
    }
    else{
        document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML = "0";
    }
}

/*function that solves the operation*/
function clickEquals(){
    //takes value of the expression
    var acum = document.getElementById('aritmeticExpression').getElementsByTagName('div')[0].innerHTML;
    //conection with server side
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //will get the answer of the operation
            document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = this.responseText;
        }
    };
    //calls the function in server
    xhttp.open("GET", "solve.php?q="+acum, true);
    xhttp.send();


}

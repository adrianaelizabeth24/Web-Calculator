/**
 * Created by Adriana Valenzuela on 16/06/2017.
 */


function clickNumber(numberID){
    var acum = document.getElementById('screen').getElementsByTagName('div')[0].innerHTML;
    if(acum == "0") {
        document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = numberID;
        acum = numberID;
    }
    else{
        var subs = acum.concat(numberID);
        document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = subs;
        acum = subs
    }
}

function clickOperand(operandID){
    var acum = document.getElementById('screen').getElementsByTagName('div')[0].innerHTML;
    var subs = acum.concat(operandID);
    document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = subs;
    acum = subs;
}

function clickCE(){
    document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = "0";
}

function clickBackSpace(){
    var acum = document.getElementById('screen').getElementsByTagName('div')[0].innerHTML;
    var len = acum.length;
    if (len > 1){
        document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = acum.slice(0, -1);
    }
    else{
        document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = "0";
    }
}

function clickEquals(){
    var acum = document.getElementById('screen').getElementsByTagName('div')[0].innerHTML;
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('screen').getElementsByTagName('div')[0].innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "solve.php?q="+acum, true);
    xhttp.send();


}

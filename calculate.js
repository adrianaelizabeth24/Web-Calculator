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
        acum = subs;
    }
}


document.querySelector("form").onsubmit = function(){

var info =document.querySelector("#info").value;   //text
var time =document.querySelector("#time").value;   //select
var date =document.querySelector("#date").value;   //select
var note =document.querySelector("#note").value;  //text
var result =document.querySelector("#result"); //tbody


if(info =="" || time=="" || date=="" || note==""){
    alert("please enter your info first");
}
else{
  var tdOne = document.createElement("td");
    tdOne.innerHTML = info;
    var tdTwo = document.createElement("td");
    tdTwo.innerHTML = time;
    var tdThird = document.createElement("td");
    tdThird.innerHTML = date;
    var tdFour = document.createElement("td");
    tdFour.innerHTML = note;

    var trTable = document.createElement("tr");
    trTable.appendChild(tdOne);
    trTable.appendChild(tdTwo);
    trTable.appendChild(tdThird);
    trTable.appendChild(tdFour);


    result.appendChild(trTable);
    document.querySelector("#info").value ="";
    document.querySelector("#time").value ="";
    document.querySelector("#date").value ="";
    document.querySelector("#note").value ="";

    return false;
}
}
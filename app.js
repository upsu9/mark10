var inputBill = document.querySelector(".inputBill")
var btnBill = document.querySelector(".btnBill")
var inputCash = document.querySelector(".inputCash")
var btnCash = document.querySelector(".btnCash")
var msg = document.querySelector(".msg")
var noOfNotes = document.querySelectorAll(".noOfNotes")
var nextDiv = document.querySelector(".nextDiv")
var emsg = document.querySelector(".emsg")
var clearBtn = document.querySelector(".clearBtn")

hideDiv(nextDiv);



btnBill.addEventListener("click", clickHandler)
btnCash.addEventListener("click", checkNotes)

function clickHandler() {
    var bill = Number(inputBill.value);
    if (bill < 0 || bill == 0 || bill == "") {
        errorMsg("you need to put more than zero");
        showDiv (msg, "block")
       

    } else {
        showDiv(nextDiv, "block")
        return bill;
    }
}

function checkNotes() {
    var bill = Number(inputBill.value);
    /* hideMessage(); */
    var cash = Number(inputCash.value)
    if (bill < cash) {
        var cashGiven = cash - bill;
        remainBal(cashGiven);
    } else {

        /*  if (bill > inputCash.value || bill === inputCash.value) { */

        showMessage("You need to give more cash OR No change shall be provided.");
    }
}

var weHaveNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

function remainBal(cashGiven) {

    for (i = 0; i < weHaveNotes.length; i++) {
        var numberOfNotes = Math.trunc(cashGiven / weHaveNotes[i])
       console.log(numberOfNotes)
        cashGiven %= weHaveNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


function errorMsg(message) {
    emsg.style.display = "block";
    emsg.innerText = message;

}


function showMessage(message) {
    msg.style.display = "block";
    msg.innerText = message;

}


function hideDiv(input) {
    input.style.display = "none";
}

function showDiv(input, type){
    input.style.display = type;

}

clearBtn.addEventListener("click", clearEverything)
function clearEverything (){
    inputBill.value = "";
    inputCash.value = "";
    for (i = 0; i < weHaveNotes.length; i++) {
    noOfNotes[i].innerText = "";
    }
    showMessage("");
    errorMsg("");
    /* hideDiv(errorMsg("")); */
}
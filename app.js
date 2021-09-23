var inputBill = document.querySelector(".inputBill")
var btnBill = document.querySelector(".btnBill")
var inputCash = document.querySelector(".inputCash")
var btnCash = document.querySelector(".btnCash")
var msg = document.querySelector(".msg")
var noOfNotes = document.querySelector(".noOfNotes")


btnBill.addEventListener("click", balanceAmount)
btnCash.addEventListener("click", checkNotes)



function balanceAmount() {
    var bill = Number(inputBill.value);
    if (bill < 0 || bill == 0 || bill == "") {
        showMessage("you need to put more than zero");
    } else {
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



function hideMessage() {
    msg.display.style = "none"
}

function showMessage(message) {
    msg.style.display = "block";
    msg.innerText = message;

}
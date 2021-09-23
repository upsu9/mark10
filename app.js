var inputBill = document.querySelector(".inputBill")
var btnBill = document.querySelector(".btnBill")
var inputCash = document.querySelector(".inputCash")
var btnCash = document.querySelector(".btnCash")
var msg = document.querySelector(".msg")

btnBill.addEventListener("click", balanceAmount)
btnCash.addEventListener("click", checkNotes)

function balanceAmount() {
   /*  var bill = inputBill.value; */
    if (inputBill.value < 0 || inputBill.value == 0) {
        showMessage("you need to put more than zero");
    } else {
        return 0;
    }
}

function checkNotes() {
   /*  var bill = inputBill.value; */
    /* hideMessage(); */
    if (inputBill.value < inputCash.value) {
        var cashGiven = inputCash.value - inputBill.value;
        remainBal(cashGiven);
    } else {

        /*  if (bill > inputCash.value || bill === inputCash.value) { */

        showMessage("You need to give more cash OR No change shall be provided.");


    }
}


function remainBal(cashGiven) {
    var calBal = cashGiven
    console.log(calBal);
}

function hideMessage() {
    msg.display.style = "none"
}

function showMessage(message) {
    msg.style.display = "block";
    msg.innerText = message;

}
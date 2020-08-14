const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click",function(){
const loginArea = document.querySelector("#login-area")
    loginArea.style.display ="none"
const transactionArea = document.querySelector("#transaction-area");
    transactionArea.style.display = "block";
})

//deposit btn even handler
const depositBtn = document.querySelector("#addDeposit");
depositBtn.addEventListener("click",function(){
 //  const depositAmount =document.querySelector("#depositAmount").value;
 //  const depositNumber = parseFloat(depositAmount);
 const depositNumber = getInputNumber("#depositAmount")

 updateSpanText("#currentDeposit",depositNumber)
 updateSpanText("#currentBalance",depositNumber)

  document.querySelector("#depositAmount").value =""
})
// withdraw button event handler
const withdrawBtn = document.querySelector("#addWithdraw");
withdrawBtn.addEventListener("click",function(){
 const withdrawNumber = getInputNumber("#withdrawAmount")
 
 updateSpanText("#currentWithdraw",withdrawNumber)
 updateSpanText("#currentBalance",-1*withdrawNumber)

 document.querySelector("#withdrawAmount").value =""
})
 function getInputNumber(id){
     const amount = document.querySelector(id).value
     const amountNumber = parseFloat(amount);
     return amountNumber;
 }

function updateSpanText(id,depositNumber){
 const current= document.querySelector(id).innerText;
  const currentNumber = parseFloat(current)
  const totalBalance = depositNumber + currentNumber;
  document.querySelector(id).innerText = totalBalance;  
 
}

/*

const inputOne = parseInt("#input1");
const inputTwo =parseInt( "#input2");
let answer1 = inputOne + inputTwo

$(document).ready(function() {
    $(".calculator").click(function(event) {

      const inputOne = parseInt($("#input1").val());
      
     // const operator = $(".operator").val();
      const inputTwo =parseInt( $("#input2").val());
let answer1 = function(inputOne, inputTwo){
    return inputOne-inputTwo ;
    console.log(inputOne);
};
$("#addition").submit()
     $("#display").text (answer1);
   
      $("#display").toggle();
      event.preventDefault();
    });
  });*/
  
  function multiplyBy() {
     let num1=  parseInt(document.getElementById("firstNumber").value);
     let num2=  parseInt(document.getElementById("secondNumber").value);
      document.getElementById("Result").innerHTML=num1*num2;
  }
  function divideBy() {
   let num1=  parseInt(document.getElementById("firstNumber").value);
   let num2=  parseInt(document.getElementById("secondNumber").value);
    document.getElementById("Result").innerHTML=num1/num2;
}
function additionBy() {
    let num1= parseInt(document.getElementById("firstNumber").value);
    let num2= parseInt(document.getElementById("secondNumber").value);
     document.getElementById("Result").innerHTML=num1+num2;
 }
 function subtractBy() {
    let num1=  parseInt(document.getElementById("firstNumber").value);
    let num2=  parseInt(document.getElementById("secondNumber").value);
     document.getElementById("Result").innerHTML=num1-num2;
 }
 function modulusBy() {
    let num1=  parseInt(document.getElementById("firstNumber").value);
    let num2=  parseInt(document.getElementById("secondNumber").value);
     document.getElementById("Result").innerHTML=num1%num2;
 }
document.getElementById("submit")
        .addEventListener("click", calculateIt);

function calculateIt() {
   
    var radios = document.getElementsByName("operator");
    var myOperator = radios[0].value; 

   
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    var operand1type = document.getElementById("operand1-type").value;
    var operand2type = document.getElementById("operand2-type").value;

    operand1 = (operand1type === "number") 
        ? Number(operand1) 
        : String(operand1);
    operand2 = (operand2type === "number") 
        ? Number(operand2) 
        : String(operand2);

    
    var returnValue = operand1 % operand2;

    
    document.getElementById("final-operation")
            .innerText = operand1 + myOperator + operand2;

   
    document.getElementById("result")
            .innerText = returnValue;
}










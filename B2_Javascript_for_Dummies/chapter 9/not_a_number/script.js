document.getElementById("submit")
        .addEventListener("click", calculateIt);

function calculateIt() {

    var radios = document.getElementsByName("operator");
    var myOperator;
    for (var i = 0; i < radios.length; i = i + 1) {
        if (radios[i].checked) {
            myOperator = radios[i].value;
            break;
        }
    }

    
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

    
    var returnValue;
    switch (myOperator) {
        case "+":   returnValue = operand1 + operand2; break;
     
    }

    
    var op1 = (typeof operand1 === "string") ? '"' + operand1 + '"' : operand1;
    var op2 = (typeof operand2 === "string") ? '"' + operand2 + '"' : operand2;
    document.getElementById("final-operation")
            .innerText = op1 + myOperator + op2;

    
    document.getElementById("result")
            .innerText = returnValue;
}








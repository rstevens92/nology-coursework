const handleMathButton = (event, buttonValue) => {

   const outputSpace = document.getElementById("output");
   
   outputSpace.innerHTML += buttonValue;
    
    if (buttonValue.match(/[0-9]/)){
        const numberValue = Number(buttonValue);
    } 

    let equasion = outputSpace.split();

    const plusButton = document.getElementById("plus-button");

    plusButton = x+y;

    const equalsButton = document.getElementById("equals-button");

    equalsButton = function() {
        for (index = 0; index = outputSpace.length; index++) {
            let answer = index + equasion;
            return outputSpace.innerHTML += answer;
        }
    }
}
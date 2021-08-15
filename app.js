const inputs = document.querySelectorAll(".input");
const output = document.querySelector(".output");
const button = document.querySelector("#btn");
const result = document.querySelector(".main-section");

button.addEventListener("click", checkHandler);

function checkHandler() {
    var initialPrice = Number(inputs[0].value);
    var qty = Number(inputs[1].value);
    var currentPrice = Number(inputs[2].value);
    calculatePAndL(initialPrice,qty,currentPrice);
}

function calculatePAndL(initialPrice, qty, currentPrice){
    if(initialPrice > currentPrice){
        var loss = (initialPrice - currentPrice)* qty;
        var lossPercentage = (loss / initialPrice)* 100;
        output.style.color= "blue";

        output.innerText=  `You lost ${lossPercentage}%. Your total lost is ₹${loss}`;
        if(lossPercentage > 50){
            output.style.color= "black";
            result.style.backgroundColor = "red";

            output.innerText=  `You lost ${lossPercentage}%. Your total lost is ₹${loss}`;
        }

    }else if(currentPrice > initialPrice){
        var profit = (currentPrice - initialPrice)* qty;
        var profitPercentage = (profit / initialPrice)* 100;
        result.style.backgroundColor = "green";
        output.style.color= "white";
        
        output.innerText=  `You gained ${profitPercentage}%. Your total profit is ₹${profit}`;
    }
        else{
        output.innerText = "No change";
    }
}

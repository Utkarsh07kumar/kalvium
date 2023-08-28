document.addEventListener("DOMContentLoaded", function () {
    let string = "";
    let history = [];
  
    const inputField = document.querySelector(".input");
    const historyList = document.getElementById("historyList");
  
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const buttonValue = e.target.innerHTML;
        
        if (buttonValue === "AC") {
          string = "";
        } else if (buttonValue === "=") {
          if (string !== "") {
            const result = eval(string);
            history.push({ expression: string, result: result });
            string = result.toString();
            inputField.value = string;
            updateHistoryList();
          }
        } else {
          string = string + buttonValue;
        }
        
        inputField.value = string;
      });
    });
  
    function updateHistoryList() {
      historyList.innerHTML = "";
      history.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${entry.expression} = ${entry.result}`;
        historyList.appendChild(listItem);
      });
    }
  });
  
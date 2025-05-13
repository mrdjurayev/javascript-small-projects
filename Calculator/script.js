function solver(number1, number2) {
    const operator = document.getElementById('operators').value;
    switch (operator) {
        case "no option":
            return alert("Choose another operator!");
        case "plus":
            return number1 + number2;
        case "minus":
            return number1 - number2;
        case "multiple":
            return number1 * number2;
        case "division":
            return number1 / number2;
    }

}

const btn = document.getElementById('calculate-btn');
btn.addEventListener('click', () => {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);
    const result = document.getElementById('result');
    result.textContent = solver(num1, num2);
});
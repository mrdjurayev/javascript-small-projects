const answers = document.getElementsByName("Answer");
const answersList = Array.from(answers);

const checkBtn = document.getElementById("checkbtn");
checkBtn.addEventListener('click', () => {
    const selectedAnswer = answersList.find(answer => answer.checked);
    const result = answersList.find(item => {
        return item.checked && item.value === "1995"
    });
    const resultText = document.getElementById("result");
    if(result) {
        resultText.textContent = "Togri javob, Ajoyib 👌";
        resultText.style.color = 'green';
    }else if(!selectedAnswer){
        alert("Please choose the option");
    } else {
        resultText.textContent = "Xato javob, qayta urinib ko'ring";
        resultText.style.color = 'red';
    }
});

//Counter program
const heading2 = document.getElementById("result");
let nowNumber = Number(heading2.textContent);
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

decreaseBtn.addEventListener('click', () =>  {
    heading2.textContent = --nowNumber;
});

resetBtn.addEventListener('click', () => {
    nowNumber = 0;
    heading2.textContent = nowNumber;
});

increaseBtn.addEventListener('click', () => {
    heading2.textContent = ++nowNumber;
});




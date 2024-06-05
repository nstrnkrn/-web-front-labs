function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = Math.floor((today - birthday) / 1000 / 60 / 60 / 24);
    
    let daysCountOutput = document.getElementById('days-count');
    daysCountOutput.textContent = `Количество дней с даты рождения: ${daysCount}`;
}

function clearInput() {
    let inputDate = document.querySelector('input[type=date]');
    inputDate.value = ''; // Очистка поля ввода

    let daysCountOutput = document.getElementById('days-count');
    daysCountOutput.textContent = ''; // Очистка вывода количества дней
}
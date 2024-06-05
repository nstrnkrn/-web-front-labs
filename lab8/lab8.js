function showDate() {
    let outRu = document.getElementById('current-date-ru');
    let outUs = document.getElementById('current-date-us');
    let outDe = document.getElementById('current-date-de');
    let outCn = document.getElementById('current-date-cn');
    let outJp = document.getElementById('current-date-jp');
    let outEs = document.getElementById('current-date-es');
    let today = new Date();

    outRu.innerHTML = today.toLocaleString('ru-RU');
    outUs.innerHTML = today.toLocaleString('en-US');
    outDe.innerHTML = today.toLocaleString('de-DE');
    outCn.innerHTML = today.toLocaleString('zh-CN');
    outJp.innerHTML = today.toLocaleString('ja-JP');
    outEs.innerHTML = today.toLocaleString('es-ES');
}

function showDateTime() {
    let currentDate = new Date();
    let dateTimeOutput = document.getElementById('current-date-time');
    let yearOutput = document.getElementById('current-year');
    let monthOutput = document.getElementById('current-month');
    let dayOutput = document.getElementById('current-day');
    let dayOfWeekOutput = document.getElementById('current-day-of-week');

    dateTimeOutput.textContent = currentDate.toLocaleString();
    yearOutput.textContent = currentDate.getFullYear();
    monthOutput.textContent = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
    dayOutput.textContent = currentDate.getDate();
    dayOfWeekOutput.textContent = getDayOfWeekName(currentDate.getDay());
}

function getDayOfWeekName(dayIndex) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysOfWeek[dayIndex];
}

function getDayOfWeek() {
    const inputDate = document.getElementById('input-date').value;
    const inputMonth = document.getElementById('input-month').value - 1; // Месяцы в JavaScript начинаются с 0
    const inputYear = document.getElementById('input-year').value;

    const inputDateObj = new Date(inputYear, inputMonth, inputDate);
    const dayOfWeek = getDayOfWeekName(inputDateObj.getDay());

    const outputDiv = document.getElementById('output-day-of-week');
    outputDiv.textContent = `День недели для указанной даты: ${dayOfWeek}`;
}
let timerInput = document.getElementById("time"); //задается переменная с взятием id 
let buttonRun = document.getElementById("button"); //задается переменная с взятием id
let timerShow = document.getElementById("timer"); //задается переменная с взятием id

buttonRun.addEventListener('click', function() {
    timeMinut=parseInt(timerInput.value) * 60 // берутся данные из формы и преобразуются в числовой тип данных
})

timer = setInterval(function() {
    seconds = timeMinut%60 // выделение секунд
    minutes = timeMinut/60%60 // выделение минут
    hour = timeMinut/60/60%60 // выделение часов
    // условие если таймер заканчивается
    if(timeMinut <= 0) {
        // очищение таймера
        clearInterval(timer);
        // вывод сообщения
        alert("Время закончилось");
    } else{ // иначе, выводим строку с выводом времени
        let strTimer = '${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}';
        // Вывод блока для показа таймера
        timerShow.innerHTML=strTimer;
    }
    --timeMinut; // уменьшение таймера
}, 1000)
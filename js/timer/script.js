const inputTime = document.querySelector("#inputTime")
const timer = document.querySelector("#timer")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resetBtn = document.querySelector("#resetBtn")

let timerTime = {
    isOn: false,
    hours: 0,
    minutes: 0,
    seconds: 0
}

timer.innerHTML = "00:00:00"

inputTime.addEventListener("input", formatTime)
startBtn.addEventListener("click",start)
pauseBtn.addEventListener("click",pause)
resetBtn.addEventListener("click",reset)

function formatTime(){
    let value = inputTime.value.replace(/[^0-9.]/g, '').replace(/^(\d{2})(\d{2})(\d{2})/, "$1:$2:$3")
    inputTime.value = value
    if(timerTime.isOn){
        clearInterval(timerTime.interval)
        timerTime.isOn = false
    }
}

function startTimer(){
    let timerMaxTimer = {
        hours: parseInt(inputTime.value.split(":")[0]),
        minutes: parseInt(inputTime.value.split(":")[1]),
        seconds: parseInt(inputTime.value.split(":")[2])
    }

    if(timerMaxTimer.seconds > timerTime.seconds || timerMaxTimer.minutes > timerTime.minutes || timerMaxTimer.hours > timerTime.hours){   
        timer.style.color = "rgb(46, 155, 60)"
        timerTime.seconds ++

        if(timerTime.seconds == 60){
            timerTime.seconds = 0
            timerTime.minutes ++
        }

        if(timerTime.minutes == 60){
            timerTime.minutes = 0
            timerTime.hours ++
        }

        let newTime = (timerTime.hours < 10 ? "0" + timerTime.hours : timerTime.hours) + ":" + (timerTime.minutes < 10 ? "0" + timerTime.minutes : timerTime.minutes) + ":" + (timerTime.seconds < 10 ? "0" + timerTime.seconds : timerTime.seconds)

        timer.innerHTML = newTime
    }else{
        clearInterval(timerTime.interval)
        timer.style.color = "red"
        timerTime.isOn = false
    }
}

function start(){
    if(!timerTime.isOn && inputTime.value.length == 8 && typeof(inputTime.value) != String){
        timerTime.interval = setInterval(startTimer, 1000)
        timerTime.isOn = true
    }
}

function pause(){
    clearInterval(timerTime.interval)
    timerTime.isOn = false

}

function reset(){
    clearInterval(timerTime.interval)
    
    timerTime.hours = 0
    timerTime.minutes = 0
    timerTime.seconds = 0
    timerTime.isOn = false

    inputTime.value = ""

    timer.innerHTML = "00:00:00"
    timer.style.color = "rgb(46, 155, 60)"

}
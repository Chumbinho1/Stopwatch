const stopwatch = document.querySelector("#stopwatch")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resetBtn = document.querySelector("#resetBtn")

let stopwatchTime = {
    isOn: false,
    hours: 0,
    minutes: 0,
    seconds: 0
}

stopwatch.innerHTML = "00:00:00"

startBtn.addEventListener("click", start)
pauseBtn.addEventListener("click", pause)
resetBtn.addEventListener("click", reset)

function startStopwatch(){
    stopwatchTime.seconds ++
    
    if(stopwatchTime.seconds == 60){
        stopwatchTime.seconds = 0
        stopwatchTime.minutes ++
    }
    
    if(stopwatchTime.minutes == 60){
        stopwatchTime.minutes = 0
        stopwatchTime.hours ++
    }

    let newTime = (stopwatchTime.hours < 10 ? "0" + stopwatchTime.hours : stopwatchTime.hours) + ":" + (stopwatchTime.minutes < 10 ? "0" + stopwatchTime.minutes : stopwatchTime.minutes) + ":" + (stopwatchTime.seconds < 10 ? "0" + stopwatchTime.seconds : stopwatchTime.seconds)
    
    stopwatch.innerHTML = newTime
}

function start(){
    if(!stopwatchTime.isOn){
        stopwatchTime.interval = setInterval(startStopwatch, 1000)
    
        stopwatchTime.isOn = true
    }
}

function pause(){
    clearInterval(stopwatchTime.interval)
    
    stopwatchTime.isOn = false
}

function reset(){
    clearInterval(stopwatchTime.interval)
    
    stopwatchTime.hours = 0
    stopwatchTime.minutes = 0
    stopwatchTime.seconds = 0
    
    stopwatch.innerHTML = "00:00:00"
    
    stopwatchTime.isOn = false
}
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(startTime, startFunc) {
    if (!(!!startTime && (typeof startFunc == "function"))) {
      throw new Error('Отсутствуют обязательные аргументы')
    } 
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (this.alarmCollection[i].time === startTime) {
        console.warn('Уже присутствует звонок на это же время');
        break;
      }
    }
    this.alarmCollection.push({callback: startFunc, time: startTime, canCall: true});
  }

  removeClock(startTime) {
    this.alarmCollection = this.alarmCollection.filter((elem) => !(elem.time === startTime));
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        let currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(element => {
          if (element.canCall && element.time === currentTime) {
            element.canCall = false;
            element.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    if (!(this.intervalId === null)) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }  
  }

  resetAllCalls() {
    this.alarmCollection.forEach(element => element.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
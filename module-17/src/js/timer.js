export const timer = {
    startTime: 0,
    stopTime: 0,
    interval: 0,

    start: function start() {
        this.startTime = new Date();
        this.interval = setInterval(function () {
            const tmp = new Date();
            const delta = tmp.getTime() - timer.startTime.getTime();
            const sec = dateFormat(delta);
            showTimer(sec);
        }, 40);
    },

    stop: function stop() {
        this.stopTime = new Date();
        const delta = this.stopTime.getTime() - this.startTime.getTime();
        const sec = dateFormat(delta);
        showTimer(sec);
        clearInterval(this.interval);
        this.startTime = 0;
        this.stopTime = 0;
        this.interval = 0;
        return sec;
    }
};

import dateFormat from './MODEL/dateFormat';
import showTimer from './VIEW/showTimer';

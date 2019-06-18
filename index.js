/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    function addZero(i) {
        if (i < 10){
            i = "0" + i;
        }
        return i;
    }
    function addNewDay(i) {
        while (i > 23){
            i = i - 24;
        }
        return i;
    }
    function getNewMinutes(i){
        while (i > 59) {
            i = i - 60;
        }
        return i;
    }
    function getNewHours(i) {
        i = Math.floor(i/60);
        return i;
    }
    
    var newMinutes, newHours, time;
    minutes = minutes + interval;
    newMinutes = getNewMinutes(minutes);
    newHours = hours + getNewHours(minutes);
    time = addZero(addNewDay(newHours)) + ":" + addZero(newMinutes);
    
    return time;
};

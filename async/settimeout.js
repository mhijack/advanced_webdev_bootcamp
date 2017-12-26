// ====== setTimeOut(callback, time) ======= runs once
const timeId = setTimeout(function() {
  console.log('This function runs in 30 seconds');
}, 30000);

// when invoked, setTimeout returns an id to cancel the invocation
setTimeout(() => {
  console.log('cancelling the first setTimeout', timeId);
  clearTimeout(timeId);
}, 2000);
// clearTimeout(id) cancels setTimeout

// ============================
// ======= setInterval(callback, repeat_time) ======== repeats
// clearInterval(intervalId) cancels setInterval

// Your goal is to implement a function called countDown.  The function will accept 1 parameter which is a time in seconds for the count down.  The function should console.log the time remaining every second.  Once the timer gets to 0, the timer should be stopped and you should console.log "Ring Ring Ring!!!".
function countDown(time) {
  const intervalId = setInterval(printTime, 1000);

  function printTime() {
    // is countdown is 0, clear
    if (time > 0) {
      console.log('Timer: ' + time);
      // if countdown is not yet 0, minus one and continue to printout countdown to console until it is 0
      time--;
    } else {
      clearInterval(intervalId);
      console.log('Ring Ring Ring!!!');
    }
  }
}

countDown(10);

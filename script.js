var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var clock = setInterval(
    function time() {
      var dateNow = new Date();
      var hr = dateNow.getHours() - 12;
      var min = dateNow.getMinutes();
      var sec = dateNow.getSeconds(); 

      if(hr < 10){
        hr = "0" + hr;
      }
      if(min < 10){
        min = "0" + min;
      }
      if(sec < 10){
        sec = "0" + sec;
      }

      hour.textContent = hr;
      minute.textContent = min;
      second.textContent = sec;  
    }, 1000
);
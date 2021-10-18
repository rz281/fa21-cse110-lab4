function seconds(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  var intervalID = setInterval(seconds, 1000);
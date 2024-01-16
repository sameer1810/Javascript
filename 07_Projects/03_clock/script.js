const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')//both are correct

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);//1000 milisecond =>1 sec

//setInterval kehta hia mujhe ek fn dedo or batado kitni der bd run krte rehna hai
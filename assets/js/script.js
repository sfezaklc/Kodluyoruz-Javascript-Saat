let userName = prompt("Adiniz?")
document.querySelector("#myName").innerHTML = userName
const days = [
    "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"
]
function showTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + " " + days[d-1];
    setTimeout(showTime, 1000);
}
showTime();
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
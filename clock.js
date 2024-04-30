const $tiempo=document.querySelector('.tiempo'),
$fecha=document.querySelector('.fecha');

function digitalClock() {
  let f =new Date(),
  dia=f.getDate(),
  mes=f.getMonth()+1,
  anio=f.getFullYear(),
  //getDay(): Metodo  que devuelve el dia de la semana en valores numericos de 0 a 6 Domingo es 0
  diaSemana=f.getDay();

  //para que nos muestre el 0 usamos slice() el cual toma una parte de array. Si el indice es negativo se comienza en el elemento -n comenzando por el final
dia=('0'+dia).slice(-2);
mes=('0'+mes).slice(-2)
  
  let timeString =f.toLocaleTimeString();
  //toLocalTimeString(): Retorna una cadena con una representacion mas sencible a nuestro  idiom.
  $tiempo.innerHTML=timeString;
  //array de nombres dias de la semana
  let semana=['SUN','MON','WED','THU','FRI','SAT'];
  let showSemana=(semana[diaSemana]);
  $fecha.innerHTML= `${anio}-${mes}-${dia}-${showSemana}`
}
//SetInterval: usamos para hacer que una funcion se repita con un tiempo de retraso entre cada ejecucion
setInterval(()=>{
digitalClock()
},1000);
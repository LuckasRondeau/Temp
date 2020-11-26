import { programarFecha } from "../src/programarFecha.js";
import * as temporizador from "../src/temporizador.js";

function main() {
  //Programo por default el horario de la tarea 
  let fechaCronJob = programarFecha();
  
  // Creo la tarea cada 10 segundos
  let temp = temporizador.CrearTemporizador(fechaCronJob, 'TEMP 1');
  console.log('Ejecuto Start temp')
  temp.start();  

   // Creo la tarea 2 cada 12 segundos
   let temp2 = temporizador.CrearTemporizador('*/12 * * * * *', 'TEMP 2');
   temp2.start();  
 
  setTimeout(()=> {console.log('Ejecuto Stop temp'); temp.stop()}, 20000);
  setTimeout(()=> {console.log('Ejecuto Start temp'); temp.start()}, 22000);
  setTimeout(()=> {console.log('Ejecuto Destroy temp'); temp.destroy()}, 42000);
  setTimeout(()=> {console.log('Ejecuto Stop temp2'); temp2.stop()}, 44000);
  

}
main();

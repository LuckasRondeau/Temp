
import { programarFecha} from "./programarFecha.js";
import * as temporizador from "../src/temporizador.js";


console.log("\n");
  //Programo por default el horario de la tarea 
  let fechaCronJob = programarFecha();
  
  // Creo la tarea cada 10 segundos
  let temp = temporizador.CrearTemporizador(fechaCronJob, 'TEMP 1');
  console.log('Ejecuto Start TEMP 1')
  temp.start();  

   // Creo la tarea 2 cada 12 segundos
   let temp2 = temporizador.CrearTemporizador('*/12 * * * * *', 'TEMP 2');
   temp2.start();  
 
  setTimeout(()=> {console.log('Ejecuto Stop TEMP 1'); temp.stop()}, 20000);
  setTimeout(()=> {console.log('Ejecuto Start TEMP 1'); temp.start()}, 22000);
  setTimeout(()=> {console.log('Ejecuto Destroy TEMP 1'); temp.destroy()}, 42000);
  setTimeout(()=> {console.log('Ejecuto Stop TEMP 2'); temp2.stop()}, 44000);
  



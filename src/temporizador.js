import cronNode from "node-cron";
import { ejecutarTarea } from "./ejecutarTarea.js";


function CrearTemporizador(fechaCJ, nombreTemp) {
  console.log("Tarea programada => cronExpression = ", fechaCJ);
  
  let cronJob = cronNode.schedule(fechaCJ,() => {
      let hoy = new Date().toLocaleString();
      console.log("--------------------------------------------------------");
      console.log("Iniciando Tarea de Timer " + nombreTemp + " => ", hoy);
      console.log("--------------------------------------------------------");
      //ejecuto cualquier tarea que le paso 
      ejecutarTarea();
    },
    {
      scheduled: true,
      timeZone: " America / Argentina / Buenos_Aires ",
    }
  );

  return cronJob;
}

export { CrearTemporizador };

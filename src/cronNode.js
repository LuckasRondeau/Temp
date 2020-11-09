import cronNode from "node-cron";
import { programar } from "./programar.js";

function startTemporizador() {
  
  let cronJob = cronNode.schedule( '* * * * * *',() => {
      // perform operation e.g. GET request http.get() etc.
      let hoy = new Date().toLocaleString();
      console.log("Tarea Iniciada ", hoy);
    },
    {
      scheduled: true,//para establecer si la tarea creada está programada
      timeZone: " America / Argentina / Buenos_Aires ",// 180
    }
  );
  cronJob.start();
}

function startTemporizador1(fecha) {
  console.log("Programada para :",fecha)
  let cronJob = cronNode.schedule(fecha,() => {
      // perform operation e.g. GET request http.get() etc.
      let hoy = new Date().toLocaleString();
      console.log("Tarea Iniciada ", hoy);
    },
    {
      scheduled: true,//para establecer si la tarea creada está programada
      timeZone: " America / Argentina / Buenos_Aires ",// 180
    }
  );
  cronJob.start();
}
function stopTemporizador(id) {
  console.log("Tarea detenida : "+ id);
  let cronJob = cronNode.schedule(id, () => {
    //console.log("se ejecutará cada minuto hasta que se detenga");
  });
  
  cronJob.stop();
}

function destroyTemporizador(id) {
  console.log("Tarea detenida y eliminada: "+ id);
  let cronJob = cronNode.schedule(id, () => {
    console.log("ya no se ejecutará ni podrá reiniciarse");
  });
  cronJob.destroy();
}


export { startTemporizador, stopTemporizador, destroyTemporizador, startTemporizador1 };

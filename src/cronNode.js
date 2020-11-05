import cronNode from "node-cron";
import { programar } from "./programar.js";

function startTemporizadorNcron() {
  let cronJob = cronNode.schedule( programar(),() => {
      // perform operation e.g. GET request http.get() etc.
      let hoy = new Date();
      console.log("tarea Iniciada ", hoy);
    },
    {
      scheduled: true,//para establecer si la tarea creada está programada
      timeZone: " America / Argentina / Buenos_Aires ",// 180
    }
  );
  cronJob.start();

}
function stopTemporizador() {
  let task = cronNode.schedule("* * * * * *", () => {
   // cronJob.start();
    console.log("se ejecutará cada minuto hasta que se detenga");
  });
  task.stop();
}

function destroyTemporizador() {
  let cronJob = cronNode.schedule("* * * * *", () => {
    console.log("ya no se ejecutará ni podrá reiniciarse");
  });
  cronJob.destroy();
}


export { startTemporizadorNcron, stopTemporizador, destroyTemporizador };

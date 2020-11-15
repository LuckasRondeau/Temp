import * as cronNode from "./cronNode.js";
import { programar } from "./programar.js";


 console.log("\n");
// ---------( 0-59 0-59  0-23  1-31  1-12  0-7 )
// ---------( Sec  min   hour  dayMh month dayWk )
let programado = programar(" 45 20 * Nov Sunday");

console.log("------------------------------------");
cronNode.startTemporizador1(programado);

console.log("------------------------------------");
cronNode.stopTemporizador(programado);

console.log("------------------------------------");
cronNode.destroyTemporizador(programado);

console.log("------------------------------------");
cronNode.startTemporizador();

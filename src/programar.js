const everysecond = "* * * * * *";
const everytensecond = "*/10 * * * * *";
const everyminute = "* * * * *";
const everyminute12 = "0 */12 * * *"; // Todos los dias cada 12 hs
const everydaynight = "0 0 * * *"; // Todos los dias a mediaNoche
const everyday = "0 0 * * SUN"; // Todos los domingos a mediaNoche
const everyweekday = "00 30 11 * * 1-5"; //Runs  (Monday through Friday) at 11:30:00 AM. It does not run on Saturday or Sunday.
export const CRON_DEFAULT = everytensecond;

export function programar(fecha) {
  if (fecha == "") {
    return everydaynight;
  } else {
    return fecha;
  }
}

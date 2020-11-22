import Cron from 'cron-converter';
// https://github.com/roccivic/cron-converter

var cronInstance = new Cron();
// Every 10 mins between 9am and 5pm on the 1st of every month
cronInstance.fromString('* 23 * * *');
 // Get the iterator, initialised to now
var schedule = cronInstance.schedule();
var reference = new Date();
schedule= cronInstance.schedule(reference);
// Optionally, use a reference Date or moment object
// And pass the reference to .schedule()
console.log(cronInstance.schedule());
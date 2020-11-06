//var CronJob = require("cron").CronJob;
import CronJob from "cron";

function temporizadorCron() {
  let job = new CronJob({
    cronTime: "* * * * * *",
    onTick: function () {
      let my_date = new Date();
      let tomorrow_date =`${my_date.getFullYear()}-${`0${my_date.getMonth() + 1}`}-${my_date.getDate() + 1}`;
      let condition = [ {},{ $set: { plannedDeliveryDate: tomorrow_date + "T00:00:00.000Z" } },];
      dbQuery.updateMany(orderModel, condition, function (err, result) {
          if (result.nModified == result.n) console.log(err, result);
      });
    },
    start: true,
    timeZone: " America / Argentina / Buenos_Aires ", // 180
  });
  job.start();
}

export { temporizadorCron };

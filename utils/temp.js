const cron = require("node-cron");
const { db, http, altas } = require("./utils");

class temp {
    static async getAltaPaciente() {
        const altaPacientehoy = [];
        for (const alta of altas) {
            const { fase } = (await http.get("/" + alta)).data;
            altaPacientehoy.push({
                alta,
                fase
            });
        }

        const name = new Date()
            .toDateString()
            .split(" ")
            .join("_");

        db.setItem(name, JSON.stringify(altaPacientehoy));
    }
}
function programar() {
  let task = cron.schedule(" * * * * *", () => {
        console.log("pacientes de alta");
        //temp.getAltaPaciente();
    }{
        scheduled: false  
    });
    task.start();
}
function cancelar() {
    let task = cron.schedule('* * * * *', () => {
        console.log('will execute every minute until stopped');
    });
    task.stop();
}
module.exports = {
    temp,

}
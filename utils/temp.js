//const cron = require("node-cron");
import cron from 'node-cron'
import { db, http, altas}from"./utils"

export class temp {
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


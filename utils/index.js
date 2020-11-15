
import { CronJob } from "cron";
import { join } from "path";
require("dotenv").config({ path: join(__dirname, "./env") });
import { job } from "./job";

const fileMover = new CronJob(process.env.CRON_TIME , job)

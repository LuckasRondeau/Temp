import CronJobManager from 'cron-job-manager';

let manager = new CronJobManager( // esto crea un nuevo administrador y agrega los argumentos como un nuevo trabajo.
'a_key_string_to_call_this_job',
'0 30 * * * *', // el programa crontab
() => { console.log("tick - ¿qué se debe ejecutar?") }, 
);

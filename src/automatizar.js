"use strict";

//que se ejecute en una fecha y horario determinado:
function tarea(){
    console.log('Iniciando Tarea', new Date());
}

function lanzarElDia(dia, tarea){
    console.log('lanzado',new Date());
    console.log('para ser ejecutado en',dia);
    setTimeout(tarea, dia.getTime()-(new Date()).getTime());
}

lanzarElDia(new Date('2020-10-29 20:20'), tarea);
//-------------------------------------------------------------------
"use strict";
// ejecutar todos los dias a la misma hora 
function tarea(){
    console.log('Iniciando tarea', new Date());
}

function lanzarSiempreALaHora(hora, minutos, tarea){
    var ahora = new Date();
    console.log('lanzado',ahora);
    var dia = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), hora, minutos);
    if(dia<=ahora){ // la hora era anterior a la hora actual, debo sumar un día
        dia = new Date(dia.getTime()+1000*60*60*24);
    }
    console.log('para ser ejecutado en',dia);
    setTimeout(function(){
        tarea();
        lanzarSiempreALaHora(hora,minutos,tarea);
    },dia.getTime()-ahora.getTime());
}

lanzarSiempreALaHora(21,10, tarea);

export { tarea , lanzarElDia , lanzarSiempreALaHora};
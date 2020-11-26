import fs from "fs";

export function mostrarJson() {
  try {
    const db = fs.readFileSync("./database/Fri_Oct_23_2020.json", "utf-8");
    const pacientes = JSON.parse(db);

    for (const paciente of pacientes) {
      if (paciente.Alta == true) { // si el paciente es true esta dado de alta
        console.log(paciente.Nombre + " => " + " Notificar Alta");
      } else {
        console.log(`${paciente.Nombre} => No esta dado de Alta`);
      }
    }

  } catch (err) {
    console.log("No se encontro el Archivo");
  }
}

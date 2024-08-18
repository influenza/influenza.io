import fs from 'fs';

export function datafunc() {
    let data = 1;
    let horario = 0;
    let y = 0;
    let mes = 1;
    let ano = 2024;
    let arraydata = [];
    let arrayvalue = [];

    for (let x = 0; x < 9047; x++) {
        let numeroAleatorio = Math.floor(Math.random() * (180000 - 80000 + 1)) + 100000;

        horario++;
        if (horario == 24) {
            horario = 0;
            data++;
        } else if (data == 32 && (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)) {
            mes++;
            data = 1;
        } else if (data == 31 && (mes == 4 || mes == 6 || mes == 9 || mes == 11)) {
            mes++;
            data = 1;
        } else if (data == 30 && mes == 2) {
            mes++;
            data = 1;
        }

        if (mes < 10) {
            if (data < 10) {
                if (horario < 10) {
                    arraydata.push({
                        "teamHandle": "ecosynergyofc",
                        "timestamp": `${ano}-0${mes}-0${data}T0${horario}:00:00`,
                        "value": numeroAleatorio
                    });
                } else {
                    arraydata.push({
                        "teamHandle": "ecosynergyofc",
                        "timestamp": `${ano}-0${mes}-0${data}T${horario}:00:00`,
                        "value": numeroAleatorio
                    });
                }
            } else {
                if (horario < 10) {
                    arraydata.push({
                        "teamHandle": "ecosynergyofc",
                        "timestamp": `${ano}-0${mes}-${data}T0${horario}:00:00`,
                        "value": numeroAleatorio
                    });
                } else {
                    arraydata.push({
                        "teamHandle": "ecosynergyofc",
                        "timestamp": `${ano}-0${mes}-${data}T${horario}:00:00`,
                        "value": numeroAleatorio
                    });
                }
            }
        } else {
            if (data < 10) {
                if (horario < 10) {
                    arraydata.push({
                        "teamHandle": "ecosynergyofc",
                        "timestamp": `${ano}-${mes}-0${data}T0${horario}:00:00`,
                        "value": numeroAleatorio
                    });
                } else {
                    arraydata.push({
                        "teamHandle": "ecosynergyofc",
                        "timestamp": `${ano}-${mes}-0${data}T${horario}:00:00`,
                        "value": numeroAleatorio
                    });
                }
            } else {
                if (horario < 10) {
                    arraydata.push({
                        "teamHandle": "ecosynergyofc",
                        "timestamp": `${ano}-${mes}-${data}T0${horario}:00:00`,
                        "value": numeroAleatorio
                    });
                } else {
                    arraydata.push({
                        "teamHandle": "ecosynergyofc",
                        "timestamp": `${ano}-${mes}-${data}T${horario}:00:00`,
                        "value": numeroAleatorio
                    });
                }
            }
        }
        arrayvalue.push(numeroAleatorio);
    }

    // Escreve o array em um arquivo JSON
    
    console.log('Arquivo salvo como data.json');
    return arraydata;
}

// Chama a função para gerar os dados e salvar no arquivo

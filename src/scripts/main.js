AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
    const HorasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) /horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);
    console.log(diasAteOEvento);
    console.log(HorasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${HorasAteOEvento}h ${
        minutosAteOEvento}m ${segundosAteOEvento}s`;

        if (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = 'Evento Expirado';
        }

}, 1000)
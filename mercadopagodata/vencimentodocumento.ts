
export default function vencimentopix(adicionandoMinutosAMais: number):string{

let data = new Date();

let opcoes: Intl.DateTimeFormatOptions = {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
};

let formatador = new Intl.DateTimeFormat("America", opcoes);
let dataFormatada = formatador.format(data);

let [dia, mes, ano] = dataFormatada.split(" ")[0].split("/");
let [horas, min, seg] = dataFormatada.split(" ")[1].split(":");

let totalMinutos = parseInt(min) + adicionandoMinutosAMais;
let atualizaHoras = parseInt(horas) + Math.floor(totalMinutos / 60); 
let atualizaMinutos = totalMinutos % 60; 
let atualizaSegundos = seg; 
let atualizaMilissegundos = data.getMilliseconds();
atualizaHoras = atualizaHoras % 24;

return `${ano}-${mes}-${dia}T${atualizaHoras}:${atualizaMinutos}:${atualizaSegundos}.${atualizaMilissegundos}-03:00`.replace(',', '');

}
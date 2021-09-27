var Palestrantes = 50;
var Participantes = 50;
var DataAtual = new Date()
var DataEvento = prompt("Informe a data do evento: dd/mm/aaaa");
DataEvento = DataEvento.split("/");
DataEvento = new Date(DataEvento[2], DataEvento[1]-1, DataEvento[0]);
if(DataEvento.valueOf()> DataAtual.valueOf()){
    var Idade = prompt("Informe sua idade" );
    if(Idade> 18){
        alert("Numero de participantes: " + Participantes +"\nNumero de palestrantes: " + Palestrantes );
        if(Participantes < 100){
            alert("Cadastro realizado com sucesso");
        }else{
            alert("Numero de participantes invalido");
        }
    }else{
        alert("Idade invalida");
    }
}else{
    alert("Data invalida");
}


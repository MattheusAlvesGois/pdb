let estadoRequest = new XMLHttpRequest();
let cidadeRequest = new XMLHttpRequest();

document.getElementById('estados').onchange = function() {
    var estado = document.getElementById('estados').value;

    document.getElementById('cidades').value = 'selecione';
    document.getElementById('cidades').innerHTML = '';
    cidadeRequest.open("GET", `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`);
    cidadeRequest.send();
}

estadoRequest.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/estados");
estadoRequest.send();

estadoRequest.onload = function () {

    let estados = JSON.parse(this.responseText);

    estados.forEach(estado => {
        document.getElementById('estados').add(new Option(estado.nome, estado.sigla));
    });
}

cidadeRequest.onload = function () {

    let cidades = JSON.parse(this.responseText);

    cidades.forEach(cidade => {
        document.getElementById('cidades').add(new Option(cidade.nome));
    });
}

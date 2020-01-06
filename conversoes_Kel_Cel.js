//Conversão de celsius para kelvin
function capturarDadosCel_p_Kel(){
    //Pegando a temperatura
    let temperatura = document.getElementById("temp").value;
    //COnvertendo para float
    temperatura = parseFloat(temperatura);
    //Testo se a temperatura é válida
    if(isNaN(temperatura) == true || temperatura == undefined || temperatura == "")alert("Informe apenas números e não deixe sem valor!");
    else{
        //Realizando o calculo
        conversao = temperatura + 273.15;
        //Chamo a função para escrever os dados
        imprimirDadosCel_p_Kel(conversao, temperatura);
    }
}
function imprimirDadosCel_p_Kel(conversao, temperatura){
    //Pegando o conteudo interno da div de conteudo
    x = document.getElementById("conteudo").innerHTML;
    x = `<h1 class="titulo">` + temperatura + `ºC corrempondem a:</h1>`;
    document.getElementById("conteudo").innerHTML = x;
    //Colocando o input
    x = `<input type="text" id="resultado" class="campo_digitacao">`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o botao de novo calculo
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='cel_kel.html'">Novo cálculo</button>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o botao menu
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='index.html'">Menu</button><br><br>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o valor no input
    document.getElementById("resultado").value = conversao + "K";
}
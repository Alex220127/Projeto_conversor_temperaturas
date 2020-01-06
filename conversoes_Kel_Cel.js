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
        conversao = temperatura + 273;
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
//Fim

//Conversão Kelvin para Celsius
function capturarDadosKel_p_Cel(){
    //Pegando a temperatura
    let temp = document.getElementById("temp").value;
    //COnvertendo para float
    temp = parseFloat(temp);
    //Verifico se é válido
    if(isNaN(temp) == true || temp == undefined || temp == "")alert("Informe apenas números e não deixe sem valor!");
    else{
        //Convertendo
        conversao = temp - 273;
        //funcao para imprimir os dados
        imprimirDadosKel_p_Cel(conversao, temp)
    }
}
function imprimirDadosKel_p_Cel(conversao, temp){
    //Pegando o conteudo interno da div
    x = document.getElementById("conteudo").innerHTML;
    x = `<h1 class="titulo">` + temp + `K equilavem a:</h1>`;
    document.getElementById("conteudo").innerHTML = x;
    //input de texto
    x = `<input type="text" class="campo_digitacao" id ="resultado">`;
    document.getElementById("conteudo").innerHTML += x;
    //Botao de novo calculo
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='kel_cel.html'">Novo cálculo</button>`;
    document.getElementById("conteudo").innerHTML += x;
    //Botao menu
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='index.html'">Menu</button><br><br>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o valor no input de texto;
    document.getElementById("resultado").value = conversao + "ºC";
}
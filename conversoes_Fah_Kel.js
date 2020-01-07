//Conversao fahrenheit para Kelvin
function capturarDadosFah_p_Kel(){
    //Pegando a temperatura
    let temp = document.getElementById("temp").value;
    //Verifico se é um dado correto
    temp = parseFloat(temp);
    temp == 0?zero = true:zero = false;
    if((isNaN(temp) == true || temp == undefined || temp == "") && zero == false)alert("Informe apenas números e não deixe sem valor!");
    else{
        //Converto
        conversao = (temp - 32) * 5/9 + 273;
        imprimirDadosFah_p_Kel(temp, conversao);
    }
}
function imprimirDadosFah_p_Kel(temp, conversao){
    //Pegando o conteudo interno da div
    x = document.getElementById("conteudo").innerHTML;
    x = `<h1 class="titulo"> ${temp}ºF correspondem a:</h1>`;
    document.getElementById("conteudo").innerHTML = x;
    //Colocando o input de texto
    x = `<input type="text" id="resultado" class="campo_digitacao">`; 
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o botao novo calculo
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='fah_kel.html'">Novo cálculo</button>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o botao menu
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='index.html'">Menu</button><br><br>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o valor no input de text
    document.getElementById("resultado").value = conversao + "K"
}
//Fim
//Conversao Kelvin para fahrenheit
function capturarDadosKel_p_Fah(){
    //Pegando a temperatura
    let temp = document.getElementById("temp").value;
    //Verifico se é um dado correto
    temp = parseFloat(temp);
    temp == 0?zero = true:zero = false;
    if((isNaN(temp) == true || temp == undefined || temp == "") && zero == false)alert("Informe apenas números e não deixe sem valor!");
    else{
        //Converto
        conversao =  (temp - 273) * 9/5 + 32;
        imprimirDadosKel_p_Fah(temp, conversao);
    }
}
function imprimirDadosKel_p_Fah(temp, conversao){
    //Pegando o conteudo interno da div
    x = document.getElementById("conteudo").innerHTML;
    x = `<h1 class="titulo"> ${temp}K correspondem a:</h1>`;
    document.getElementById("conteudo").innerHTML = x;
    //Colocando o input de texto
    x = `<input type="text" id="resultado" class="campo_digitacao">`; 
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o botao novo calculo
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='fah_kel.html'">Novo cálculo</button>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o botao menu
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='index.html'">Menu</button><br><br>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o valor no input de text
    document.getElementById("resultado").value = conversao + "ºF"
}
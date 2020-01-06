//Função para conversao fah em celsius
function capturarDadosFah_p_Cel(){
    let temperatura = document.getElementById("temp").value;
    //Verifico se o que foi digitado é um número
    temperatura = parseFloat(temperatura);
    if(isNaN(temperatura) == true || temperatura == undefined || temperatura == "")alert("Informe apenas números e não deixe sem valor!");
    else{
        //O valor é um numero, podemos trabalhar com ele
        conversao = (temperatura - 32) / 1.8;
        //Chamando a função para imprimir na tela os valores
        imprimirDadosFah_p_Cel(conversao, temperatura);
    }
}
function imprimirDadosFah_p_Cel(conversao, temperatura){
    //Pegando o conteudo interno da div do conteudo
    x = document.getElementById("conteudo").innerHTML;
    //Titulo
    x = "<h1 class='titulo'>" + temperatura + "ºF correspondem a: </h1>"
    document.getElementById("conteudo").innerHTML = x;
    x = "<input type='text' class = 'campo_digitacao' id='resultado'>";
    //Passando o valor para a div
    document.getElementById("conteudo").innerHTML += x;
    x = `<br><br><button type="button" class = "botoes" onclick="window.location.href='fah_cel.html'">Novo cálculo</button>`;
    document.getElementById("conteudo").innerHTML += x;
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='index.html'">Menu</button>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o resultado no novo input
    document.getElementById("resultado").value = conversao + "ºC";
}
//Fim

//Funções para conversao de Celsius em fah
function capturarDadosCel_p_Fah(){
    //Pegando a temperatura em celsius
    let temperatura = document.getElementById("temp").value;
    temperatura = parseFloat(temperatura);
    //Verifico se a temperatura digitada é valida
    if(isNaN(temperatura) == true || temperatura == undefined || temperatura == "")alert("Informe apenas dados numéricos e não deixe sem valor!");
    else{
        //Realizando o calculo C = f - 32 / 1.8 => F -32 = C * 1.8 => F = C * 1.8 + 32
        conversao = temperatura * 1.8 + 32;
        //Chamando a função que vai escrever os dados
        imprimirDadosCel_p_Fah(conversao, temperatura);
    }  
}
function imprimirDadosCel_p_Fah(conversao, temperatura){
    //Pegando o conteudo interno da div
    x = document.getElementById("conteudo").innerHTML;
    //Adicionando o titulo
    x = `<h1 class="titulo">` + temperatura + `ºC correspondem a:</h1>`;
    document.getElementById("conteudo").innerHTML = x;
    //Adicionando o input de texto
    x = `<input type="text" id="resultado" class="campo_digitacao">`
    document.getElementById("conteudo").innerHTML += x;
    //Criando o botao de novo calculo
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='cel_fah.html'">Novo cálculo</button>`
    document.getElementById("conteudo").innerHTML += x;
    //Criando o botao de menu
    x = `<br><br><button type="button" class="botoes" onclick="window.location.href='index.html'">Menu</button><br><br>`;
    document.getElementById("conteudo").innerHTML += x;
    //Colocando o valor da conversao no input
    document.getElementById("resultado").value = conversao + "ºF";
}
//Fim
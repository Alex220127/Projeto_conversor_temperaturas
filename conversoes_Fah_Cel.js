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
    //Colocando o resultado no novo input
    document.getElementById("resultado").value = conversao + "ºC";
}
function adicionarBotoesFah_p_Cel(){
    x = document.getElementById("conteudo").innerHTML;
}
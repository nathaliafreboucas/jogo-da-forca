var textarea = document.querySelector("#area-de-texto");
var button = document.querySelector("#save");


button.addEventListener('click', function(){
    var procura = /[a-z&&ç]/;
    var procuraLetra = textarea.value.search(procura);
    if(procuraLetra != - 1){
        alert("digite com letras maiúsculas");
    }else{
        if(textarea.value.length > 8){
            alert("A palavra tem mais de 8 letras");
        }else{
            palavras[palavras.length]=textarea.value;

            localStorage.setItem('palavras', JSON.stringify(palavras));
            window.location.replace("start.html");
        }
        
    }
});
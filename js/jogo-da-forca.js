var palavras = JSON.parse(localStorage.getItem('palavras'))||['AMOR', 'AREIA', 'AMAZONAS', 'ALEMANHA',//
'AMARELO', 'ALAGOAS', 'AGUA', 'AREIA', 'BOLACHA', 'BISCOITO', 'BARBARO', 'BASTARDO',//
'BORDAO', 'BREJO', 'BLUSA', 'CABANA', 'CHAMEGO', 'CHUVEIRO', 'CONVERSA', 'CRIME', 'DESGRAÇA', 'DEBOCHE', 'DESEJO'];

var i = Math.floor((Math.random())*(palavras.length));
var palavraAleatoria = palavras[i];


console.log(i + " " + palavraAleatoria);
var err=0;
var acer=0;
var aux = 1;
var arrayErros = [err];
var arrayAcertos = [acer];

var arrayPalavraCorreta = palavraAleatoria.split("");
console.log(arrayPalavraCorreta);

var posicao = 430; 
var posicaoLetraErrada = 435;    

for(var cont = 1; cont <= palavraAleatoria.length;cont++){
       
    desenhaTraco(posicao);
    posicao = posicao + 40;
    
}

function desenhaBoneco(aux){

    if(aux==1){
        desenhaCabeca();
    }
    if(aux==2){
        desenhaCorpo(); 
    }
    if(aux==3){
        desenhaBracoEsquerdo();
    }
    if(aux==4){
        desenhaBracoDireito();
    }
    if(aux==5){
        desenhaPernaEsquerda();
    }
    if(aux==6){
        desenhaPernaDireita();
    }
    
};

function resultado(){

    if(arrayErros.length == 6){
        
        setTimeout(mensagemVitoria, 1000);
    }
    if(palavraAleatoria.length == arrayAcertos.length){
        
        setTimeout(mensagemDerrota, 1000);
    }
};


document.addEventListener('keypress', function(event){
    const letra= event.key.toUpperCase();
    console.log(letra);

    if((arrayErros.includes(letra))||(arrayAcertos.includes(letra))){
        
        alert("digite outra letra");

    }else{
        if(!arrayPalavraCorreta.includes(letra)){
        
            desenhaBoneco(aux);
            arrayErros[err] = letra;
             
            caneta.beginPath();    
            caneta.font="20px 'Press Start 2P'";
            caneta.fillStyle="blue";
            caneta.fillText(letra, posicaoLetraErrada, 250);
            posicaoLetraErrada = posicaoLetraErrada + 40;

            err++;
            aux++;
    
        }else{
            var posicaoLetraCorreta =  430;
            for(var cont=0;cont<=arrayPalavraCorreta.length; cont++){
                
                if(letra == arrayPalavraCorreta[cont]){
                   
                    caneta.beginPath();    
                    caneta.font="20px 'Press Start 2P'";
                    caneta.fillStyle="blue";
                    caneta.fillText(letra, posicaoLetraCorreta, 190);

                    arrayAcertos[acer]=letra;

                    acer++;
                }
                posicaoLetraCorreta = posicaoLetraCorreta + 40;
               
            }
            
            }
           
        }
        
        resultado(); 
        
});   
function mensagemVitoria(){
    caneta.clearRect(0, 0, tela.width, tela.height);
    caneta.beginPath();    
    caneta.font="50px 'Press Start 2P'";
    caneta.fillStyle="#4743cc";
    caneta.fillText('ERRRROOUU!', 150, 200)
}
function mensagemDerrota(){
    caneta.clearRect(0, 0, tela.width, tela.height);
    caneta.beginPath();    
    caneta.font="50px 'Press Start 2P'";
    caneta.fillStyle="#4743cc";
    caneta.fillText('ACERTOU!', 170, 200)
}
desenhaForca();





   



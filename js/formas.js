let tela = document.querySelector('canvas');
let caneta = tela.getContext('2d');

function desenhaForca(){
    caneta.lineWidth = 6;
    caneta.lineCap = 'round';
    caneta.strokeStyle = '#fa556b';

    caneta.beginPath();
    caneta.moveTo(200,50);
    caneta.lineTo(200,300);
    caneta.stroke();

    caneta.beginPath();
    caneta.moveTo(200,50);
    caneta.lineTo(350,50);
    caneta.lineTo(350,100);
    caneta.stroke();

    caneta.beginPath();
    caneta.moveTo(150,300);
    caneta.lineTo(350,300);  
    caneta.stroke();
}

function desenhaCabeca(){
    caneta.lineWidth = 15;
    caneta.strokeStyle = "#6627a0";
    caneta.beginPath();
    caneta.arc(350,125,25,0, 2*3.14);
    caneta.stroke();

}

function desenhaCorpo(){
    caneta.lineWidth = 15;
    caneta.strokeStyle = "#6627a0";

    caneta.beginPath();
    caneta.moveTo(350,150);
    caneta.lineTo(350,235);
    caneta.stroke();
}

function desenhaBracoEsquerdo(){
    caneta.lineWidth = 15;
    caneta.strokeStyle = "#6627a0";

    caneta.beginPath();
    caneta.moveTo(350,170);
    caneta.lineTo(310,180);
    caneta.stroke();
}

function desenhaBracoDireito(){
    caneta.lineWidth = 15;
    caneta.strokeStyle = "#6627a0";

    caneta.beginPath();
    caneta.moveTo(350,170);
    caneta.lineTo(390,180);
    caneta.stroke();
}

function desenhaPernaEsquerda(){
    caneta.lineWidth = 15;
    caneta.strokeStyle = "#6627a0";

    caneta.beginPath();
    caneta.moveTo(350,235);
    caneta.lineTo(317,248);
    caneta.stroke();
}

function desenhaPernaDireita(){
    caneta.lineWidth = 15;
    caneta.strokeStyle = "#6627a0";

    caneta.beginPath();
    caneta.moveTo(350,235);
    caneta.lineTo(383,248);
    caneta.stroke();
}

function desenhaTraco(posicao){
    caneta.strokeStyle = 'blue';

    caneta.beginPath();
    caneta.moveTo(posicao,200);
    caneta.lineTo(posicao+30,200);
    caneta.stroke();
}

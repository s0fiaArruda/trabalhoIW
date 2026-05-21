
var opcao=0;//para a opção escolhida no momento

//para as 5 situações apresentadas no jogo

var caso2=false;
var caso3=false;
var caso4=false;
var caso5=false;

var comeco=false;
var proximo=0;

var pontuacao=0;//para pontuação final total

//botões


    function ponto1() {
          
        if (comeco===true) {
        document.getElementById('imagem').src= 'img/situacoestransparente/cliente1-satisfacao-removebg-preview.png'; 
         pontuacao=pontuacao+1
         comeco= false 
         caso2=!caso2

         proximo = proximo+ 1

        }else if(caso2===true){
        document.getElementById('imagem').src= 'img/situacoestransparente/cliente2-ruim-removebg-preview.png';
        pontuacao=pontuacao+0
         caso2=!caso2
         caso3=!caso3
        }
        else if(caso3===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente3-medio-removebg-preview.png';
         pontuacao=pontuacao+0.5
         caso3=!caso3
         caso4=!caso4
        }else if(caso4===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente4-bom-removebg-preview.png';
         pontuacao=pontuacao+1
         caso4=!caso4
         caso5=!caso5  
        }else if(caso5===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente5-bom-removebg-preview.png';
         pontuacao=pontuacao+1
         caso5=!caso5;
        }else{
            console.log("erro");
        }
      console.log(opcao+1)
    }
    function ponto2(){
        if (comeco===true) {
        document.getElementById('imagem').src= 'img/situacoestransparente/cliente1-neutro-removebg-preview.png'; 
         pontuacao=pontuacao+0.5
         comeco= false 
         caso2=!caso2
        }else if(caso2===true){
        document.getElementById('imagem').src= 'img/situacoestransparente/cliente2-medio-removebg-preview.png';
         pontuacao=pontuacao+0.5
         caso2=!caso2
         caso3=!caso3
        }
        else if(caso3===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente3-bom-removebg-preview.png';
         pontuacao=pontuacao+1
         caso3=!caso3
         caso4=!caso4
        }else if(caso4===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente4-ruim-removebg-preview.png';
         pontuacao=pontuacao+0
         caso4=!caso4
         caso5=!caso5  
        }else if(caso5===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente5-medio-removebg-preview.png';
         pontuacao=pontuacao+0.5
         caso5=!caso5;
        }else{
            console.log("erro");
        }
      console.log(opcao+2)
    }
    function ponto3(){
      if (comeco===true) {
        document.getElementById('imagem').src= 'img/situacoestransparente/cliente1-neutro-removebg-preview.png'; 
        pontuacao=pontuacao+0.5
         comeco= false 
         caso2=!caso2
        }else if(caso2===true){
        document.getElementById('imagem').src= 'img/situacoestransparente/cliente2-bom-removebg-preview.png';
        pontuacao=pontuacao+1
         caso2=!caso2
         caso3=!caso3
        }
        else if(caso3===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente3-ruim-removebg-preview.png';
         pontuacao=pontuacao+0
         caso3=!caso3
         caso4=!caso4
        }else if(caso4===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente4-bom-removebg-preview.png';
         pontuacao=pontuacao+1
         caso4=!caso4
         caso5=!caso5  
        }else if(caso5===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente5-ruim-removebg-preview.png';
         pontuacao=pontuacao+0
         caso5=!caso5;
        }else{
            console.log("erro");
        }
        console.log(opcao+3)
    }
    function ponto4(){
    if (comeco===true) {
        document.getElementById('imagem').src= 'img/situacoestransparente/cliente1-ruim-removebg-preview.png'; 
        pontuacao=pontuacao+0
         comeco= false 
         caso2=!caso2
        }else if(caso2===true){
        document.getElementById('imagem').src= 'img/situacoestransparente/cliente2-bom-removebg-preview.png';
        pontuacao=pontuacao+1
         caso2=!caso2
         caso3=!caso3
        }
        else if(caso3===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente3-bom-removebg-preview.png';
        pontuacao= pontuacao+1
         caso3=!caso3
         caso4=!caso4
        }else if(caso4===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente4-medio-removebg-preview.png';
         pontuacao=pontuacao+0.5
         caso4=!caso4
         caso5=!caso5  
        }else if(caso5===true){
         document.getElementById('imagem').src= 'img/situacoestransparente/cliente5-bom-removebg-preview.png';
        pontuacao= pontuacao+1
         caso5=!caso5;
        }else{
            comeco();
        }
      console.log(opcao+4) 
    }



//iniciar o jogo

function comecar(){
 document.getElementById('imagem').src= '/img/situacoestransparente/cliente1 (2).png';
 var div = document.getElementById("cupcakes");
 div.style.display = "block";
 comecar = undefined
 comeco=!comeco
}

//mudança da estrelas ao lado da tela

function nota(){
    if (pontuacao===0) {
      document.getElementById('estrelas').src= 'img/avaliacoes/0estrela.png'  
    }else if(pontuacao===1){
      document.getElementById('estrelas').src= 'img/avaliacoes/1estrela.png'  
    }else if(pontuacao===2){
      document.getElementById('estrelas').src= 'img/avaliacoes/2estrela.png'
    }else if(pontuacao===3){
      document.getElementById('estrelas').src= 'img/avaliacoes/3estrela.png'
    }else if(pontuacao===4){
      document.getElementById('estrelas').src= 'img/avaliacoes/4estrela.png'
    }else if(pontuacao===5){
      document.getElementById('estrelas').src= 'img/avaliacoes/5estrela.png'
    }else if(pontuacao===0.5){
      document.getElementById('estrelas').src= 'img/avaliacoes/avaliacao05.png'
    }else if(pontuacao===1.5){
      document.getElementById('estrelas').src= 'img/avaliacoes/avaliacao15.png'
    }else if(pontuacao===2.5){
      document.getElementById('estrelas').src= 'img/avaliacoes/avaliacao25.png'
    }else if(pontuacao===3.5){
      document.getElementById('estrelas').src= 'img/avaliacoes/avaliacao35.png'
    }else{
      document.getElementById('estrelas').src= 'img/avaliacoes/avaliacao45.png'
    }
}

function mudarcliente(){
   
  if(proximo===1){
      document.getElementById('imagem').src= 'img/situacoestransparente/cliente2-removebg-preview.png';
      document.getElementById('cups').src= 'img/cupcakes/cupcakes2.png';
      proximo=proximo+1
    }else if(proximo===2){
      document.getElementById('imagem').src= 'img/situacoestransparente/cliente3-removebg-preview.png';
      document.getElementById('cups').src= 'img/cupcakes/cupcakes3.png';
      proximo=proximo+1
    }else if(proximo===3){
      document.getElementById('imagem').src= 'img/situacoestransparente/cliente4-removebg-preview.png';
      document.getElementById('cups').src= 'img/cupcakes/cupcakes4.png';
      proximo=proximo+1
    }else if(proximo===4){
      document.getElementById('imagem').src= 'img/situacoestransparente/cliente5-removebg-preview.png';
      document.getElementById('cups').src= 'img/cupcakes/cupcakes5.png';
      proximo=proximo+1
    }else if(proximo===5){
      document.getElementById('imagem').src= '';
      document.getElementById('cups').src= '';
      return nota()
    }else{
      console.log("erro")
    }
  }                                  


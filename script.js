let Botao = document.getElementById('doar');


function darIban(){
    var resposta = confirm( "Tem a certeza que deseja doar? \n Caso deseje clique OK");
    if (resposta == true){
        alert( "O IBAN PARA DOAÇÃO É O:  \n AO06 0000.0000.0000.0000.6 \n SWIFT CODE: \n BAIAO");

    } else{
        alert( " ESpero que em Algum momento possa doar T_T ");
    }
}
Botao.addEventListener("click", darIban);

const money_View = document.getElementById("money");
let money = Number(money_View.innerHTML);
let click = 1;

function a(){
    money=money+click;
    money_View.innerHTML = money;
}


async function produto1(){

    const qtd =document.getElementById("qtdProduto1")
    const valor =document.getElementById("valorProduto1")

    let qtd_Number = Number(qtd.innerHTML);
    let valor_Number = Number(valor.innerHTML)
    


    if(valor_Number<= money){
        qtd.innerHTML = qtd_Number+1;
        money=money-valor_Number;
        money_View.innerHTML = Math.trunc(money);
        valor.innerHTML = Math.trunc(10*Math.pow((1+0.1),qtd_Number));
        click = 1*qtd_Number+1;
    }
}

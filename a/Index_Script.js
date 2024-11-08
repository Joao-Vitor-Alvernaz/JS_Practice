const money_View = document.getElementById("money");
let money = Number(money_View.innerHTML);
let click = 1;
let prod1 = 1;
let prod2 = 1;
let prod3 = 0;

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
        prod1 = prod1+1;
        click_Calculator();
    }
}


async function produto2(){

    const qtd =document.getElementById("qtdProduto2")
    const valor =document.getElementById("valorProduto2")

    let qtd_Number = Number(qtd.innerHTML);
    let valor_Number = Number(valor.innerHTML)
    


    if(valor_Number<= money){
        qtd.innerHTML = qtd_Number+1;
        money=money-valor_Number;
        money_View.innerHTML = Math.trunc(money);
        valor.innerHTML = 100*Math.pow(10,qtd_Number);
        prod2 = prod2 +1;
        click_Calculator();
    }
}

async function produto3(){

    const qtd =document.getElementById("qtdProduto3")
    const valor =document.getElementById("valorProduto3")

    let qtd_Number = Number(qtd.innerHTML);
    let valor_Number = Number(valor.innerHTML)
    


    if(valor_Number<= money){
        qtd.innerHTML = qtd_Number+1;
        money=money-valor_Number;
        money_View.innerHTML = Math.trunc(money);
        valor.innerHTML = 1000*Math.pow(10,qtd_Number);
        prod3 = prod3 +1;
        
        if(prod3 = 0){
            teste();
        }
    }
}

async function teste(){
    setTimeout(function()
    {
        alert("a");
        money=money+(prod3*click);
        money_View.innerHTML = money;
        teste()
    },5000);
}

function click_Calculator(){
    click = prod1 * prod2;
}


$(document).ready(function() {
    $('#spinner_cooperado').select2();
});

var tableFretes = document.getElementById("table_fretes")
var body = tableFretes.children[2]
var tamanhoFretes = body.childElementCount
var ckb_fretes = document.getElementById("ckb_fretes")

function selTodosFretes(){
    for(let i=0; i<tamanhoFretes;i++){
        var row = body.children[i]
        var check = row.children[0].children[0]
        check.checked = ckb_fretes.checked
    }  
}

function AlteraTabelaFretes(){
    var total = 0
    for(let i = 0; i < tamanhoFretes; i++){

       var row = body.children[i]
       var check = row.children[0].children[0].checked
       var inputPagar =body.children[i].children[7].children[0]
       var vrPagar = parseFloat(inputPagar.value) 
       var vrPend = parseFloat(body.children[i].children[6].innerText) 
       var footerTotal = document.getElementById("total_pagar_fretes")

       if(vrPagar > vrPend){
       alert("Valor a pagar não pode ser maior que o valor pendente.")
       inputPagar.value = vrPend
       vrPagar = vrPend
       }

       if (vrPagar==null||isNaN(vrPagar)){
        vrPagar = 0
       }

       if(check){
        total = total + vrPagar
        row.style.backgroundColor = "#dddddd"
       } else {
        row.style.backgroundColor = "#FFFFFF"
       }
       var totalFrete = document.getElementById('vr_fretes')
       totalFrete.value = total

       footerTotal.innerText = total
      
    }

}











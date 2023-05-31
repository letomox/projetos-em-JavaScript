 function tabuada(){

    var n = document.getElementById('txtn')
    var tab= document.getElementById('seltb')
    
    if (n.value.length==0){
            
         window.alert('ERRO!!! nenhum valor informado')

    }else {
         var n = Number(n.value)
         tab.innerHTML = ``
         for (var c = 0 ; c<=10 ; c++){
            var item = document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            tab.appendChild(item)
         }
    }
 }
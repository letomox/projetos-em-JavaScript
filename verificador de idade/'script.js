function verificar() {
var data = new  Date()
var ano = data.getFullYear()
var fano= document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length ==0 || Number(fano.value )> ano) {
    window.alert('ERRO!! verifique os dados e tente novamente')
    
}else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano- Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if (fsex[0].checked) {
        genero = 'homem'
        if (idade >=0 && idade <=10) {
            //criança
            img.setAttribute('src','bebehomem.png')
        }else if ( idade <21) {
            //jovem adulto
            img.setAttribute('src','jovemhomem.png')
        }else if ( idade <50) {
            // adulto
            img.setAttribute('src','adultohomem.png')
        }else  {
            //idoso
            img.setAttribute('src','idosohomem.png')
        }
    }else if (fsex [1].checked){
        genero= 'mulher'
        if (idade >=0 && idade <=10) {
            //criança
            img.setAttribute('src','bebemulher.png')
        }else if ( idade <21) {
            //jovem adulta
            img.setAttribute('src','jovemmulher.png')
        }else if ( idade <50) {
            // adulta
            img.setAttribute('src','adultamulher.png')
        }else  {
            //idosa
            img.setAttribute('src','idosamulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}


}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        // Método com menos IF's
        if(fsex[0].checked){
            genero = 'homem' 
            document.body.style.background = 'rgb(70, 142, 236)'
        }
        else {
            genero = 'mulher'
            document.body.style.background = 'rgb(187, 87, 179)'
        }
        if(idade <= 10)img.setAttribute('src',`img/${genero}/foto-bebe.png`)
        else if(idade <= 21) img.setAttribute('src', `img/${genero}/foto-jovem.png`)
        else if(idade <= 50) img.setAttribute('src', `img/${genero}/foto-adulto.png`)
        else img.setAttribute('src', `img/${genero}/foto-idoso.png`)
        res.style.textAlign = 'center'
        res.innerHTML = `<p> Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
        // Método com mais IF's
/* 
    if (fsex[0].checked){
        genero =  'Homem'
        if (idade >=0 && idade < 10) {
            // Criança
            var age = 'Criança'
            img.setAttribute('src', 'img/foto-bebe-m.png')
        } else if (idade < 21){
            // Jovem
            var age = 'Jovem'
            img.setAttribute('src', 'img/foto-jovem-m.png')
        } else if (idade < 50){
            // Adulto 
            var age = 'Adulto'
            img.setAttribute('src', 'img/foto-adulto-m.png')
        } else {
            var age = 'Idoso'
            // Idoso
            img.setAttribute('src','img/foto-idoso-m.png')
        }
    }  else if(fsex[1].checked){
        genero =  'Mulher'
        if (idade >=0 && idade < 10) {
            // Criança
            var age = 'Criança'
            img.setAttribute('src', 'img/foto-bebe-f.png')
        } else if (idade < 21){
            // Jovem
            var age = 'Jovem'
            img.setAttribute('src', 'img/foto-jovem-f.png')
        } else if (idade < 50){
            // Adulto 
            var age = 'Adulta'
            img.setAttribute('src', 'img/foto-adulto-f.png')
        } else {
            // Idoso
            var age = 'Idosa'
            img.setAttribute('src','img/foto-idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} ${age} com ${idade} anos. `
    res.appendChild(img)
*/

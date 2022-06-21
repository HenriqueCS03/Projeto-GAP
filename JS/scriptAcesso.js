const btnConfirmar = document.getElementById('confirmId')

btnConfirmar.addEventListener('click', ()=>{
    const campos = document.querySelectorAll('.inserir') 
    for(let i= 0; i < campos.length; i++){
        if(campos[i].value == ""){
            alert("O campo "+ campos[i].placeholder + " não foi preenchido")
                return
        }
    }
    document.querySelector('.cadastro').submit() 
});
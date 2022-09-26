let btnMenu = document.getElementById("btnMenu");
let menu = document.getElementById("menu");

btnMenu.addEventListener("click",function(){
    menu.classList.toggle("menuShow");
});

const cep = document.getElementById("cep");
// const endereco = document.getElementById("endereco");
// const bairro = document.getElementById("bairro");
// const estado = document.getElementById("estado");
// const cidade = document.getElementById("cidade");


cep.addEventListener('blur', function(){
      console.log();
        fetch("https://viacep.com.br/ws/"+this.value+"/json/").then(function(response){
          
                 
        response.json().then(function(response){
            if(!response.erro){
                document.getElementById("endereco").value = response.logradouro;
                estado.value = response.uf;
            }else{
                alert("Cep Não encontrado")
            }
                    
            });
        })
       
});
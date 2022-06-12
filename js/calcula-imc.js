var titulo = document.querySelector("h1");
titulo.textContent = "Verônica Nutrição";

//primeiro paciente
var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length ; i++){
  //console.log(pacientes[i]);

  var paciente= pacientes[i];

  var tdPeso= paciente.querySelector(".info-peso");
  var peso= tdPeso.textContent;

  var tdAltura= paciente.querySelector(".info-altura");
  var altura= tdAltura.textContent;

  var tdImc= paciente.querySelector(".info-imc");

  var pesoEhValido= validaPeso(peso); // TRUE OU FALSE
  var alturaEhValida= validaAltura(altura);

  if(!pesoEhValido){
    console.log("peso inválido");
    pesoEhValido= false;
    tdImc.textContent= "Peso Inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaEhValida){
    console.log("Altura Inválida!");
    alturaEhValida=false;
    tdImc.textContent= "Altura Inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if(alturaEhValida && pesoEhValido){

    var imc= calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if(peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura>=0 && altura <= 3.00){
    return true;
  }else{
    return false;
  }
}


function calculaImc(peso, altura){
  var imc=0;

  imc= peso / (altura * altura);
  return imc.toFixed(2);

}

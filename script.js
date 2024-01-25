const numeroIngresadoString = prompt("Por favor ingrese un número");
const numeroIngresado = Number(numeroIngresadoString);

//Capturamos el span donde se debe mostrar el número ingresado en el prompt
const spanNumeroIngresado = document.querySelector(".dato-ingresado");

//Capturamos el número que se encuentra quemado en el span y lo convertimos en número
const numeroQuemado = Number(document.querySelector(".dato-quemado").innerText);

//Capturar los botones dentro del contenedor de btn

const listaBotones = document.querySelectorAll(".btn-container button");

//Declaramos una función que realice las operaciones aritméticas correspondiente.

const operacionesAritmeticas = (numeroIngresado, numeroEnSpan, operacion) => {
  switch (operacion) {
    case "suma":
      return numeroIngresado + numeroEnSpan;
    case "resta":
      return numeroIngresado - numeroEnSpan;
    case "multiplicacion":
      return numeroIngresado * numeroEnSpan;
    case "division":
      return numeroIngresado / numeroEnSpan;
    default:
      return "Operación incorrecta";
  }
};



//Insertar el texto (o número) en el span
spanNumeroIngresado.innerText = numeroIngresadoString;

listaBotones.forEach((boton) => {
  boton.addEventListener("click", () => {
      // console.log("Hice click en el boton", boton.id);
      const resultado = operacionesAritmeticas(numeroIngresado, numeroQuemado, boton.id);
      console.log(resultado);
      const spanResultado = document.querySelector(".resultado-operacion");
      spanResultado.innerText = resultado;
  });
});

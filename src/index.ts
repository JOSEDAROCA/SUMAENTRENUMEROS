import "./styles.css";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
let btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");
let sumaIndice: number = 0;

btn.addEventListener("click", () => {
  let num1Ingresado: number = Number(num1.value);
  let num2Ingresado: number = Number(num2.value);
  console.log(num1Ingresado + num2Ingresado);

  for (let index = num1Ingresado; index <= num2Ingresado; index++) {
    sumaIndice = sumaIndice + index;
    console.log(sumaIndice);
    resultado.innerText = "La suma de los numeros es " + " " + sumaIndice;
  }
});

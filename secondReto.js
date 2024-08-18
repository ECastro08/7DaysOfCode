let inputName = prompt("Cual es su nombre");
let inputAge = prompt("Cuántos años tienes?");
let inputlenguaje = prompt("Lenguaje de programación");

console.log(`Hola ${inputName}, tienes ${inputAge} y ya estás aprendiendo ${inputlenguaje}.`);

console.log(`Te gustaría estudiar ${inputlenguaje}? Responde 1 para SI y 0 para NO`);

let answerUser = prompt("Ingresa tu respuesta");

let ResultadoUser = (answerUser = 1) ? "¡Muy bien! Sigue estudiando y tendrás mucho éxito" : " Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";

console.log(resultadoUser);



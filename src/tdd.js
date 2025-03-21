// PASO 1 Escribir la funcion
// const sumar = (a, b) => {
//     return a + b;
// };

// Pensar múltiples escenarios para poner a prueba la función
// 1. La función debe retornar null si algún parametro no es númerico
// 2. La función debe retornar 0 si no se pasa ningún parametro
// 3. La función debe poder realizar la suma correctamente.
// 4. La función debe poder hacer la suma con cualquier cantidad de números.

// PASO 2: Hacer que las pruebas pasen
/* const sumar = (a, b) => {
    // Test 2
    if (a === undefined || b === undefined) {
        return 0
    }
    // Test 1
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        return null
    }
    // Test 3
    const rtado = a + b
    return rtado;
}; */

const sumar = (...nros) => {

    // Test 2
    if (nros.length === 0) {
        return 0
    }

    

}


// TEST 1
const testTotales = 4;
let testPasados = 0;
console.log("1. La función debe retornar null si algún parametro no es númerico");

const resultado1 = sumar("1", 2);
if (resultado1 === null) {
    console.log("✅ Test 1 pasó");
    testPasados++;
} else {
    console.log("❌ Test 1 no pasó. Se esperaba null pero se recibió: ", resultado1);
}

console.log("--------------------------------------------------------------------------");

// TEST 2
console.log(" 2. La función debe retornar 0 si no se pasa ningún parametro");

const resultado2 = sumar();
if (resultado2 === 0) {
    console.log("✅ Test 2 pasó");
    testPasados++;
} else {
    console.log("❌ Test 2 no pasó. Se esperaba 0 pero se recibió: ", resultado2);
}

console.log("--------------------------------------------------------------------------");
// TEST 3
console.log("3. La función debe poder realizar la suma correctamente.");

const resultado3 = sumar(1, 2);
if (resultado3 === 3) {
    console.log("✅ Test 3 pasó");
    testPasados++;
} else {
    console.log(sumar(1, 2));
    console.log(`❌ Test 3 no pasó. Se esperaba ${1 + 2} pero se recibió: ${resultado3}`);
}

console.log("--------------------------------------------------------------------------");
// TEST 4
console.log("La función debe poder hacer la suma con cualquier cantidad de números.");

const resultado4 = sumar(1, 2, 4);
if (resultado4 === 4) {
    console.log("✅ Test 4 pasó");
    testPasados++;
} else {
    console.log(`❌ Test 4 no pasó. Se esperaba ${1 + 2 + 4} pero se recibió: ${resultado4}`);
}

if (testPasados === testTotales) {
    console.log("Felicitaciones, pasaste todos los tests!");
} else {
    console.log(`⚠ Se pasaron ${testPasados}/${testTotales} tests `);
}
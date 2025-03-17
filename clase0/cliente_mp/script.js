//  Integrar MercadoPago del lado del cliente
/* Public Key */
const mp = new MercadoPago("APP_USR-a848fd51-d170-4079-8182-0468b7e70bb8", {
    locale: "es-AR"
});

document.getElementById("checkout-btn").addEventListener("click", async () => {
    try {
        //  Paso los datos del producto: 
        const orderData = {
            title: "Patito",
            quantity: 1,
            price: 100
        }

        // envío un recurso a la ruta de mi back
        // lo guardo en una referencia, una variable, para poder chequear si salió bien la operación
        const productToPost = await fetch("http://localhost:8080/create-preference", {
            // fetch por defecto hace un GET, asique le indico el método que quiero 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData) // lo tengo que enviar en formato JSON
        })

        const preference = await productToPost.json();
        console.log("Respuesta del servidor:", preference);

        // Llamo a la función para generar el botón de pago
        createCheckoutButton(preference.id);

    } catch (error) {
        console.error("Error en la integración:", error);
        alert("Error fatal, se suspende el verano, tenias tantas carreras para elegir pero te decidiste por la que no tenes talento");
    }
})

const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    // Correccion para evitar qeu se dupliquen los botones: 
    // if (window.checkoutButton) {
    //     return window.checkoutButton.unmount();
    // }
    if (window.checkoutButton) window.checkoutButton.unmount();


    // Si ya existe el boton, desmontalo. 
    const renderComponent = async () => {
        await bricksBuilder.create("wallet", "wallet-container", {
            initialization: {
                preferenceId: preferenceId
            }
        })
    }
    renderComponent();
}
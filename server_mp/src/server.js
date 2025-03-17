const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

const { MercadoPagoConfig, Preference } = require("mercadopago");

const client = new MercadoPagoConfig({
    /* Access Token */
    accessToken: "APP_USR-378690869233411-031718-de9c798b3c0de1497f91c96485a0a90f-2336825638"
})

// Middleware
app.use(express.json()); // el Cliente me envía los datos en formato JSON 
app.use(cors()); // Cors a nivel middleware

// Rutas
/* GET */
app.get("/", async (req, res) => {
    try {
        res.json("Página de Inicio!")
    } catch (error) {
        console.log("ERROR en: /", error);

    }
})

/* POST */
app.post("/create-preference", async (req, res) => {
    try {
        const body = {
            // los items son los productos que voy a llevar al proceso de checkout, los que compra el usuario
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS"
                }
            ],
            back_urls: {
                success: "http://localhost:8080/",
                failure: "https://www.mercadolibre.com.ar/",
                pending: "https://www.mercadolibre.com.ar/"
            },
            // chequear esta clave
            auto_return: "approved"
        }

        const preference = new Preference(client);
        const result = await preference.create({ body });

        // Respuesta enviada al front: 
        res.json({
            id: result.id
        })

    } catch (error) {
        console.log(error);
        res.send("Error mortal");
    }
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
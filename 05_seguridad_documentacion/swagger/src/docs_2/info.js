export const info = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Adoptme",
            description: "Documentación de la API para adopción de mascotas",
            version: "1.0.0",
        },
        servers: [
            { url: 'localhost:8080' }
        ]
    },
    apis: ["./src/docs/**/*.yml"], // ruta a los archivos de documentación
};
# json() y urlencoded()  Express
1) funciones de middleware express que analizan los datos en las solicitudes salientes (req).

##  Son funciones de middleware
El middleware es una función o fragmento de código que se ejecuta entre el momento en que un servidor recibe una solicitud de un cliente y el momento en que le envía una respuesta. o funciones que manipulan datos entrantes o salientes (como .json()y .urlencoded())

## Analizan los req
Ambos se utilizan para analizar los datos que se envían al reqobjeto. El uso de .json() y .urlencoded() depende de la codificación de los datos que se envían en la solicitud al servidor.

Dado que se utilizan en requna llamada al servidor, solo se necesitan para solicitudes POST y PUT


## ¿cuál es exactamente la diferencia y cómo puedo utilizarlos?
### .json()
Express.json() espera que los datos de la solicitud se envíen en formato JSON, que a menudo se parece a un objeto JS simple:
### .urlencoded()
Express.urlencoded() espera que los datos de la solicitud se envíen codificados en la URL, generalmente en cadenas o matrices:


## !
si quieres que se utilicen cada vez que se realiza una solicitud en el servidor (que es un caso de uso típico), también puedes usar app.use

`
app.use(express.json())

app.use(express.urlencoded())`

# https://dev.to/griffitp12/express-s-json-and-urlencoded-explained-1m7o

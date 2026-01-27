export const generateUserErrorInfo = (user) => {
    return `One or more properties were incomplete or not valid.
    List of required properties:
    * first_name : needs to be a String, received ${user.first_name}
    * last_name : needs to be a String, received ${user.last_name}
    * email : needs to be a String, received ${user.email}`
}

// Nueva función para manejar errores de parámetros
export const generateParamErrorInfo = (uid) => {
    return `Invalid parameter received.
    Parameter details:
    * uid : debe ser un entero positivo, se recibió ${uid}
    * Type: ${typeof uid}`
}
import { Router } from 'express';
import CustomError from '../services/customerror.js';
import Errors from '../services/errors/enum.js';
import { generateUserErrorInfo } from '../services/errors/info.js';

const users = [];
const router = Router();

router.get('/', (req, res) => {
    res.send({ status: "success", payload: users });
});

router.post('/', (req, res) => {
    const { first_name, last_name, age, email } = req.body;
    if (!first_name || !last_name || !email) {
        CustomError.createError({
            name: "User creation error",
            cause: generateUserErrorInfo({ first_name, last_name, age, email }),
            message: "Error Trying to create User",
            code: Errors.INVALID_TYPES_ERROR
        });
    }
    const user = {
        first_name,
        last_name,
        age,
        email
    };
    if (users.length == 0) {
        user.id = 1;
    } else {
        user.id = users[users.length - 1].id + 1;
    }
    users.push(user);
    res.send({ status: "success", payload: user });
});

// NUEVO ENDPOINT: GET /:uid
router.get('/:uid', (req, res) => {
    const { uid } = req.params;

    // Validar que uid sea un número válido
    const uidNumber = parseInt(uid);

    // Verificar si es undefined, no es número, es negativo o no es entero
    if (uid === undefined ||
        isNaN(uidNumber) ||
        uidNumber <= 0 ||
        !Number.isInteger(uidNumber) ||
        uid.includes('.') || uid.includes(',')
    ) {
        CustomError.createError({
            name: "Invalid parameter error",
            cause: generateParamErrorInfo(uid),
            message: "Error trying to get user by ID",
            code: Errors.INVALID_PARAM
        });
    }

    // simula la búsqueda
    const user = users.find(user => user.id === uidNumber);

    if (user) {
        res.send({ status: "success", payload: user });
    } else {
        // Si no se encuentra el usuario
        res.status(404).send({
            status: "error",
            message: `User with ID ${uidNumber} not found`
        });
    }
});

export default router;
import * as userService from "../services/user.service.js";

export const createUser = async (req, res) => {
  try {
    const { cant } = req.query; // recibo por query la cantidad
    res.json(await userService.createUsersMock(cant)); // imprimo por pantalla, los usurios random generados
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    res.json(await userService.getUsers());
  } catch (error) {
    console.log(error);
  }
};

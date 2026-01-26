import { UserModel } from "../models/user.model.js";
import { generateUser } from "../utils/user.utils.js";

export const createUsersMock = async (cant = 20) => {
  try {
    let usersArray = [];
    for (let i = 0; i < cant; i++) {
      const user = generateUser(); // creo el usuario random
      usersArray = [...usersArray, user]; // pusheo el usuario random
    }
    const result = await UserModel.create(usersArray);

    console.log("Usuarios guardados en Mongo:", result.length); // 👈 DEBUG

    return await UserModel.create(usersArray);
  } catch (error) {
    throw new Error(error);
  }
};

export const getUsers = async () => {
  try {
    const users = await UserModel.find({});
    console.log("Usuarios encontrados:", users.length); // 👈 DEBUG
    return await UserModel.find({});
  } catch (error) {
    throw new Error(error);
  }
};

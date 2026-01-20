import { fakerES as faker } from "@faker-js/faker";
// generateUser devuelve un objeto con los campos que tengo en el modelo del usuario
export const generateUser = () => {
  return {
    name: faker.name.firstname(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.imageUrl(),
  };
};

import { faker } from "@faker-js/faker";
faker.locale = 'es' // para que genere nombres en castellano
// generateUser devuelve un objeto con los campos que tengo en el modelo del usuario
export const generateUser = () => {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.avatar(),
  };
};

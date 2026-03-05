// es el objeto que envío por Body para registrar el usuario
export class CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  role?: string;
  password: string;
  age: number;
}
